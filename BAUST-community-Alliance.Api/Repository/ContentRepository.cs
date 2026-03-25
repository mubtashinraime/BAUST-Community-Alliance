using System;
using BAUST_community_Alliance.Api.Models;
namespace BAUST_community_Alliance.Api.Repository;

public interface ContentRepository
{
    Task<List<Content>> GetAllContentAsync();
    Task<Content?> GetContentByIdAsync(int id);
    Task<Content> CreateContentAsync(Content content);
    Task<Content?> DeleteContentByIdAsync(int id);
    Task<Content?> UpdateContentAsync(int id, Content content);

}
