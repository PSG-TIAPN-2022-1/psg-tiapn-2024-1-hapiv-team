using AutoMapper;
using HapivAPI.Domain;
using HapivAPI.DTOs;

namespace HapivAPI.Profiles
{
    public class FornecedorProfile : Profile
    {
        public FornecedorProfile()
        {
            CreateMap<Fornecedor, FornecedorDTO>();
        }
    }
}
