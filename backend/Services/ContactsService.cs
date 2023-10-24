using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading.Tasks;

using Grpc.Core;
using ChatApp;
using ChatApp.Data;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace ChatApp.Services;

public class ContactsService : Contacts.ContactsBase 
{
    private static ConcurrentDictionary<string, (IServerStreamWriter<SendMessageRequest>, CancellationTokenSource)> userStreams = new ConcurrentDictionary<string, (IServerStreamWriter<SendMessageRequest>, CancellationTokenSource)>();
    private readonly ILogger _logger;
    private readonly ContactRepository _contactRepository;
    public ContactsService(ContactRepository contactRepository, ILoggerFactory loggerFactory)
    {
        _logger = loggerFactory.CreateLogger<ContactsService>();
        _contactRepository = contactRepository;
    }

    [Authorize]
    public override Task<GetContactsResponse> GetContacts(GetContactsRequest request, ServerCallContext context)
    {
        try
        {
            _logger.LogInformation($"GetContacts: {request.UserId}");
            var contacts = _contactRepository.GetContactsByUserId(request.UserId);
            _logger.LogInformation($"Found contacts: {contacts.Count}");

            var response = new GetContactsResponse
            {
                Contacts = { contacts.Select(c => new Contact
                    {
                        UserId = c.ContactId,
                        DisplayName = c.DisplayName,
                        Email = c.Email,
                        // Set any other properties you need
                    })
                }
            };

            return Task.FromResult(response);
        }
        catch (DataLayerException ex)
        {
            // Handle data layer exceptions, you may want to log them or translate them into gRPC errors.
            throw new RpcException(new Status(StatusCode.Internal, ex.Message));
        }
        catch (Exception ex)
        {
            // Handle any other exception types as you see fit.
            throw new RpcException(new Status(StatusCode.Internal, "An unexpected error occurred."));
        }
    }
}