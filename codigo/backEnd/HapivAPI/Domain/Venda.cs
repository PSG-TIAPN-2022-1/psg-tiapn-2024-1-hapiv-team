using HapivAPI.Domain.Relacionamentos;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HapivAPI.Domain
{
    [Table("Vendas")]
    public class Venda
    {
        [Key]
        public Guid VendaId { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Lucro { get; set; } = 0;

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Faturamento { get; set; } = 0;

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal TaxaDoCartao { get; set; } = 0;

        [Required]
        public DateTime DataDeVenda { get; set; }

        [Required]
        [ForeignKey("Gerente")]
        public Guid GerenteId { get; set; }

        [Required]
        public Gerente? Gerente { get; set; }

        [Required]
        public ICollection<VendaProduto>? VendaProdutos { get; set; }

        public Venda()
        {
            VendaProdutos = new Collection<VendaProduto>();
        }
    }
}
