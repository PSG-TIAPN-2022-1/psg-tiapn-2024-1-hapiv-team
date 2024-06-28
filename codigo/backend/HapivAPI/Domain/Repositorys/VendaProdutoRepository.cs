using HapivAPI.Domain.Context;
using HapivAPI.Domain.Relacionamentos;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Interfaces.Repositorys;

namespace HapivAPI.Domain.Repositorys
{
    public class VendaProdutoRepository : BaseRepository<VendaProduto>, IVendaProdutoRepository
    {
        public VendaProdutoRepository(AppDbContext context) : base(context)
        {

        }
    }

}
