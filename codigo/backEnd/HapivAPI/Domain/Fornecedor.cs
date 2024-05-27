using System.ComponentModel.DataAnnotations;

namespace HapivAPI.Domain
{
    public class Fornecedor
    {      
        [Key]
        public Guid FornecedorId { get; set; }

        [Required]
        [MaxLength(45)]
        public string? Nome { get; set; }
        
        public ICollection<Produto>? Produto { get; set; }

        public Fornecedor() { }
    }
}
