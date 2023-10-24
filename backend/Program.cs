using System;
using ChatApp.Services;
using ChatApp.Models;
using ChatApp.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using ChatApp;

var builder = WebApplication.CreateBuilder(args);
// Access Configuration from builder
var configuration = builder.Configuration;
var jwtSettings = configuration.GetSection("JwtSettings").Get<JwtSettings>();

// Add services to the container.
var services = builder.Services;
services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(o => {
    o.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings.Issuer,
        ValidAudience = jwtSettings.Audience,
        // RequireExpirationTime = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Key))
    };
});
// services.AddAuthorization(options =>
// {
//     options.AddPolicy("CustomHeaderPolicy", policy =>
//     {
//         policy.Requirements.Add(new CustomHeaderRequirement());
//     });
// });
// services.AddSingleton<IAuthorizationHandler, CustomHeaderHandler>();
services.AddAuthorization();
services.AddGrpc(options =>
{
    options.Interceptors.Add<ServerLoggerInterceptor>();
}).AddServiceOptions<ChatService>(options =>
{
    options.Interceptors.Add<AuthGuardInterceptor>();
}).AddServiceOptions<ContactsService>(options =>
{
    options.Interceptors.Add<AuthGuardInterceptor>();
});

// Some logging configs
builder.Host.ConfigureLogging(logging =>
{
    logging.ClearProviders();
    logging.AddConsole();
    logging.AddDebug();
});

// Get the connection string from appsettings.json
string connectionString = configuration
    .GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("DB Host is null");

// Adding database context
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString)
    .EnableSensitiveDataLogging(true)
    .EnableDetailedErrors(true));

// Internal "services"
builder.Services
    .AddScoped<UserRepository>()
    .AddScoped<MessageRepository>()
    .AddScoped<ChatRepository>()
    .AddScoped<ContactRepository>()
    .AddScoped<JwtGenerator>(sp => new JwtGenerator(jwtSettings));

var app = builder.Build();

// Configure graceful shutdown
var lifetime = app.Services.GetService<IHostApplicationLifetime>();
lifetime.ApplicationStopping.Register(OnShutdown);

// Global flags
AppContext.SetSwitch(
    "Npgsql.EnableLegacyTimestampBehavior",
    true
);

app.UseAuthentication();
app.UseAuthorization();

// Configure the HTTP request pipeline.
app.MapGrpcService<ChatService>();
app.MapGrpcService<UsersService>();
app.MapGrpcService<ContactsService>();

app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();

// Cleanup logic
void OnShutdown()
{
    Console.WriteLine("Shutting down...");
    ChatService.CloseAllStreams();
}

