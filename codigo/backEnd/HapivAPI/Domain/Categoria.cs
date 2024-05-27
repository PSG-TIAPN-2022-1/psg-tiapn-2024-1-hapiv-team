using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HapivAPI.Domain
{
    [Table("Categorias")]
    public class Categoria
    {
        [Key]
        public Guid CategoriaId { get; set; }

        [Required]
        [MaxLength(45)]
        public string? TipoCategoria { get; set; }

        [Required]
        public ICollection<Produto>? Produtos { get; set; }
        
        public Categoria()
        {
            Produtos = new Collection<Produto>();
        }
    }
}
