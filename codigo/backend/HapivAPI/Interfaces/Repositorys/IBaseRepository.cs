using System.Linq.Expressions;

namespace HapivAPI.Interfaces.Repositorys
{
    public interface IBaseRepository<T>
    {
        public void Add(T entity);
        Task<IEnumerable<T>> GetAll();
        Task<T?> Get(Expression<Func<T, bool>> predicate);
        Task AddAsync(T entity);
        T? Update(T entity);
        T? Delete(Expression<Func<T, bool>> predicate);
        void SaveChanges();
    }
}
