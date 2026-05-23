using System;

namespace BAUST_community_Alliance.Api.Models;

public class Content
{
    public int id { get; set; }
    public DateTime DateTime { get; set; }
    public string heading { get; set; }
    public string content_about { get; set; }
    public string detail_description { get; set; }
    public string image { get; set; }
    public string? video { get; set; }

}
