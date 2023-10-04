using System.ComponentModel.DataAnnotations;

namespace ChatApp.Data;

public class DbUser
{
    [Key]
    public string UserId { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public string Role { get; set; }
    public DateTime? RegistrationDate { get; set; }

    // Navigation property for many-to-many relation
    public ICollection<DbUserChatRoom> UserChatRooms { get; set; }

    // Navigation property for many-to-many relation for contacts
    public ICollection<DbUserContact> Contacts { get; set; }
}

public class DbChatRoom
{
    [Key]
    public string ChatRoomId { get; set; }
    public string Name { get; set; }
    
    // Navigation property for many-to-many relation
    public ICollection<DbUserChatRoom> UserChatRooms { get; set; }
    
    // Navigation property for one-to-many relation for messages
    public ICollection<DbMessage> Messages { get; set; }
}

public class DbUserChatRoom
{
    public string UserId { get; set; }
    public DbUser User { get; set; }
    
    public string ChatRoomId { get; set; }
    public DbChatRoom ChatRoom { get; set; }
}

public class DbMessage
{
    [Key]
    public int MessageId { get; set; } // Primary key
    public string ChatRoomId { get; set; }
    public string Content { get; set; } // The content of the message
    public DateTime Timestamp { get; set; } // When the message was sent
    public string UserId { get; set; } // Foreign key for the user who sent the message
    public string SenderId { get; set; }
    public DbUser Sender { get; set; }
}

public class DbUserContact
{
    public string UserId { get; set; }
    public DbUser User { get; set; }

    public string ContactId { get; set; }
    public DbUser Contact { get; set; }
}