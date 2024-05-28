using HapivAPI.Context;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Domain.Repositorys.Interfaces;

namespace HapivAPI.Domain.Repositorys
{
    public class ProdutoRepository : BaseRepository<Produto>, IProdutoRepository
    {
        public ProdutoRepository(AppDbContext context) : base(context)
        {
        }
    }
}
