using HapivAPI.Domain;
using HapivAPI.Domain.Relacionamentos;
using HapivAPI.Interfaces.Repositorys;
using HapivAPI.Interfaces.Services;
using HapivAPI.Requests;

namespace HapivAPI.Services
{
    public class VendasService : IVendaService
    {
        private IVendaRepository VendaRepository;
        private IProdutoRepository ProdutoRepository;
        private IVendaProdutoRepository VendaProdutoRepository;
        private IGerenteRepository GerenteRepository;

        public VendasService(IVendaRepository vendaRepository, IProdutoRepository produtoRepository, IVendaProdutoRepository vendaProdutoRepository, IGerenteRepository gerenteRepository)
        {
            VendaRepository = vendaRepository;
            ProdutoRepository = produtoRepository;
            VendaProdutoRepository = vendaProdutoRepository;
            GerenteRepository = gerenteRepository;
        }

        public async Task EfetuarVenda(IEnumerable<EfetuarVendaRequest> produtosVendidosRequest)
        {
            var produtosVendidosIds = produtosVendidosRequest.Select(i => i.ProdutoId);

            var produtosVendidos = await ProdutoRepository.Listar(i => produtosVendidosIds.Contains(i.ProdutoId));

            var vendaProduto = new VendaProduto();

            var venda = await CalcularVenda(produtosVendidosRequest, produtosVendidos);

            foreach (var produtoVendido in produtosVendidosRequest)
            {
                var produto = produtosVendidos.FirstOrDefault(i => i.ProdutoId == produtoVendido.ProdutoId);

                if (produto == null)
                {
                    throw new Exception($"Produto {produtoVendido.ProdutoId} não encontrado");
                }

                if (produto.Quantidade < produtoVendido.Quantidade)
                {
                    throw new Exception($"Quantidade de {produto.Nome} insuficiente");
                }

                produto.Quantidade -= produtoVendido.Quantidade;
                ProdutoRepository.Update(produto);

                vendaProduto.Produto = produto;
                vendaProduto.Quantidade = produtoVendido.Quantidade;
                vendaProduto.Venda = venda;

                VendaProdutoRepository.Add(vendaProduto);
            }
            VendaRepository.Add(venda);
            VendaRepository.SaveChanges();
        }

        private async Task<Venda> CalcularVenda(IEnumerable<EfetuarVendaRequest> produtosVendidosRequest, IEnumerable<Produto> produtosVendidos)
        {
            var venda = new Venda();
            venda.VendaId = Guid.NewGuid();
            venda.DataDeVenda = DateTime.Now;
            venda.GerenteId = (await GerenteRepository.GetAll()).FirstOrDefault().GerenteId;

            foreach (var produtoVendido in produtosVendidosRequest)
            {
                var produto = produtosVendidos.FirstOrDefault(i => i.ProdutoId == produtoVendido.ProdutoId);

                if (produto == null)
                {
                    throw new Exception($"Produto {produtoVendido.ProdutoId} não encontrado");
                }

                venda.Lucro += produtoVendido.Quantidade * (produto.PrecoDeVenda - produto.PrecoDeCompra);
                venda.Faturamento += produtoVendido.Quantidade * produto.PrecoDeVenda;
            }
            return venda;

        }
    }
}
