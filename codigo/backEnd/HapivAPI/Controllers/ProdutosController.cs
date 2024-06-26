﻿using Asp.Versioning;
using AutoMapper;
using HapivAPI.DTOs;
using HapivAPI.Interfaces.Repositorys;
using HapivAPI.Interfaces.Services;
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
        private IProdutoService ProdutoService { get; set; }
        private IMapper Mapper { get; set; }

        public ProdutosController(IProdutoRepository produtoRepo, IMapper mapper, IProdutoService produtoServ)
        {
            ProdutoRepository = produtoRepo;
            Mapper = mapper;
            ProdutoService = produtoServ;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var produtos = await ProdutoRepository.GetTodasColunas();
            var produtosDTO = Mapper.Map<IEnumerable<ProdutoDTO>>(produtos);
            return Ok(produtosDTO);
        }

        [HttpGet("QuantidadeTotal")]
        public async Task<IActionResult> GetQuantidadeTotal()
        {
            var produtos = await ProdutoRepository.GetAll();
            var itens = produtos.Where(x => x.Ativo == true).Count();
            return Ok(itens);
        }

        [HttpPatch("Atualizar")]
        public async Task<IActionResult> Patch([FromBody] IEnumerable<ProdutoRequestAtualizar> produtos)
        {
            var result = await ProdutoService.AtualizarProdutoAsync(produtos);

            return Ok(result);
        }

        [HttpPut("Inserir")]
        public async Task<IActionResult> Put([FromBody] ProdutoRequestInserir produtoDTO)
        {
            var produto = await ProdutoService.InserirProdutoAsync(produtoDTO);
            return Ok(produto);
        }

        [HttpDelete("Deletar")]
        public async Task<IActionResult> Delete([FromBody] Guid produtoId)
        {
            var result = await ProdutoRepository.DeletarProduto(produtoId);
            return Ok(result);
        }
    }
}
