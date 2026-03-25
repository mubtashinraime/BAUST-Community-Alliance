using AutoMapper;
using BAUST_community_Alliance.Api.Models;
using BAUST_community_Alliance.Api.Models.DTOS;
using BAUST_community_Alliance.Api.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

        [HttpPost]
        public async Task<IActionResult> CreateContent(AddContentRequestDto addContentRequestDto)
        {
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

    }
}
