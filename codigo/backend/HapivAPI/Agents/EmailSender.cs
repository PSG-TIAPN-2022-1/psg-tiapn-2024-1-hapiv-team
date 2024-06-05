using HapivAPI.Interfaces;
using SendGrid;
using SendGrid.Helpers.Mail;
using HapivAPI.Constantes;

namespace HapivAPI.Agents
{
    public class EmailSender : IEmailSender
    {
        private readonly IConfiguration config;

        private EmailAddress from;
        public EmailSender(IConfiguration _config)
        {
            config = _config;
            from = new EmailAddress(ConstantesGerais.Agents.EmailSender.EmailRemetente, ""); //Remetente (Email e Nome) (foram cadastrados no SendGrid)
        }

        public async Task<Response?> SendEmailAsync(string email,string action, string subjects, string message) // destinatario, assunto, corpo
        { 
            from.Name = action;
            var msg = sendGridMessage(email, subjects, message);
            try
            {
                var response = await GetSendGridClient().SendEmailAsync(msg).ConfigureAwait(false);
                return response;
            }
            catch (Exception ex)
            {
                throw new Exception(ConstantesGerais.Agents.EmailSender.ErroEnviarEmail, ex);
            }
        }

        private SendGridClient GetSendGridClient() 
        {
            try
            {
                return new SendGridClient(config["ApiKey"]);
            }
            catch (Exception ex)
            {
                throw new Exception(ConstantesGerais.Agents.EmailSender.ErroCriarClienteSendGrid, ex);
            }
        }

        private SendGridMessage sendGridMessage(string email, string subjects, string message) //Message ainda não está sendo utilizado, ainda estou pensando
        {
            var to = new EmailAddress(email, "Gerente");
            var plainTextContent = $"{subjects}"; // Mensagem que aparece antes (no inbox)
            var htmlContent = $"<strong>{message}</strong>";//Conteúdo do email de fato
            return MailHelper.CreateSingleEmail(from, to, subjects, plainTextContent, htmlContent);
        }
    }
}
