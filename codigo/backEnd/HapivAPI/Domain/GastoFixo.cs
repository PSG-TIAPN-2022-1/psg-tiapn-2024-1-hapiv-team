using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HapivAPI.Domain
{
    public class GastoFixo
    {
        [Key]
        public Guid GastoFixoId { get; set; }

        [Required]
        [MaxLength(300)]
        public string? Descricao { get; set; }

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Gasto { get; set; }

        [Required]
        public DateTime Data { get; set; }

        // Propriedade de navegação
        [Required]
        [ForeignKey("GerenteId")]
        public Guid GerenteId { get; set; }
        [Required]
        public Gerente? Gerente { get; set; }
    }
}
