using AutoMapper;
using HapivAPI.Domain;
using HapivAPI.DTOs;

namespace HapivAPI.Profiles
{
    public class CategoriaProfile : Profile
    {
        public CategoriaProfile()
        {
            CreateMap<Categoria, CategoriaDTO>();
        }
    }
}
