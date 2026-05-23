using AutoMapper;
using BAUST_community_Alliance.Api.Models;
using BAUST_community_Alliance.Api.Models.DTOS;
using BAUST_community_Alliance.Api.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO; // Make sure to add this at the top of your controller

namespace BAUST_community_Alliance.Api.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContentController : ControllerBase
    {
        private readonly ContentRepository contentRepository;
        private readonly IMapper mapper;

        public ContentController(ContentRepository contentRepository, IMapper mapper)
        {
            this.contentRepository = contentRepository;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var contentsDomain = await contentRepository.GetAllContentAsync();
            var contentsDto = mapper.Map<List<ContentDto>>(contentsDomain);
            return Ok(contentsDto);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetContentById(int id)
        {
            var getContentDomain = await contentRepository.GetContentByIdAsync(id);
            if (getContentDomain == null)
            {
                return NotFound();
            }
            var contentDto = mapper.Map<ContentDto>(getContentDomain);
            return Ok(contentDto);
        }

        // [HttpPost]
        // public async Task<IActionResult> CreateContent([FromForm] AddContentRequestDto addContentRequestDto)
        // {
        //     var contentDomain = mapper.Map<Content>(addContentRequestDto);
        //     contentDomain = await contentRepository.CreateContentAsync(contentDomain);
        //     var contentDto = mapper.Map<ContentDto>(contentDomain);
        //     return CreatedAtAction(nameof(GetContentById), new { id = contentDto.id }, contentDto);
        // }

        [HttpPost]
        public async Task<IActionResult> CreateContent([FromForm] AddContentRequestDto addContentRequestDto)
        {
            // 1. Absolute path to your React images folder on Linux
            var reactImageFolder = "/home/hasib/Desktop/BAUST-Community-Alliance/BAUST-community-Alliance-React/src/images";

            if (addContentRequestDto.ImageFile != null && addContentRequestDto.ImageFile.Length > 0)
            {
                // Ensure the directory physically exists
                if (!Directory.Exists(reactImageFolder))
                {
                    Directory.CreateDirectory(reactImageFolder);
                }

                // Combine folder path with the clean filename (e.g., "photo.jpg")
                var filePath = Path.Combine(reactImageFolder, addContentRequestDto.image);
                Console.WriteLine("File Writed!");
                // Save the file binary data to disk
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await addContentRequestDto.ImageFile.CopyToAsync(stream);
                }
            }

            // 2. Your database saving logic goes below...
            var contentDomain = mapper.Map<Content>(addContentRequestDto);
            contentDomain = await contentRepository.CreateContentAsync(contentDomain);
            var contentDto = mapper.Map<ContentDto>(contentDomain);

            return CreatedAtAction(nameof(GetContentById), new { id = contentDto.id }, contentDto);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateContent(int id, updateContentRequestDto updateContentRequestDto)
        {
            var contentDomain = mapper.Map<Content>(updateContentRequestDto);
            contentDomain = await contentRepository.UpdateContentAsync(id, contentDomain);
            if (contentDomain == null)
            {
                return NotFound();
            }
            var contentDto = mapper.Map<ContentDto>(contentDomain);
            return Ok(contentDto);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteContentById(int id)
        {
            var contentDomain = await contentRepository.DeleteContentByIdAsync(id);
            if (contentDomain == null)
            {
                return NotFound();
            }
            var contentDto = mapper.Map<ContentDto>(contentDomain);
            return Ok(contentDto);
        }

        [HttpGet]
        [Route("stories")]
        public async Task<IActionResult> GetAllStories(int pageNumber = 1, int pageSize = 4)
        {
            var storiesDomain = await contentRepository.GetAllStoriesAsync(pageNumber, pageSize);
            //var storiesDto = mapper.Map<ContentDto>(storiesDomain);
            return Ok(storiesDomain);
        }

        // [HttpGet]
        // [Route("blogs")]
        // public async Task<IActionResult> GetAllBlogs()
        // {
        //     var blogsDomain = await contentRepository.GetAllBlogsAsync();
        //     //var blogsDto = mapper.Map<ContentDto>(blogsDomain);
        //     return Ok(blogsDomain);
        // }

        [HttpGet]
        [Route("blogs")]
        public async Task<IActionResult> GetAllBlogs(int pageNumber = 1, int pageSize = 4)
        {
            var blogsDomain = await contentRepository
                .GetAllBlogsAsync(pageNumber, pageSize);

            return Ok(blogsDomain);
        }

        [HttpGet]
        [Route("publications")]
        public async Task<IActionResult> GetAllPublications(int pageNumber = 1, int pageSize = 4)
        {
            var publicationsDomain = await contentRepository.GetAllPublicationsAsync(pageNumber, pageSize);
            //var publicationsDto = mapper.Map<ContentDto>(publicationsDomain);
            return Ok(publicationsDomain);
        }
    }
}
