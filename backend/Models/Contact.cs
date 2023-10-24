using System;

namespace ChatApp.Models;

public class UserContact
{
    public string ContactId { get; private set; }    // Reference to the user being added as a contact
    public string Email { get; private set; }    // Reference to the user being added as a contact
    public string DisplayName { get; private set; }    // Reference to the user being added as a contact

    public UserContact(string contactId, string displayName, string email)
    {
        ContactId = contactId;
        Email = email;
        DisplayName = displayName;
    }

    public void DisplayInfo()
    {
        Console.WriteLine($"Contact ID: {ContactId}, Display Name: {DisplayName}");
    }
    
    // You can add additional methods or properties to manage user contacts if needed
}
