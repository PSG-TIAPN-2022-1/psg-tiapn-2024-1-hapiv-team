using Asp.Versioning;
using HapivAPI.Agents;
using HapivAPI.Constantes;
using HapivAPI.Domain;
using HapivAPI.Domain.Context;
using HapivAPI.Interfaces;
using HapivAPI.Requests;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace HapivAPI.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/{version:apiVersion}/[controller]")]
    [ApiController]
    public class GerentesController : Controller
    {
        private readonly IGerenteRepository _gerente;
        private readonly IEmailSender _emailSender;

        public GerentesController(IGerenteRepository gerente, IEmailSender emailSender)
        {
            _gerente = gerente;
            _emailSender = emailSender;
        }
        [HttpPost("Login")]
        public IActionResult Login([FromQuery] string email, string senha)
        { 
            var gerente = _gerente.FazerLogin(email, senha);

            return gerente == null ? NotFound() : Ok();
        }

        [HttpPost("Cadastrar")]
        public IActionResult Cadastrar([FromBody]GerenteRequest gerente)
        {
            var novoGerente = new Gerente() 
            { 
                GerenteId = Guid.NewGuid(),
                Email = gerente.Email,
                Senha = gerente.Senha
            };
            try
            {
                _gerente.Add(novoGerente);
                _gerente.SaveChanges();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            return Ok();
        }

        [HttpPost("SenhaEsquecida")]
        public async Task<IActionResult> SenhaEsquecida([FromQuery] string email)
        {
            var gerente = await _gerente.Get(g => g.Email == email);

            if (gerente == null)
            {
                return NotFound(new KeyValuePair<string, string>("Gerente", "Gerente não cadastrado"));
            }

            try
            {
                await _emailSender.SendEmailAsync(email,"Recuperação de Senha", "Recuperação de senha", criarHtmlSenha(gerente.Senha));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            return Ok();
        }   

        private string criarHtmlSenha(string senha)
        {
            return string.Format(ConstantesGerais.Agents.EmailSender.HtmlContent, senha);
        }
    }
}
