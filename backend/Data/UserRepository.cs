using System;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using ChatApp.Models;

namespace ChatApp.Data;

public class UserRepository
{
    private readonly AppDbContext _dbContext;

    public UserRepository(AppDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public void AddUser(Models.User user)
    {
        try
        {
            var dbUser = new DbUser
            {
                UserId = user.UserId,
                UserName = user.UserName,
                Email = user.Email,
                PasswordHash = user.PasswordHash
                // ... set other properties depending on user type
            };
        
            if (user is AdminUser adminUser)
            {
                dbUser.Role = "Admin";
            }
            else if (user is RegisteredUser registeredUser)
            {
                dbUser.Role = "User";
                dbUser.RegistrationDate = registeredUser.RegistrationDate;
            }
            else if (user is GuestUser)
            {
                dbUser.Role = "Guest";
            }

            _dbContext.Users.Add(dbUser);
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
            throw new DataLayerException("An error occurred while adding a user", ex);
        }
    }

    public Models.User? GetUserByEmail(string email)
    {
        try
        {
            // Query the database for the user
            var dbUser = _dbContext.Users.FirstOrDefault(u => u.Email == email);

            return this.ParseDbUser(dbUser);
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

    public Models.User? GetUserById(string userId)
    {
        try
        {
            // Query the database for the user
            var dbUser = _dbContext.Users.FirstOrDefault(u => u.UserId == userId);

            return this.ParseDbUser(dbUser);
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

    private Models.User? ParseDbUser(DbUser? dbUser)
    {
        // If the user wasn't found, return null
        if (dbUser == null)
        {
            return null;
        }

        // Otherwise, construct and return the appropriate User object
        Models.User? user = null;
        
        if (dbUser.Role == "Admin")
        {
            user = new AdminUser(dbUser.UserId, dbUser.UserName, dbUser.Email);
        }
        else if (dbUser.Role == "User")
        {
            user = new RegisteredUser(dbUser.UserId, dbUser.UserName, dbUser.Email, dbUser.RegistrationDate);
        }
        else if (dbUser.Role == "Guest")
        {
            user = new GuestUser(dbUser.UserId, dbUser.UserName, dbUser.Email);
        }
        
        user?.SetHash(dbUser.PasswordHash);

        return user;
    }

}
