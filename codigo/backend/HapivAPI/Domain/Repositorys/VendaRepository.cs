using HapivAPI.Domain.Context;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Interfaces.Repositorys;
using Microsoft.EntityFrameworkCore;

namespace HapivAPI.Domain.Repositorys
{
    public class VendaRepository : BaseRepository<Venda>, IVendaRepository
    {
        public VendaRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Venda>> ListarVendas()
        {
            var itens = await _dbSet.Include(v => v.VendaProdutos)
                                    .ThenInclude(vp => vp.Produto)
                                    .ToListAsync();

            return itens;
        }
    }
}
