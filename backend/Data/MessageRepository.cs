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
            Timestamp = Google.Protobuf.WellKnownTypes.Timestamp.FromDateTime(dbMessage.Timestamp.ToUniversalTime()),
        }).ToList();
    }

    public bool SaveMessage(Models.Message message)
    {
        try
        {
            // Assuming DbMessage is your database model for messages
            var dbMessage = new DbMessage
            {
                MessageId = Guid.NewGuid().ToString(),
                ChatRoomId = message.ChatRoomId,
                SenderId = message.Sender.UserId,
                Content = message.Content,
                Timestamp = message.TimeStamp
            };

            _dbContext.Messages.Add(dbMessage);
            _dbContext.SaveChanges();
            
            return true;
        }
        catch (Exception ex)
        {
            // Log the exception here
            Console.WriteLine($"Error saving message: {ex.Message}");
            return false;
        }
    }
}
