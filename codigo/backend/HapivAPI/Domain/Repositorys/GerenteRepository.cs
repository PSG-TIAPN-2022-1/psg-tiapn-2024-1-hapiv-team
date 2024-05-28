using HapivAPI.Context;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Domain.Repositorys.Interfaces;

namespace HapivAPI.Domain.Repositorys
{
    public class GerenteRepository : BaseRepository<Gerente>, IGerenteRepository
    {
        public GerenteRepository(AppDbContext context) : base(context)
        {
        }
    }
}
