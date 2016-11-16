using IStore_.Models;
using IStore_.Repository;
using IStore_.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IStore_.Interfaces
{
    public class BookService :IBookService
    {
        private IGenericRepository _repo;
        public List<Book> GetAllBook()
        {
            return _repo.Query<Book>().ToList();
        }
        //Get single Book by Id(called by controller Get(id) method)
        public Book GetBookById(int id)
        {
            var book = _repo.Query<Book>().Where(m => m.Id == id).FirstOrDefault();

            return book;
        }
        //post single move to the database (called by Post(book)methiod)
        public void SaveBook(Book book)
        {
            if (book.Id == 0)
            {
                _repo.Add(book);
            }
            else
            {
                _repo.Update(book);
            }

        }
        //Delete singl book from the database (called by Delete(id method)
        public void DeleteBook(int id)
        {
            Book bookToDelete = _repo.Query<Book>().Where(m => m.Id == id).FirstOrDefault();
            _repo.Delete(bookToDelete);
        }

        public BookService(IGenericRepository repo)
        {
            this._repo = repo;
        }
    }
}
