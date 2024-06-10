using Asp.Versioning;
using HapivAPI.Domain;
using HapivAPI.Domain.Context;
using HapivAPI.Interfaces.Repositorys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace HapivAPI.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/{version:apiVersion}/[controller]")]
    [ApiController]
    public class FornecedoresController : Controller
    {
        private readonly AppDbContext _context;
        private readonly ICategoriaRepository _catRepo;

        public FornecedoresController(AppDbContext context, ICategoriaRepository catRepo)
        {
            _context = context;
            _catRepo = catRepo;
        }
    }
}
