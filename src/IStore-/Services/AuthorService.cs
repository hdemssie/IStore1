using IStore_.Interfaces;
using IStore_.Models;
using IStore_.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IStore_.Services
{
    public class AuthorService : IAuthorService
    {
        private IGenericRepository _repo;
        private IBookService _book;

        public List<Author> GetAllAuthor()
        {
            var data =  _repo.Query<Author>().ToList();
            return data;
        }
        //Get single Author by Id(called by controller Get(id) method)

        public Author GetAuthorById(int id)
        {
            var author = _repo.Query<Author>().Where(A => A.Id == id).FirstOrDefault();

            return author;
        }
        //Get Books by Author Id

        public Author GetBooksByAuthor(int id)
       {
         Author author = this.GetAuthorById(id);
            author.Books = this._book.getBookByAuthorId(id);
            return author;


        //    var data = _repo.Query<Author>().Where(a => a.Id == id).Select(a => new
        //    {
        //        Id = a.Id,
        //        Name = a.Name,
        //        Books= _repo.Query<Book>().Where(b=> b.AuthorId==id).ToList()
        //    }).FirstorDefault();
        //    return data;
        //
    }

        //post single move to the database (called by Post(book)methiod)
        public void SaveAuthor(Author author)
        {
            if (author.Id == 0)
            {
                _repo.Add(author);
            }
            else
            {
                _repo.Update(author);
            }
        }
        //Delete single Author from the database (called by Delete(id method)
        public void DeleteAuthor(int id)
        {
            Author authorToDelete = _repo.Query<Author>().Where(A => A.Id == id).FirstOrDefault();
            _repo.Delete(authorToDelete);
        }

        public AuthorService(IGenericRepository repo,IBookService book)
        {
            this._repo = repo;
            this._book = book;
        }
    }
}

