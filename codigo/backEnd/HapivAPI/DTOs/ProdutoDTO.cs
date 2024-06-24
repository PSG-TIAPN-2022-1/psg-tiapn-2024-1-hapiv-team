using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using HapivAPI.Domain;

namespace HapivAPI.DTOs
{
    public class ProdutoDTO
    {
        public Guid ProdutoId { get; set; }

        public string? Nome { get; set; }

        public decimal PrecoDeCompra { get; set; }

        public decimal PrecoDeVenda { get; set; }

        public int Quantidade { get; set; }

        public DateTime DataEntrada { get; set; }

        public CategoriaDTO? Categoria { get; set; }

        [Required]
        public FornecedorDTO? Fornecedor { get; set; }
    }
}
