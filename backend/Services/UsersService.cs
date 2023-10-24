using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using System.Data.Common;
using Microsoft.AspNetCore.Authorization;

using Grpc.Core;
using ChatApp;
using ChatApp.Data;
using Google.Protobuf;

namespace ChatApp.Services;

public class UsersService : Users.UsersBase
{
    private readonly ILogger<UsersService> _logger;
    private readonly UserRepository _userRepository;
    private readonly JwtGenerator _jwt;

    public UsersService(ILoggerFactory loggerFactory, UserRepository userRepository, JwtGenerator jwt)
    {
        _logger = loggerFactory.CreateLogger<UsersService>();
        _userRepository = userRepository;
        _jwt = jwt;
    }
    
    [Authorize]
    public override Task<User> UserInfo(UserInfoRequest request, ServerCallContext context)
    {
        try
        {
            if (request == null || string.IsNullOrEmpty(request.UserId))
            {
                throw new RpcException(new Status(StatusCode.InvalidArgument, "Invalid request"));
            }
            _logger.LogInformation($"UserInfo: [{request.UserId}]");

            Models.User db_user = _userRepository.GetUserById(request.UserId);

            if (db_user == null)
            {
                throw new RpcException(new Status(StatusCode.NotFound, $"A user with id: {request.UserId} is not found."));
            }
            User user = new User
            {
                Username = db_user.UserName,
                UserId = db_user.UserId,
                Email = db_user.Email,
            };
            return Task.FromResult(user);

        }
        catch (DataLayerException ex)
        {
            StatusCode grpcStatusCode = ex.ToGrpcStatusCode();
            _logger.LogError($"Data Layer Error: {ex.Message}");
            throw new RpcException(new Status(grpcStatusCode, ex.Message));
        }
        catch (Exception ex)
        {
            _logger.LogError($"An unexpected error occurred: {ex.Message}");
            throw new RpcException(new Status(StatusCode.Internal, "An unexpected error occurred"));
        }

    }


    public override Task<User> SignUp(SignUpRequest request, ServerCallContext context)
    {
        try
        {
            _logger.LogInformation($"SignUp: [{request.Username}]");

            string uniqueID = Guid.NewGuid().ToString();
            Models.User new_user = new Models.RegisteredUser(uniqueID, request.Username, request.Email, DateTime.Now);
            new_user.SetPassword(request.Password);
            _userRepository.AddUser(new_user);

            User user = new User
            {
                Username = new_user.UserName,
                UserId = new_user.UserId,
                Email = new_user.Email,
            };

            return Task.FromResult(user);
        }
        catch (DataLayerException ex)
        {
            StatusCode grpcStatusCode = ex.ToGrpcStatusCode();
            _logger.LogError($"Data Layer Error: {ex.Message}");
            throw new RpcException(new Status(grpcStatusCode, ex.Message));
        }
        catch (Exception ex)
        {
            _logger.LogError($"An unexpected error occurred: {ex.Message}");
            throw new RpcException(new Status(StatusCode.Internal, "An unexpected error occurred"));
        }
    }

    public override Task<LoginResponse> Login(LoginRequest request, ServerCallContext context)
    {
        try
        {
            if (request == null || string.IsNullOrEmpty(request.Email))
            {
                throw new RpcException(new Status(StatusCode.InvalidArgument, "Invalid request"));
            }

            _logger.LogInformation($"Login: [{request.Email}]");

            Models.User logged_user = _userRepository.GetUserByEmail(request.Email);

            if (logged_user == null)
            {
                throw new RpcException(new Status(StatusCode.NotFound, $"A user with email: {request.Email} is not found, please signup first"));
            }

            if (string.IsNullOrEmpty(logged_user.PasswordHash))
            {
                throw new RpcException(new Status(StatusCode.FailedPrecondition, "Stored password hash is missing"));
            }

            if (!logged_user.ValidatePassword(request.Password)) {
                _logger.LogWarning($"Invalid password: {request.Email}");
                throw new RpcException(new Status(StatusCode.Unauthenticated, "Invalid password"));
            }

            User user = new User
            {
                Username = logged_user.UserName,
                UserId = logged_user.UserId,
                Email = logged_user.Email,
            };
            // Serialize to a byte array
            byte[] binaryData = user.ToByteArray();

            // Convert byte array to Base64 string
            string userDataEncoded = Convert.ToBase64String(binaryData);
            var loginResponse = new LoginResponse
            {
                Jwt = _jwt.GenerateToken(userDataEncoded),
                User = user,
            };
            

            return Task.FromResult(loginResponse);
        }
        catch (DataLayerException ex)
        {
            StatusCode grpcStatusCode = ex.ToGrpcStatusCode();
            _logger.LogError($"Data Layer Error: {ex.Message}");
            throw new RpcException(new Status(grpcStatusCode, ex.Message));
        }
        catch (RpcException ex)
        {
            throw ex;
        }
        catch (Exception ex)
        {
            _logger.LogError($"An unexpected error occurred: {ex.Message}");
            throw new RpcException(new Status(StatusCode.Internal, "An unexpected error occurred"));
        }
    }

}