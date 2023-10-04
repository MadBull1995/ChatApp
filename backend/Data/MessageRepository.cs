using System.Net.Mail;
using ChatApp.Models;

namespace ChatApp.Data;

public class MessageRepository
{
    private readonly AppDbContext _dbContext;

    public MessageRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

     public List<Message> GetMessagesByChatId(string chatId)
    {
        // Fetch DbMessage objects from the database using chatId
        // Convert DbMessage objects to Message objects
        // For example: 
        var dbMessages = _dbContext.Messages.Where(m => m.ChatRoomId == chatId).ToList();
        return dbMessages.Select(dbMessage => new Message { 
            MessageId = dbMessage.MessageId.ToString(),
            SenderId = dbMessage.SenderId,
            Content = dbMessage.Content,
            Timestamp = Google.Protobuf.WellKnownTypes.Timestamp.FromDateTime(dbMessage.Timestamp),
        }).ToList();
    }
}
