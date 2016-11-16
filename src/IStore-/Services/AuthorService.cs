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
        public List<Author> GetAllAuthor()
        {
            return _repo.Query<Author>().ToList();
        }
        //Get single Author by Id(called by controller Get(id) method)
        public Author GetAuthorById(int id)
        {
            var author = _repo.Query<Author>().Where(A => A.Id == id).FirstOrDefault();

            return author;
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

        public AuthorService(IGenericRepository repo)
        {
            this._repo = repo;
        }
    }
}

