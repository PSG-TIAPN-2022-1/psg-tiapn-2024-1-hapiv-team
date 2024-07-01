using Asp.Versioning;
using AutoMapper;
using HapivAPI.DTOs;
using HapivAPI.Interfaces.Repositorys;
using Microsoft.AspNetCore.Mvc;

namespace HapivAPI.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v.{version:apiVersion}/[controller]")]
    [ApiController]
    public class FornecedoresController : Controller
    {
        private readonly IFornecedorRepository fornecedorRepository;
        private readonly IMapper mapper;

        public FornecedoresController(IFornecedorRepository fornecedor, IMapper _mapper)
        {
            fornecedorRepository = fornecedor;
            mapper = _mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var fornecedores = await fornecedorRepository.GetAll();
            var fornecedorDTO = mapper.Map<IEnumerable<FornecedorDTO>>(fornecedores);
            return Ok(fornecedorDTO);
        }
    }
}
