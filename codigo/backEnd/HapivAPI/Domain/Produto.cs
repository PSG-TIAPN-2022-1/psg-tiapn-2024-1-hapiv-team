using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using HapivAPI.Domain.Relacionamentos;

namespace HapivAPI.Domain
{
    [Table("Produtos")]
    public class Produto
    {
        [Key]
        public Guid ProdutoId { get; set; }

        [Required]
        [MaxLength(80)]
        public string? Nome { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal PrecoDeCompra { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal PrecoDeVenda { get; set; }

        [Required]
        public int Quantidade { get; set; }

        [Required]
        public DateTime DataEntrada { get; set; }

        // Relacionamentos abaixo; 

        [Required]
        public Gerente? Gerente { get; set; }

        [Required]
        public Categoria? Categoria { get; set; }

        [Required]
        public Fornecedor? Fornecedor { get; set; }

        [Required]
        public ICollection<VendaProduto>? VendaProdutos { get; set; }


    }
}
