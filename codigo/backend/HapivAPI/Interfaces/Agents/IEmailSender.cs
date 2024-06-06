using Google.Apis.Auth.OAuth2;
using SendGrid;

namespace HapivAPI.Interfaces.Agents
{
    public interface IEmailSender
    {
        public Task<Response?> SendEmailAsync(string email, string action, string subject, string message);
    }
}
