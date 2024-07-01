using HapivAPI.Domain.Relacionamentos;

namespace HapivAPI.Interfaces.Repositorys
{
    public interface IVendaProdutoRepository : IBaseRepository<VendaProduto>
    {
        public Task<IEnumerable<VendaProduto>> ListarVendas();
        public IEnumerable<VendaProduto> ListarVendas(Func<VendaProduto, bool> expression);
    }
}
