using System;
using System.Collections.Generic;
using System.Linq;
using ChatApp.Models;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using ChatApp.Models;

namespace ChatApp.Data;

public class ChatRepository
{
    private readonly AppDbContext _dbContext;

    public ChatRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public List<Chat> GetChatsByUserId(string userId)
    {
        // Fetch chat rooms related to a user from the UserChatRooms table
        var dbChats = _dbContext.UserChatRooms
                    .Where(ucr => ucr.UserId == userId)
                    .Include(ucr => ucr.ChatRoom) // Assuming you have a ChatRoom navigation property on UserChatRooms
                    .Select(ucr => ucr.ChatRoom)
                    .ToList();

        return dbChats.Select(dbChat => new Chat
        {
            ChatId = dbChat.ChatRoomId,
            ChatName = dbChat.Name,
            // Add other properties as needed
        }).ToList();
    }

    public bool SaveChat(Chat chat)
    {
        using (var transaction = _dbContext.Database.BeginTransaction())
        {
            try
            {
                var dbChat = new DbChatRoom
                {
                    ChatRoomId = chat.ChatId ?? Guid.NewGuid().ToString(),
                    Name = chat.ChatName,
                    // Add other properties as needed
                };

                _dbContext.ChatRooms.Add(dbChat);

                // Assuming the Chat object has a list of member UserIds
                foreach (var userId in chat.Participants)
                {
                    var userChatRoom = new DbUserChatRoom
                    {
                        UserId = userId,
                        ChatRoomId = dbChat.ChatRoomId
                    };

                    _dbContext.UserChatRooms.Add(userChatRoom);
                }

                _dbContext.SaveChanges();

                transaction.Commit();

                return true;
            }
            catch (Exception ex)
            {
                transaction.Rollback();
                Console.WriteLine($"Error saving chat: {ex.Message}");
                return false;
            }
        }
    }

}
