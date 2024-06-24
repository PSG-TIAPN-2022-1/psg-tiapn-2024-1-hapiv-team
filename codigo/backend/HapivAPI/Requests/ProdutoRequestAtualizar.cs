using HapivAPI.DTOs;

namespace HapivAPI.Requests
{
    public class ProdutoRequestAtualizar
    {
        public Guid ProdutoId { get; set; }
        public string? Nome { get; set; }

        public decimal PrecoDeCompra { get; set; }

        public decimal PrecoDeVenda { get; set; }

        public int Quantidade { get; set; }

        public string? Categoria { get; set; }

        public string? Fornecedor { get; set; }
    }
}
