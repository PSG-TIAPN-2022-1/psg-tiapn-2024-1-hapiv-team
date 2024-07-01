using HapivAPI.Requests;

namespace HapivAPI.Interfaces.Services
{
    public interface IVendaService
    {
        public Task EfetuarVenda(IEnumerable<EfetuarVendaRequest> produtosVendidosRequest);
    }
}
