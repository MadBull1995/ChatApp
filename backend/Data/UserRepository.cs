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
        var dbUser = new DbUser
        {
            UserId = user.UserId,
            UserName = user.UserName,
            Email = user.Email,
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

    public Models.User? GetUser(string userId)
    {
        // Query the database for the user
        var dbUser = _dbContext.Users.FirstOrDefault(u => u.UserId == userId);

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

        return user;
    }
}
