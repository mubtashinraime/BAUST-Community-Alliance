using BAUST_community_Alliance.Api.Data;
using BAUST_community_Alliance.Api.mappings;
using BAUST_community_Alliance.Api.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<BAUST_AllianceDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DbContextConnectionString"))
);
builder.Services.AddScoped<ContentRepository, SQLContentRepositories>();
builder.Services.AddAutoMapper(typeof(AutomapperProfile));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();
app.Run();

