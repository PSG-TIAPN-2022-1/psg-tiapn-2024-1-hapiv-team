using AutoMapper;
using HapivAPI.Domain;
using HapivAPI.DTOs;

namespace HapivAPI.Profiles
{
    public class VendaProfile : Profile
    {
        public VendaProfile()
        {
            CreateMap<Venda, VendaDTO>();
        }
    }
}
