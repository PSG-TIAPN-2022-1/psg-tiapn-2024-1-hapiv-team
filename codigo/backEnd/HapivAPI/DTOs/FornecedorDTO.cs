using System.ComponentModel.DataAnnotations;

namespace HapivAPI.DTOs
{
    public class FornecedorDTO
    {
        public Guid FornecedorId { get; set; }

        public string? Nome { get; set; }
    }
}
