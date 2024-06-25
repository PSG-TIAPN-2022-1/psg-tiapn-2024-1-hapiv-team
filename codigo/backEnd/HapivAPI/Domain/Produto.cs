using HapivAPI.Domain.Relacionamentos;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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

        [Required]
        [ForeignKey("GerenteId")]
        public Guid GerenteId { get; set; }

        [Required]
        [ForeignKey("CategoriaId")]
        public Guid CategoriaId { get; set; }

        [Required]
        [ForeignKey("FornecedorId")]
        public Guid FornecedorId { get; set; }

        // Relacionamentos abaixo; 
        public Gerente? Gerente { get; set; }

        public Categoria? Categoria { get; set; }

        public Fornecedor? Fornecedor { get; set; }

        public ICollection<VendaProduto>? VendaProdutos { get; set; }


    }
}
