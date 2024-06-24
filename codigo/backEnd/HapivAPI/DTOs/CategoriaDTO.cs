using System.ComponentModel.DataAnnotations;

namespace HapivAPI.DTOs
{
    public class CategoriaDTO
    {
        public Guid CategoriaId { get; set; }

        public string? TipoCategoria { get; set; }
    }
}
