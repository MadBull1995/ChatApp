using ChatApp.Services;
using ChatApp.Models;
using ChatApp.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddGrpc();

// Some logging configs
builder.Host.ConfigureLogging(logging =>
{
    logging.ClearProviders();
    logging.AddConsole();
    logging.AddDebug();
});

// Access Configuration from builder
var configuration = builder.Configuration;

// Get the connection string from appsettings.json
string connectionString = configuration
    .GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("DB Host is null");

// Adding data base context
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString)
    .EnableSensitiveDataLogging(true)
    .EnableDetailedErrors(true));

// Internal "services"
builder.Services
    .AddScoped<UserRepository>()
    .AddScoped<MessageRepository>();

var app = builder.Build();

// Global flags
AppContext.SetSwitch(
    "Npgsql.EnableLegacyTimestampBehavior",
    true
);

// Configure the HTTP request pipeline.
app.MapGrpcService<ChatService>();
app.MapGrpcService<UsersService>();

app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();
