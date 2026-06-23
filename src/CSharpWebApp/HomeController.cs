using Microsoft.AspNetCore.Mvc;
namespace CSharpWebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public string Get(string query)
        {
            // SQL Injection vulnerability for scanning
            var sql = "SELECT * FROM users WHERE name = '" + query + "'";
            return sql;
        }
    }
}
