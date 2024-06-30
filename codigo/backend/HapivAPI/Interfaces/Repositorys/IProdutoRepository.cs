using HapivAPI.Domain;

namespace HapivAPI.Interfaces.Repositorys
{
    public interface IProdutoRepository : IBaseRepository<Produto>
    {
        public Task<IEnumerable<Produto>> GetTodasColunas();
        public Task<Produto> DeletarProduto(Guid id);
    }
}
