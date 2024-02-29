using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Web.Api.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class PeopleController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Test ok get");
    }
    
}