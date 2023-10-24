namespace ChatApp.Models;

public class Message
{
    public User Sender { get; set; }
    public string Content { get; set; }
    public string ChatRoomId { get; set; }
    public DateTime TimeStamp { get; set; }

    public Message(User sender, string content, string chatRoomId)
    {
        Sender = sender;
        Content = content;
        ChatRoomId = chatRoomId;
        TimeStamp = DateTime.Now;
    }
}