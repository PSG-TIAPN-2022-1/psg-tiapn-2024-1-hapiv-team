using HapivAPI.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
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

        public async Task AddAsync(T entity)
        {
            try
            {
                await _context.Set<T>() .AddAsync(entity);
            }catch(Exception ex)
            {
                //ferramenta de logs aqui
            }
        }

        public T? Delete(Expression<Func<T, bool>> predicate)
        {
            try
            {
                var deleted = _dbSet.FirstOrDefault(predicate);
                if (deleted != null)
                {
                    _dbSet.Remove(deleted);
                    _context.SaveChanges();
                }
                return deleted;
            }catch (Exception ex)
            {
                //Ferramentas de log aqui
                return null;
            }
        }

        public async Task<T?> Get(Expression<Func<T, bool>> predicate)
        {
            try
            {
                var item = await _dbSet.FirstOrDefaultAsync(predicate);
                return item;
            }catch (Exception ex)
            {
                //Ferramenta de logs aqui
                return null;
            }
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            var itens = await _dbSet.ToListAsync<T>();
            return itens??new List<T>();
        }

        public T? Update(T entity)
        {
            if (entity != null)
            {
                _dbSet.Update(entity);
                _context.SaveChanges();
                return entity;
            }
            return null;
        }
    }
}
