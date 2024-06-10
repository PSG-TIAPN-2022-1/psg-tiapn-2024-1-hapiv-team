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
    public class VendasController : Controller
    {
        private readonly AppDbContext _context;
        private readonly ICategoriaRepository _catRepo;

        public VendasController(AppDbContext context, ICategoriaRepository catRepo)
        {
            _context = context;
            _catRepo = catRepo;
        }
    }
}
