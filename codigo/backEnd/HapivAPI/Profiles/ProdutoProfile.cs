using AutoMapper;
using HapivAPI.Domain;
using HapivAPI.DTOs;

namespace HapivAPI.Profiles
{
    public class ProdutoProfile : Profile
    {
        public ProdutoProfile()
        {
            CreateMap<Produto, ProdutoDTO>();
            CreateMap<ProdutoDTO, Produto>();
            CreateMap<Produto, NomeProdutoDTO>();
        }
    }
}
