using Asp.Versioning;
using HapivAPI.Constantes;
using HapivAPI.Domain;
using HapivAPI.Interfaces.Services;
using HapivAPI.Requests;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using System.Text.Json;

namespace HapivAPI.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/{version:apiVersion}/[controller]")]
    [ApiController]
    public class GerentesController : Controller
    {
        private readonly IUsuarioService _userService;

        public GerentesController(IUsuarioService user)
        {
            _userService = user;
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] GerenteRequest gerente)
        {
             _userService.FazerLogin(gerente);
             return Ok();
        }

        [HttpPost("Cadastrar")]
        public IActionResult Cadastrar([FromBody]GerenteRequest gerente)
        {
            _userService.Cadastrar(gerente);
            return Ok();
        }

        [HttpPost("RecuperarSenha")]
        public async Task<IActionResult> RecuperarSenha([FromQuery] string email)
        {
            var result = await _userService.EnviarEmailRecuperacaoDeSenha(email);

            var response = JsonSerializer.Serialize(new { statusCode = (int)result.StatusCode, result.IsSuccessStatusCode });

            return Ok(response);
        }   
    }
}
