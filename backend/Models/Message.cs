namespace ChatApp.Models;

public class Message
{
    public User Sender { get; set; }
    public string Content { get; set; }
    public DateTime TimeStamp { get; set; }

    public Message(User sender, string content)
    {
        Sender = sender;
        Content = content;
        TimeStamp = DateTime.Now;
    }
}