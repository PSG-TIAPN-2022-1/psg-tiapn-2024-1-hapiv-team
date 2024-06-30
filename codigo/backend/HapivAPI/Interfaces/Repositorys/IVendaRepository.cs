using HapivAPI.Domain;

namespace HapivAPI.Interfaces.Repositorys
{
    public interface IVendaRepository : IBaseRepository<Venda>
    {
        public Task<IEnumerable<Venda>> ListarVendas();
    }
}
