using System;
using System.ComponentModel.DataAnnotations;

namespace BAUST_community_Alliance.Api.Models.DTOS;

public class AddContentRequestDto
{
    [Required]
    [MaxLength(200, ErrorMessage = "The Maximum length is 200 character")]
    public string heading { get; set; }
    [Required]
    [MaxLength(5000, ErrorMessage = "The Maximum length is 500 character")]
    public string content_about { get; set; }
    [Required]
    [MaxLength(10000, ErrorMessage = "The Maximum length is 1000 character")]
    public string detail_description { get; set; }
    [Required]
    [MaxLength(1000, ErrorMessage = "The Maximum length is 100 character")]
    public string image { get; set; }
    public string? video { get; set; }

    public IFormFile ImageFile { get; set; }
}
