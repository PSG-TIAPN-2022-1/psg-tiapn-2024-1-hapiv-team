using System.Linq.Expressions;

namespace HapivAPI.Domain.Repositorys.BaseRepository
{
    public interface IBaseRepository<T>
    {
        Task<IEnumerable<T>> GetAll();
        Task<T?> Get(Expression<Func<T, bool>> predicate);
        Task AddAsync(T entity);
        T? Update(T entity);
        T? Delete(Expression<Func<T, bool>> predicate);
    }
}
