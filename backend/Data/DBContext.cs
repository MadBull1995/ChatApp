using Microsoft.EntityFrameworkCore;
namespace ChatApp.Data;
public class AppDbContext : DbContext
{
    public DbSet<DbUser> Users { get; set; }
    public DbSet<DbMessage> Messages { get; set; }
    public DbSet<DbChatRoom> ChatRooms { get; set; }
    public DbSet<DbUserChatRoom> UserChatRooms { get; set; }
    public DbSet<DbUserContact> UserContact { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        modelBuilder.Entity<DbUserContact>()
            .HasKey(uc => new { uc.UserId, uc.ContactId });
        
        modelBuilder.Entity<DbUserContact>()
            .HasOne(uc => uc.User)
            .WithMany(u => u.Contacts)
            .HasForeignKey(uc => uc.UserId)
            .OnDelete(DeleteBehavior.Restrict);
        
        modelBuilder.Entity<DbUserContact>()
            .HasOne(uc => uc.Contact)
            .WithMany()
            .HasForeignKey(uc => uc.ContactId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<DbUserChatRoom>()
            .HasKey(uc => new { uc.UserId, uc.ChatRoomId });

        modelBuilder.Entity<DbUserChatRoom>()
            .HasOne(uc => uc.User)
            .WithMany(u => u.UserChatRooms)
            .HasForeignKey(uc => uc.UserId);

        modelBuilder.Entity<DbUserChatRoom>()
            .HasOne(uc => uc.ChatRoom)
            .WithMany(c => c.UserChatRooms)
            .HasForeignKey(uc => uc.ChatRoomId);
    }

}