using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using HapivAPI.Domain.Relacionamentos;

namespace HapivAPI.Domain
{
    [Table("Vendas")]
    public class Venda
    {
        [Key]
        public Guid VendaId { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Lucro { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Faturamento { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal TaxaDoCartao { get; set; }

        [Required]
        public DateTime DataDeVenda { get; set; }

        [Required]
        [ForeignKey("Gerente")]
        public Guid GerenteId { get; set; }

        [Required]
        public Gerente? Gerente { get; set; }

        [Required]
        public ICollection<VendaProduto>? VendaProdutos { get; set; }

      
    }
}
