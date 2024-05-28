using HapivAPI.Domain.Repositorys.BaseRepository;

namespace HapivAPI.Domain.Repositorys.Interfaces
{
    public interface ICategoriaRepository : IBaseRepository<Categoria>
    {
        public Task<IEnumerable<Categoria>> GetAllComProduto();
    }
}
