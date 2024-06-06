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

        // GET: Produtos
        //[HttpGet()]
        //public async Task<ActionResult<IEnumerable<Categoria>>> Index()
        //{
        //    var itens = await unitOfWork.ProdutoRepository.GetAll();

        //    if (!itens.Any())
        //    {
        //        return Ok("Não há produtos cadastrados");
        //    }
        //    return Ok(itens);
        //}

        // GET: Produtos/Details/5
        [HttpGet("Details")]
        public async Task<IActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var produto = await _context.Produtos
                .Include(p => p.Gerente)
                .FirstOrDefaultAsync(m => m.ProdutoId == id);
            if (produto == null)
            {
                return NotFound();
            }

            return View(produto);
        }

        // GET: Produtos/Create
        [HttpGet("teste")]
        public IActionResult Create()
        {
            ViewData["GerenteId"] = new SelectList(_context.Gerentes, "UserId", "Email");
            return View();
        }

        // POST: Produtos/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost("Create")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ProdutoId,Nome,PrecoDeCompra,PrecoDeVenda,Descricao,Quantidade,DataEntrada,UserId,GerenteId")] Produto produto)
        {
            if (ModelState.IsValid)
            {
                produto.ProdutoId = Guid.NewGuid();
                _context.Add(produto);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["GerenteId"] = new SelectList(_context.Gerentes, "UserId", "Email", produto.GerenteId);
            return View(produto);
        }

        // GET: Produtos/Edit/5
        [HttpPost("Edit")]
        public async Task<IActionResult> Edit(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var produto = await _context.Produtos.FindAsync(id);
            if (produto == null)
            {
                return NotFound();
            }
            ViewData["GerenteId"] = new SelectList(_context.Gerentes, "UserId", "Email", produto.GerenteId);
            return View(produto);
        }

        // POST: Produtos/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost("Add")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Guid id, [Bind("ProdutoId,Nome,PrecoDeCompra,PrecoDeVenda,Descricao,Quantidade,DataEntrada,UserId,GerenteId")] Produto produto)
        {
            if (id != produto.ProdutoId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(produto);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ProdutoExists(produto.ProdutoId))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["GerenteId"] = new SelectList(_context.Gerentes, "UserId", "Email", produto.GerenteId);
            return View(produto);
        }

        // GET: Produtos/Delete/5
        [HttpPost("Delete1")]
        public async Task<IActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var produto = await _context.Produtos
                .Include(p => p.Gerente)
                .FirstOrDefaultAsync(m => m.ProdutoId == id);
            if (produto == null)
            {
                return NotFound();
            }

            return View(produto);
        }

        // POST: Produtos/Delete/5
        [HttpPost("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var produto = await _context.Produtos.FindAsync(id);
            if (produto != null)
            {
                _context.Produtos.Remove(produto);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ProdutoExists(Guid id)
        {
            return _context.Produtos.Any(e => e.ProdutoId == id);
        }
    }
}
