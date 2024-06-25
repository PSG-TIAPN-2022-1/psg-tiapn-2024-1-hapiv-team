using HapivAPI.Domain.Context;
using HapivAPI.Interfaces.Repositorys;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace HapivAPI.Domain.Repositorys.BaseRepository
{
    public class BaseRepository<T> : IBaseRepository<T> where T : class
    {
        protected readonly AppDbContext _context;
        protected readonly DbSet<T> _dbSet;
        public BaseRepository(AppDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }
        public void Add(T entity)
        {
            try
            {
                _dbSet.Add(entity);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task AddAsync(T entity)
        {
            try
            {
                await _dbSet.AddAsync(entity);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<T?> DeleteAsync(Expression<Func<T, bool>> predicate)
        {
            try
            {
                var deleted = await _dbSet.FirstOrDefaultAsync(predicate);
                if (deleted != null)
                {
                    _dbSet.Remove(deleted);
                    _context.SaveChanges();
                }
                return deleted;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<T?> Get(Expression<Func<T, bool>> predicate)
        {
            try
            {
                var item = await _dbSet.FirstOrDefaultAsync(predicate);
                return item;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            var itens = await _dbSet.AsNoTracking().ToListAsync<T>();

            return itens ?? new List<T>();
        }

        public T? Update(T entity)
        {
            if (entity != null)
            {
                try
                {
                    _dbSet.Update(entity);
                    return entity;
                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }
            }
            return null;
        }
        public void SaveChanges()
        {
            _context.SaveChanges();
        }
    }
}
