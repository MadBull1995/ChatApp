using System;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using ChatApp.Models;

namespace ChatApp.Data;

public class ContactRepository
{
    private readonly AppDbContext _dbContext;

    public ContactRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public void AddContact(Models.User user, Models.UserContact contact)
    {
        try
        {
            var dbContact = new DbUserContact
            {
                UserId = user.UserId,
                ContactId = contact.ContactId,
                // ... set other properties depending on contact type
            };

            _dbContext.UserContact.Add(dbContact);
            _dbContext.SaveChanges();
        }
        catch (DbUpdateException ex)
        {
            NpgsqlException npgsqlException = ex.InnerException as NpgsqlException;

            if (npgsqlException != null)
            {
                if (npgsqlException.SqlState == "23505")
                {
                    // Unique constraint violation
                    throw new DataLayerException($"Unique constraint violation: {npgsqlException.Data["ConstraintName"]}", npgsqlException.SqlState, npgsqlException);
                }
                // Handle other NpgsqlException cases here as needed
            }
            // Handle exceptions that occur during saving changes
            throw new DataLayerException("Database update error", ex);
        }
        catch (Exception ex)
        {
            // Handle any general exceptions
            throw new DataLayerException("An error occurred while adding a contact", ex);
        }
    }

    public Models.UserContact? GetContactByUserId(string userId)
    {
        try
        {
            // Query the database for the contact
            var dbContact = _dbContext.UserContact.FirstOrDefault(c => c.UserId == userId);

            return this.ParseDbContact(dbContact);
        }
        catch (NpgsqlException npgsqlException)
        {
            throw new DataLayerException("Database error occurred", npgsqlException.SqlState, npgsqlException);
        }
        catch (Exception ex)
        {
            // Catch other exceptions that might occur (e.g., null reference, invalid cast)
            throw new DataLayerException("An unexpected error occurred", string.Empty, ex);
        }
    }

    public List<Models.UserContact> GetContactsByUserId(string userId)
    {
        try
        {
            var dbContacts = _dbContext.UserContact
                            .Include(uc => uc.Contact)  // Explicitly include the related User
                            .Where(c => c.UserId == userId)
                            .ToList();

            return dbContacts.Select(ParseDbContact).ToList();
        }
        catch (NpgsqlException npgsqlException)
        {
            throw new DataLayerException("Database error occurred", npgsqlException.SqlState, npgsqlException);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex}");
            throw new DataLayerException("An unexpected error occurred", string.Empty, ex);
        }
    }


    private Models.UserContact? ParseDbContact(DbUserContact? dbContact)
    {
        // If the contact wasn't found, return null
        if (dbContact == null)
        {
            return null;
        }
        
        // Otherwise, construct and return the appropriate Contact object
        var contact = new Models.UserContact(dbContact.ContactId, dbContact.Contact.UserName, dbContact.Contact.Email);
        
        return contact;
    }
}