using HapivAPI.Domain.Context;

namespace HapivAPI.Interfaces
{
    public interface IUnitOfWork
    {
        ICategoriaRepository CategoriaRepository { get; }
        IProdutoRepository ProdutoRepository { get; }
        IGerenteRepository GerenteRepository { get; }
        IFornecedorRepository  FornecedorRepository{ get; }
        IGastoFixoRepository GastoFixoRepository { get; }
        IVendaRepository VendaRepository { get; }
        void Commit();
    }
}
