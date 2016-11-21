using System.Collections.Generic;
using IStore_.Models;

namespace IStore_.Interfaces
{
    public interface IBookService
    {
        void DeleteBook(int id);
        List<Book> GetAllBook();
        Book GetBookById(int id);
        void SaveBook(Book book);
        List<Book> getBookByAuthorId(int id);

    }
}