using Newtonsoft.Json;

namespace HapivAPI.Requests
{
    public class ProdutoRequestInserir
    {
        [JsonProperty("Nome")]
        public string? Nome { get; set; }

        public decimal PrecoDeCompra { get; set; }

        public decimal PrecoDeVenda { get; set; }

        public int Quantidade { get; set; }

        public string? Categoria { get; set; }

        public string? Fornecedor { get; set; }
    }
}
