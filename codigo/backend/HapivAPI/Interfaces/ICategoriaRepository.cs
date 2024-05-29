using HapivAPI.Domain;

namespace HapivAPI.Interfaces
{
    public interface ICategoriaRepository : IBaseRepository<Categoria>
    {
        public Task<IEnumerable<Categoria>> GetAllComProduto();
    }
}
