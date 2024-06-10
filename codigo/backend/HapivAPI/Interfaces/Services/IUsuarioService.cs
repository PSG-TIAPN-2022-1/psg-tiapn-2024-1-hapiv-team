using HapivAPI.Domain;
using HapivAPI.Requests;
using SendGrid;

namespace HapivAPI.Interfaces.Services
{
    public interface IUsuarioService
    {
        public Gerente? FazerLogin(GerenteRequest gerente);
        public Gerente? Cadastrar(GerenteRequest gerente);
        public Task<Response?> EnviarEmailRecuperacaoDeSenha(string email);
    }
}
