using System;
using AutoMapper;
using BAUST_community_Alliance.Api.Models;
using BAUST_community_Alliance.Api.Models.DTOS;

namespace BAUST_community_Alliance.Api.mappings;

public class AutomapperProfile : Profile
{
    public AutomapperProfile()
    {
        CreateMap<Content, AddContentRequestDto>().ReverseMap();
        CreateMap<Content, updateContentRequestDto>().ReverseMap();
        CreateMap<Content, ContentDto>().ReverseMap();
    }

}
