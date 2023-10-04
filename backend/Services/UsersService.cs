using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading.Tasks;

using Grpc.Core;
using ChatApp;
using ChatApp.Data;

namespace ChatApp.Services;

public class UsersService : Users.UsersBase
{
    private readonly ILogger<UsersService> _logger;
    private readonly UserRepository _userRepository;

    public UsersService(ILoggerFactory loggerFactory, UserRepository userRepository)
    {
        _logger = loggerFactory.CreateLogger<UsersService>();
        _userRepository = userRepository;
    }

    public override Task<User> SignUp(SignUpRequest request, ServerCallContext context)
    {
        _logger.LogInformation($"SignUp: [{request.Username}]");

        string uniqueID = Guid.NewGuid().ToString();
        Models.User new_user = new Models.RegisteredUser(uniqueID, request.Username, request.Email, DateTime.Now);

        _userRepository.AddUser(new_user);

        User user = new User {
            Username = new_user.UserName,
            UserId = new_user.UserId,
            Email = new_user.Email,
        };

        return Task.FromResult(user);
    }

}