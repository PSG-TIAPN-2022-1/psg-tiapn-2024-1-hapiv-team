namespace HapivAPI.Requests
{
    public class ProdutoRequest
    {
        public string? Nome { get; set; }

        public decimal PrecoDeCompra { get; set; }

        public decimal PrecoDeVenda { get; set; }

        public int Quantidade { get; set; }
    }
}
