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
    public class CategoriasController : Controller
    {
        private readonly ICategoriaRepository _catRepo;
        private readonly IMapper _mapper;

        public CategoriasController(IMapper mapper, ICategoriaRepository catRepo)
        {
            _catRepo = catRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var categorias = await _catRepo.GetAll();
            var categoriasDTO = _mapper.Map<IEnumerable<CategoriaDTO>>(categorias);
            return Ok(categoriasDTO);
        }
    }
}
