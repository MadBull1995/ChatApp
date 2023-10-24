namespace ChatApp.Models;

public class ChatRoom
{
    public required string ChatId { get; set; }
    public List<User> Participants { get; set; } = new List<User>();
    public List<Message> Messages { get; set; } = new List<Message>();

    public void AddMessage(User sender, string message)
    {
        Messages.Add(new Message(sender, message, ChatId));
    }

    // More methods can be added as required.
}

public class GroupChatRoom : ChatRoom
{
    public string GroupName { get; set; }
    public User Admin { get; set; }

    public void AddParticipant(User user)
    {
        if (Admin.UserId == user.UserId)
        {
            Participants.Add(user);
        }
    }

    public void RemoveParticipant(User user)
    {
        if (Admin.UserId == user.UserId)
        {
            Participants.Remove(user);
        }
    }

    // Additional properties and methods specific to group chats
}