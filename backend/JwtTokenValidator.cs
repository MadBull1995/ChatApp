// using Microsoft.IdentityModel.Tokens;
// namespace ChatApp;
// public class JwtTokenValidator : ISecurityTokenValidator
// {
//     public bool CanReadToken(string securityToken) => true;
    
//     public ClaimsPrincipal ValidateToken(string securityToken, TokenValidationParameters validationParameters, out SecurityToken validatedToken)
//     {
//         var handler = new JwtSecurityTokenHandler();
//         var tokenValidationParameters = new TokenValidationParameters
//         {
//             ValidateIssuer = true,
//             ValidateAudience = true,
//             ValidateLifetime = true,
//             ValidateIssuerSigningKey = true,
//             ValidIssuer = "your string",
//             ValidAudience = "your string",
//             IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("your secrete code"))
//         };
        
//         var claimsPrincipal = handler.ValidateToken(token, tokenValidationParameters, out validatedToken);
//         return claimsPrincipal;
//     }
    
//     public bool CanValidateToken { get; } = true;
//     public int MaximumTokenSizeInBytes { get; set; } = int.MaxValue;
// }