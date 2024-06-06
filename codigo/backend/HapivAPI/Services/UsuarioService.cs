using HapivAPI.Constantes;
using HapivAPI.Domain;
using HapivAPI.Interfaces.Agents;
using HapivAPI.Interfaces.Repositorys;
using HapivAPI.Interfaces.Services;
using HapivAPI.Requests;
using SendGrid;

namespace HapivAPI.Services
{
    public class UsuarioService : IUsuarioService
    {
        private IGerenteRepository _gerenteRepository;
        private IEmailSender _emailSender;

        public UsuarioService(IGerenteRepository gerenteRepository, IEmailSender emailSender)
        {
            _gerenteRepository = gerenteRepository;
            _emailSender = emailSender;
        }

        public Gerente? FazerLogin(GerenteRequest user)
        {
            if(user == null)
            {
                return null;
            }
            return _gerenteRepository.FazerLogin(user.Email, user.Senha);       
        }
        
        public Gerente? Cadastrar(GerenteRequest gerente)
        {
            var novoGerente = new Gerente()
            {
                GerenteId = Guid.NewGuid(),
                Email = gerente.Email,
                Senha = gerente.Senha
            };
            try
            {
                _gerenteRepository.Add(novoGerente);
                _gerenteRepository.SaveChanges();
            }
            catch (Exception e)
            {
                return null;
            }
            return novoGerente;
        }
        public async Task<Response?> EnviarEmailRecuperacaoDeSenha(string email)
        {
            var gerente = await _gerenteRepository.Get(g => g.Email == email);

            if (gerente == null)
            {
                throw new Exception("Gerente não cadastrado");
            }

            var result = await _emailSender.SendEmailAsync(email, "Recuperação de Senha", "Recuperação de senha", criarHtmlSenha(gerente.Senha));

            return result;
        }

        private string criarHtmlSenha(string senha)
        {
            return string.Format(ConstantesGerais.Agents.EmailSender.HtmlContent, senha);
        }
    }
}
