namespace HapivAPI.DTOs
{
    public class VendaDTO
    {
        public Guid VendaId { get; set; }
        public List<string> Nomes { get; set; }
        public int Quantidade { get; set; }
        public decimal Faturamento { get; set; }
        public decimal Lucro { get; set; }
        public decimal TaxaDoCartao { get; set; }
        public DateTime DataDeVenda { get; set; }

        public void SetarPropriedades(IEnumerable<VendaProdutoDTO> vendas)
        {
            Quantidade = vendas.Sum(v => v.Quantidade);
            Nomes = vendas.Select(v => v.Produto.Nome).ToList();
        }
    }
}
