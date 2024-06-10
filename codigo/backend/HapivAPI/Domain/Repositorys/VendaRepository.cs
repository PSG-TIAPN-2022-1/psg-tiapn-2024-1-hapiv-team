using HapivAPI.Domain.Context;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Interfaces.Repositorys;

namespace HapivAPI.Domain.Repositorys
{
    public class VendaRepository : BaseRepository<Venda>, IVendaRepository
    {
        public VendaRepository(AppDbContext context) : base(context)
        {
        }
    }
}
