using AutoMapper;
using HapivAPI.Domain;
using HapivAPI.Interfaces.Repositorys;
using HapivAPI.Interfaces.Services;
using HapivAPI.Requests;

namespace HapivAPI.Services
{
    public class ProdutoService : IProdutoService
    {
        private IProdutoRepository ProdutoRepository { get; set; }
        private IFornecedorRepository FornecedorRepository { get; set; }
        private ICategoriaRepository CategoriaRepository { get; set; }

        private IGerenteRepository GerenteRepository { get; set; }
        private IMapper Mapper { get; set; }

        public ProdutoService(IProdutoRepository produtoRepo, IMapper mapper, IFornecedorRepository fornecedorRepo, ICategoriaRepository catRepo, IGerenteRepository gerente)
        {
            GerenteRepository = gerente;
            ProdutoRepository = produtoRepo;
            Mapper = mapper;
            FornecedorRepository = fornecedorRepo;
            CategoriaRepository = catRepo;
        }

        public async Task<IEnumerable<string>> AtualizarProdutoAsync(IEnumerable<ProdutoRequestAtualizar> produtosAtualizar)
        {
            List<string> erros = new List<string>();

            var produtosIds = produtosAtualizar.Select(x => x.ProdutoId).ToList();

            var produtosDoBanco = await ProdutoRepository.Listar(i => produtosIds.Contains(i.ProdutoId));

            if (produtosDoBanco == null)
            {
                erros.Add("Nenhum produto encontrado");
                return erros;
            }

            foreach (var produto in produtosAtualizar)
            {
                var produtoDoBanco = produtosDoBanco.FirstOrDefault(x => x.ProdutoId == produto.ProdutoId);

                if (produtoDoBanco != null)
                {
                    // Atualiza propriedades do produto
                    produtoDoBanco.Nome = produto.Nome;
                    produtoDoBanco.PrecoDeCompra = produto.PrecoDeCompra;
                    produtoDoBanco.PrecoDeVenda = produto.PrecoDeVenda;
                    produtoDoBanco.Quantidade = produto.Quantidade;

                    produtoDoBanco.Fornecedor = await VerificafornecedorAsync(produto.Fornecedor);
                    produtoDoBanco.Categoria = await VerificaCategoriaAsync(produto.Categoria);
                    ProdutoRepository.Update(produtoDoBanco);
                    ProdutoRepository.SaveChanges();
                }
                else
                {
                    erros.Add($"Produto {produto.ProdutoId} não encontrado");
                }
            }
            return erros;
        }

        public async Task<Produto> InserirProdutoAsync(ProdutoRequestInserir produto)
        {
            var produtoDoBanco = new Produto();
            produtoDoBanco.ProdutoId = Guid.NewGuid();
            produtoDoBanco.Nome = produto.Nome;
            produtoDoBanco.PrecoDeCompra = produto.PrecoDeCompra;
            produtoDoBanco.PrecoDeVenda = produto.PrecoDeVenda;
            produtoDoBanco.Quantidade = produto.Quantidade;
            produtoDoBanco.DataEntrada = DateTime.Now;
            produtoDoBanco.GerenteId = (await GerenteRepository.GetAll()).FirstOrDefault().GerenteId;
            produtoDoBanco.Fornecedor = await VerificafornecedorAsync(produto.Fornecedor);
            produtoDoBanco.Categoria = await VerificaCategoriaAsync(produto.Categoria);
            await ProdutoRepository.AddAsync(produtoDoBanco);
            ProdutoRepository.SaveChanges();

            return produtoDoBanco;
        }

        #region privados
        private async Task<Fornecedor> VerificafornecedorAsync(string nome)
        {
            var fornecedor = await FornecedorRepository.Get(x => x.Nome == nome);

            if (fornecedor == null)
            {
                var novoFornecedor = new Fornecedor { FornecedorId = Guid.NewGuid(), Nome = nome };
                FornecedorRepository.Add(novoFornecedor);
                return novoFornecedor;
            }

            fornecedor.Nome = nome;
            FornecedorRepository.Update(fornecedor);
            return fornecedor;
        }

        private async Task<Categoria> VerificaCategoriaAsync(string nome)
        {
            var categoria = await CategoriaRepository.Get(x => x.TipoCategoria == nome);

            if (categoria == null)
            {
                var novaCategoria = new Categoria { CategoriaId = Guid.NewGuid(), TipoCategoria = nome };
                CategoriaRepository.Add(novaCategoria);
                return novaCategoria;
            }
            categoria.TipoCategoria = nome;
            CategoriaRepository.Update(categoria);

            return categoria;
        }
        #endregion
    }
}
