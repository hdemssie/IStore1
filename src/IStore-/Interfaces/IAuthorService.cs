using System.Collections.Generic;
using IStore_.Models;

namespace IStore_.Services
{
    public interface IAuthorService
    {
        void DeleteAuthor(int id);
        List<Author> GetAllAuthor();
        Author GetAuthorById(int id);
        void SaveAuthor(Author author);
        Author GetBooksByAuthor(int id);
    }
}