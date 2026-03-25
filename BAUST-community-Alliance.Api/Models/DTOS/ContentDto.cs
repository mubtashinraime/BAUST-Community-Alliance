using System;

namespace BAUST_community_Alliance.Api.Models.DTOS;

public class ContentDto
{
    public int id { get; set; }
    public string heading { get; set; }
    public string content_about { get; set; }
    public string detail_description { get; set; }
    public string image { get; set; }
    public string? video { get; set; }
}
