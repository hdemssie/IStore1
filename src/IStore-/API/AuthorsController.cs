
using IStore_.Models;
using IStore_.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IStore_.API
{
    [Route("api/[controller]")]
    public class AuthorsController : Controller
    {
        private IAuthorService _service;
        
        //private IAuthorRespository _repo;

        //Get  alist of all Author

        [HttpGet]
        public IActionResult Get()
        {
            var test = _service.GetAllAuthor();
            return Ok(test);
        }
        //[HttpGet("{id}")] //Http Declaration with Id Object
        //public IActionResult Get(int id)
        //{
        //    var author = _service.GetAuthorById(id);
        //    return Ok(author);
        //}

        [HttpGet("{id}")] //Http Declaration with Id Object
        public IActionResult Get(int id)
        {
            var data = _service.GetBooksByAuthor(id);
            
            return Ok(data);
        }
        //Add a Author or update an existing Author
        [HttpPost]
        public IActionResult Post([FromBody]Author author)
        {
            _service.SaveAuthor(author);
            return Ok(author);
        }

        [HttpDelete("{id}")]

    public IActionResult Delete(int id)
    {
        _service.DeleteAuthor(id);
        return Ok();
    }

    //Constractor utilizing independcy injection
    public AuthorsController(IAuthorService service)
        {
            this._service = service;        
        } 
}
}
