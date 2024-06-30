using Asp.Versioning;
using HapivAPI.Interfaces.Repositorys;
using HapivAPI.Interfaces.Services;
using HapivAPI.Requests;
using Microsoft.AspNetCore.Mvc;

namespace HapivAPI.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v.{version:apiVersion}/[controller]")]
    [ApiController]
    public class VendasController : Controller
    {
        private IVendaService VendaService { get; set; }
        private IVendaRepository VendaRepository { get; set; }
        public VendasController(IVendaService venda, IVendaRepository vendas)
        {
            VendaService = venda;
            VendaRepository = vendas;
        }

        [HttpGet]
        public async Task<IActionResult> GetVendas()
        {
            return Ok();
        }

        [HttpPost("EfetuarVenda")]
        public async Task<IActionResult> EfetuarVenda(IEnumerable<EfetuarVendaRequest> vendas)
        {
            await VendaService.EfetuarVenda(vendas);
            return Ok();
        }


    }
}
