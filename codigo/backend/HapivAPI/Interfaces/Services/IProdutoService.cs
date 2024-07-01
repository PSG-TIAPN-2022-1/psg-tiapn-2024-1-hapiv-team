using HapivAPI.Domain;
using HapivAPI.Requests;

namespace HapivAPI.Interfaces.Services
{
    public interface IProdutoService
    {
        Task<IEnumerable<string>> AtualizarProdutoAsync(IEnumerable<ProdutoRequestAtualizar> produtos);
        public Task<Produto> InserirProdutoAsync(ProdutoRequestInserir produto);
    }
}
