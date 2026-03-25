using System;
using BAUST_community_Alliance.Api.Data;
using BAUST_community_Alliance.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace BAUST_community_Alliance.Api.Repository;

public class SQLContentRepositories : ContentRepository
{
    private readonly BAUST_AllianceDbContext dbContext;

    public SQLContentRepositories(BAUST_AllianceDbContext dbContext)
    {
        this.dbContext = dbContext;
    }
    public async Task<Content> CreateContentAsync(Content content)
    {
        await dbContext.Contents.AddAsync(content);
        await dbContext.SaveChangesAsync();
        return content;
    }

    public async Task<Content?> DeleteContentByIdAsync(int id)
    {
        var content = await dbContext.Contents.FirstOrDefaultAsync(x => x.id == id);
        if (content == null)
        {
            return null;
        }
        dbContext.Remove(content);
        await dbContext.SaveChangesAsync();
        return content;
    }

    public async Task<List<Content>> GetAllContentAsync()
    {
        return await dbContext.Contents.ToListAsync();
    }

    public async Task<Content?> GetContentByIdAsync(int id)
    {
        var content = await dbContext.Contents.FindAsync(id);
        if (content == null)
        {
            return null;
        }
        return content;
    }

    public async Task<Content?> UpdateContentAsync(int id, Content content)
    {
        var getContent = await dbContext.Contents.FindAsync(id);
        if (getContent == null)
        {
            return null;
        }
        getContent.heading = content.heading;
        getContent.content_about = content.content_about;
        getContent.detail_description = content.detail_description;
        getContent.image = content.image;
        getContent.video = content.video;
        await dbContext.SaveChangesAsync();
        return content;
    }
}
