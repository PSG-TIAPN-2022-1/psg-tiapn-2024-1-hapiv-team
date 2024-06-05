using HapivAPI.Domain;

namespace HapivAPI.Interfaces
{
    public interface IGerenteRepository : IBaseRepository<Gerente>
    {
        public Gerente? FazerLogin(string email, string senha);
    }
}
