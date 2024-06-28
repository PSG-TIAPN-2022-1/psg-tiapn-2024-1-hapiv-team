using Asp.Versioning;
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
        public VendasController(IVendaService venda)
        {
            VendaService = venda;
        }

        [HttpPost("EfetuarVenda")]
        public async Task<IActionResult> EfetuarVenda(IEnumerable<EfetuarVendaRequest> vendas)
        {
            await VendaService.EfetuarVenda(vendas);
            return Ok();
        }
    }
}
