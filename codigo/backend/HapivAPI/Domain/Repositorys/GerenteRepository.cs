using HapivAPI.Domain.Context;
using HapivAPI.Domain.Repositorys.BaseRepository;
using HapivAPI.Interfaces.Repositorys;
using System.Net.Mail;
using System.Security.Cryptography.X509Certificates;

namespace HapivAPI.Domain.Repositorys
{
    public class GerenteRepository : BaseRepository<Gerente>, IGerenteRepository
    {
        public GerenteRepository(AppDbContext context) : base(context)
        {
        }
        public Gerente? FazerLogin(string email, string senha)
        {
            var result = _dbSet.FirstOrDefault(g => g.Email == email && g.Senha == senha);

            if(result == null)
            {
                throw new Exception("Usuário não encontrado");
            }

            return result;
        }
    }
}
