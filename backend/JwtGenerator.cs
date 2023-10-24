using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

public class JwtSettings
{
    public string Key { get; set; }
    public string Issuer { get; set; }
    public string Audience { get; set; }
}

public class JwtGenerator
{
    private readonly string _iss;
    private readonly string _aud;
    private readonly string _key;

    public JwtGenerator(JwtSettings jwtSettings)
    {
        _iss = jwtSettings.Issuer;
        _aud = jwtSettings.Audience;
        _key = jwtSettings.Key;
    }
    public string GenerateToken(string userDataEncoded)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.UserData, userDataEncoded),
            // Add other claims as needed
        };

        // Generate the JWT secret key
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_key)); // Use a secure and strong secret key and manage it appropriately
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var expiry = DateTime.Now.AddMinutes(30); // Set token expiry time

        var token = new JwtSecurityToken(
            issuer: _iss,
            audience: _aud,
            claims: claims,
            expires: expiry,
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
