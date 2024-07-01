using Asp.Versioning;
using AutoMapper;
using HapivAPI.DTOs;
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
        private IVendaProdutoRepository VendaProdutoRepository { get; set; }
        private IMapper mapper { get; set; }
        public VendasController(IVendaService venda, IVendaRepository vendas, IMapper map, IVendaProdutoRepository vendasp)
        {
            VendaService = venda;
            VendaRepository = vendas;
            mapper = map;
            VendaProdutoRepository = vendasp;
        }

        [HttpGet]
        public async Task<IActionResult> GetVendas()
        {
            var itens = await VendaRepository.ListarVendas();
            var result = mapper.Map<IEnumerable<VendaDTO>>(itens);
            foreach (var item in result)
            {
                var listaVendaProdutos = VendaProdutoRepository.ListarVendas(i => item.VendaId == i.VendaId);
                var mapped = mapper.Map<IEnumerable<VendaProdutoDTO>>(listaVendaProdutos);
                item.SetarPropriedades(mapped);
            }
            return Ok(result);
        }

        [HttpPost("EfetuarVenda")]
        public async Task<IActionResult> EfetuarVenda(IEnumerable<EfetuarVendaRequest> vendas)
        {
            await VendaService.EfetuarVenda(vendas);
            return Ok();
        }


    }
}
