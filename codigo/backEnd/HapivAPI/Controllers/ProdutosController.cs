using Asp.Versioning;
using AutoMapper;
using HapivAPI.Domain;
using HapivAPI.DTOs;
using HapivAPI.Interfaces.Repositorys;
using HapivAPI.Requests;
using Microsoft.AspNetCore.Mvc;

namespace HapivAPI.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/v.{version:apiVersion}/[controller]")]
    [ApiController]
    public class ProdutosController : Controller
    {
        private IProdutoRepository ProdutoRepository { get; set; }
        private IFornecedorRepository FornecedorRepository { get; set; }

        private ICategoriaRepository CategoriaRepository { get; set; }
        private IMapper Mapper { get; set; }

        public ProdutosController(IProdutoRepository produtoRepo, IMapper mapper, IFornecedorRepository fornecedorRepo, ICategoriaRepository catRepo)
        {
            ProdutoRepository = produtoRepo;
            Mapper = mapper;
            FornecedorRepository = fornecedorRepo;
            CategoriaRepository = catRepo;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var produtos = await ProdutoRepository.GetTodasColunas();
            var produtosDTO = Mapper.Map<IEnumerable<ProdutoDTO>>(produtos);
            return Ok(produtosDTO);
        }

        [HttpPatch]
        public async Task<IActionResult> Patch([FromBody] IEnumerable<ProdutoRequest> produtos)
        {
            var result = await AtualizarProdutoAsync(produtos);

            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] ProdutoDTO produtoDTO)
        {
            var produto = Mapper.Map<Produto>(produtoDTO);
            await ProdutoRepository.AddAsync(produto);
            return Ok();
        }

        private async Task<IEnumerable<string>> AtualizarProdutoAsync(IEnumerable<ProdutoRequest> produtos)
        {
            List<string> erros = new List<string>();

            foreach (var produto in produtos)
            {
                var produtoDoBanco = await ProdutoRepository.Get( x => produto.ProdutoId == x.ProdutoId);
                if(produtoDoBanco != null)
                {
                    produtoDoBanco.Nome = produto.Nome;
                    produtoDoBanco.PrecoDeCompra = produto.PrecoDeCompra;
                    produtoDoBanco.PrecoDeVenda = produto.PrecoDeVenda;
                    produtoDoBanco.Quantidade = produto.Quantidade;
                    produtoDoBanco.Fornecedor = string.IsNullOrEmpty(produto.Fornecedor) ? new Fornecedor() { FornecedorId = Guid.NewGuid(), Nome = "" } : await VerificafornecedorAsync(produto.Fornecedor);
                    produtoDoBanco.Categoria = 
                    ProdutoRepository.Update(produtoDoBanco);
                }
                else
                {
                    erros.Add($"Produto {produto.ProdutoId} não encontrado");
                }              
            }
            return erros;
        }

        private async Task<Fornecedor> VerificafornecedorAsync(string nome)
        {
            var fornecedor = await FornecedorRepository.Get(x => x.Nome == nome);

            if(fornecedor == null)
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

    }
}
