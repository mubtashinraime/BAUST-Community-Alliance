using System;
using BAUST_community_Alliance.Api.Models;
using Microsoft.EntityFrameworkCore;
namespace BAUST_community_Alliance.Api.Data;

public class BAUST_AllianceDbContext : DbContext
{
    public BAUST_AllianceDbContext(DbContextOptions<BAUST_AllianceDbContext> dbContextOptions) : base(dbContextOptions)
    {

    }

    //Dbset properties
    public DbSet<Content> Contents { get; set; }

}
