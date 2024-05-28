using HapivAPI.Context;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Domain.Repositorys.Interfaces;

namespace HapivAPI.Domain.Repositorys
{
    public class FornecedorRepository : BaseRepository<Fornecedor>, IFornecedorRepository
    {
        public FornecedorRepository(AppDbContext context) : base(context)
        {
        }
    }
}
