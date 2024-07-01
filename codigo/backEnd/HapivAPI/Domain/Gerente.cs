using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.VisualBasic;
using System.Collections.ObjectModel;

namespace HapivAPI.Domain
{
    public class Gerente
    {
        [Key]
        public Guid GerenteId { get; set; }

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

        public Gerente()
        {
            Produtos = new Collection<Produto>();
            Vendas = new Collection<Venda>();
            GastosFixos = new Collection<GastoFixo>();
        }
    }
}
