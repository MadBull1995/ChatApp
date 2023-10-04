using System;

namespace ChatApp.Models;

public abstract class User
{
    public string UserId { get; protected set; }
    public string UserName { get; protected set; }
    public string Email { get; protected set; }

    public User(string userId, string userName, string email)
    {
        UserId = userId;
        UserName = userName;
        Email = email;
    }

    public abstract void DisplayInfo();

    public virtual void SendMessage(string message)
    {
        Console.WriteLine($"{UserName} sends the message: {message}");
    }

    public virtual void ReceiveMessage(string message)
    {
        Console.WriteLine($"{UserName} receives the message: {message}");
    }
}


public class AdminUser : User
{
    public string Role { get; private set; }

    public AdminUser(string userId, string userName, string email) : base(userId, userName, email)
    {
        Role = "Admin";
    }

    public override void DisplayInfo()
    {
        Console.WriteLine($"Admin User: {UserName}, Role: {Role}");
    }
    
    // Admin-specific methods here
    public void BanUser(User user)
    {
        Console.WriteLine($"{UserName} bans the user: {user.UserName}");
    }

    public void UnbanUser(User user)
    {
        Console.WriteLine($"{UserName} unbans the user: {user.UserName}");
    }
}

public class RegisteredUser : User
{
    private DateTime? registrationDate;

    public DateTime RegistrationDate { get; private set; }

    public RegisteredUser(string userId, string userName, string email, DateTime registrationDate) : base(userId, userName, email)
    {
        RegistrationDate = registrationDate;
    }

    public RegisteredUser(string userId, string userName, string email, DateTime? registrationDate) : base(userId, userName, email)
    {
        this.registrationDate = registrationDate;
    }

    public override void DisplayInfo()
    {
        Console.WriteLine($"Registered User: {UserName}, Registration Date: {RegistrationDate}");
    }
    
    // RegisteredUser-specific methods here
    public void JoinRoom(string roomName)
    {
        Console.WriteLine($"{UserName} joins the room: {roomName}");
    }

    public void LeaveRoom(string roomName)
    {
        Console.WriteLine($"{UserName} leaves the room: {roomName}");
    }
}

public class GuestUser : User
{
    public GuestUser(string userId, string userName, string email) : base(userId, userName, email)
    {
    }

    public override void DisplayInfo()
    {
        Console.WriteLine($"Guest User: {UserName}");
    }
    
    // GuestUser-specific methods here
    public void UpgradeToRegisteredUser()
    {
        Console.WriteLine($"{UserName} upgrades to a registered user");
    }
}