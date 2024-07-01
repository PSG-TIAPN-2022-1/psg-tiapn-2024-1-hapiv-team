using AutoMapper;
using HapivAPI.Domain.Relacionamentos;
using HapivAPI.DTOs;

namespace HapivAPI.Profiles
{
    public class VendaProdutoProfile : Profile
    {
        public VendaProdutoProfile()
        {
            CreateMap<VendaProduto, VendaProdutoDTO>();
        }
    }
}
