using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace HapivAPI.Domain
{
    public class Gerente
    {
        [Key]
        public Guid UserId { get; set; }

        [Required]
        [MaxLength(300)]
        public string? Email { get; set; }

        [Required]
        [MaxLength(300)]
        public string? Senha { get; set; }

        // Propriedades de navegação
        public ICollection<Produto>? Produtos { get; set; }
        public ICollection<Venda>? Vendas { get; set; }
        public ICollection<GastoFixo>? GastosFixos { get; set; }
    }
}
