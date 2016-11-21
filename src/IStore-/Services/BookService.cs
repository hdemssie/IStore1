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
            
                var test=_repo.Query<Book>().ToList();
            return test;
        }
        //Get single Book by Id(called by controller Get(id) method)
        public Book GetBookById(int id)
        {
            var book = _repo.Query<Book>().Where(b => b.Id == id).FirstOrDefault();

            return book;
        }

        public List<Book> getBookByAuthorId(int id)
        {
            var data = _repo.Query<Book>().Where(b => b.Author.
            Id == id).ToList();
            return data;

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
        //Delete single book from the database (called by Delete(id method)
        public void DeleteBook(int id)
        {
            Book bookToDelete = _repo.Query<Book>().Where(b => b.Id == id).FirstOrDefault();
            _repo.Delete(bookToDelete);
        }

        public BookService(IGenericRepository repo)
        {
            this._repo = repo;
        }
    }
}
