using HapivAPI.Domain.Context;
using HapivAPI.Domain.Relacionamentos;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Interfaces.Repositorys;
using Microsoft.EntityFrameworkCore;

namespace HapivAPI.Domain.Repositorys
{
    public class VendaProdutoRepository : BaseRepository<VendaProduto>, IVendaProdutoRepository
    {
        public VendaProdutoRepository(AppDbContext context) : base(context)
        {

        }

        public async Task<IEnumerable<VendaProduto>> ListarVendas()
        {
            var result = await _dbSet.Include(vp => vp.Produto)
                                     .Include(vp => vp.Venda)
                                     .ToListAsync();

            return result;
        }

        public IEnumerable<VendaProduto> ListarVendas(Func<VendaProduto, bool> expression)
        {
            var result = _dbSet.Include(vp => vp.Produto)
                                     .Include(vp => vp.Venda)
                                     .Where(expression);

            return result;
        }
    }
}


