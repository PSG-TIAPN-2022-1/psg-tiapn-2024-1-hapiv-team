using HapivAPI.Context;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Domain.Repositorys.Interfaces;

namespace HapivAPI.Domain.Repositorys
{
    public class GastoFixoRepository : BaseRepository<GastoFixo>, IGastoFixoRepository
    {
        public GastoFixoRepository(AppDbContext context) : base(context)
        {
        }
    }
}
