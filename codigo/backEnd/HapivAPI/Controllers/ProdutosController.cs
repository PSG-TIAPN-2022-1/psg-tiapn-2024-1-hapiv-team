using Asp.Versioning;
using HapivAPI.Domain;
using HapivAPI.Domain.Context;
using HapivAPI.Interfaces.Agents;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;

namespace HapivAPI.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/{version:apiVersion}/[controller]")]
    [ApiController]
    public class ProdutosController : Controller
    {
        private readonly AppDbContext _context;
        private readonly IEmailSender emailsender;

        public ProdutosController(AppDbContext context, IEmailSender emailsender)
        {
            _context = context;
            this.emailsender = emailsender;
        }
    }
}
