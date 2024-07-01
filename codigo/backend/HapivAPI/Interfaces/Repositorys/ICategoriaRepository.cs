using HapivAPI.Domain;

namespace HapivAPI.Interfaces.Repositorys
{
    public interface ICategoriaRepository : IBaseRepository<Categoria>
    {
        public Task<IEnumerable<Categoria>> GetAllComProduto();
    }
}
