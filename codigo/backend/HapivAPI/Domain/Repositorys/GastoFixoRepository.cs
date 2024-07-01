using HapivAPI.Domain.Context;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Interfaces.Repositorys;

namespace HapivAPI.Domain.Repositorys
{
    public class GastoFixoRepository : BaseRepository<GastoFixo>, IGastoFixoRepository
    {
        public GastoFixoRepository(AppDbContext context) : base(context)
        {
        }
    }
}
