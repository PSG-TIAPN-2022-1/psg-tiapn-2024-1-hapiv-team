using HapivAPI.Domain.Context;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Interfaces.Repositorys;
using Microsoft.EntityFrameworkCore;

namespace HapivAPI.Domain.Repositorys
{
    public class ProdutoRepository : BaseRepository<Produto>, IProdutoRepository
    {
        public ProdutoRepository(AppDbContext context) : base(context)
        {

        }
        public async Task<IEnumerable<Produto>> GetTodasColunas()
        {
            var result = await _dbSet.Include(p => p.Categoria)
                                     .Include(p => p.Fornecedor)
                                     .Include(p => p.Gerente)
                                     .Where(p => p.Ativo == true)
                                     .ToListAsync();

            return result;
        }

        public async Task<Produto> DeletarProduto(Guid id)
        {
            Produto? result;
            try
            {
                result = await _dbSet.FirstOrDefaultAsync(p => p.ProdutoId == id);
                result.Ativo = false;
                SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Produto não encontrado!");
            }
            return result;
        }
    }
}
