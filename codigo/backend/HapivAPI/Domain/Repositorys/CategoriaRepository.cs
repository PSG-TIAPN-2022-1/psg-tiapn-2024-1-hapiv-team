using HapivAPI.Context;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Domain.Repositorys.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HapivAPI.Domain.Repositorys
{
    public class CategoriaRepository : BaseRepository<Categoria>, ICategoriaRepository
    {
        public CategoriaRepository(AppDbContext context) : base(context)
        {
        }

        //Testes
        public async Task<IEnumerable<Categoria>> GetAllComProduto()
        {
            var itens = await _dbSet.Include(c => c.Produtos).ToListAsync();
            return itens ?? new List<Categoria>();
        }
    }
}
