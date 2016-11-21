using IStore_.Models;
using IStore_.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using IStore_.Interfaces;
using System.Linq;
using System.Threading.Tasks;


namespace IStore_.API
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {

        private IBookService _service;
        //private IbookRepository _repo;

        [HttpGet] //Get a list of all Books
        public IActionResult Get()
        {

            var test = _service.GetAllBook();
            return Ok(test);
        }

        [HttpGet("{id}")] // HTTP Declaration with Id Object
        public IActionResult Get(int id)
        {
            var book = _service.GetBookById(id);
            return Ok(book);

        }

        [HttpPost]   //Add a Book or update an exisiting Book
        public IActionResult Post([FromBody]Book book)
        {
            _service.SaveBook(book);
            return Ok(book);
        }

        [HttpDelete("{id}")]

        public IActionResult Delete(int id)
        {
            _service.DeleteBook(id);
            return Ok();
        }

        //Constrator utilizing independcy injection
        public BooksController(IBookService service)
        {
            this._service = service;
        }

    }
}

