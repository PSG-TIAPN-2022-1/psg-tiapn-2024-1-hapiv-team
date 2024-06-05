using MvcContrib.UI.InputBuilder.Attributes;
using System.ComponentModel.DataAnnotations;

namespace HapivAPI.Requests
{
    public class GerenteRequest
    {
        [Example("Usuario@gmail.com")]
        [RegularExpression(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]
        public string? Email { get; set; }

        [Example("Senha1234")]
        [RegularExpression(@"^.{8,}$")]
        public string? Senha { get; set; }
    }
}
