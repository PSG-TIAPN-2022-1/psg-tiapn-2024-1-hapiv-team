using HapivAPI.Context;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Domain.Repositorys.Interfaces;

namespace HapivAPI.Domain.Repositorys
{
    public class VendaRepository : BaseRepository<Venda>, IVendaRepository
    {
        public VendaRepository(AppDbContext context) : base(context)
        {
        }
    }
}
