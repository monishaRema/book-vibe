import React from 'react';
import Book from '../Book/Book';

const Books = ({booksData}) => {


    return (
      <section className='books pt-24'>
              <div className="container max-w-[1210px] mx-auto px-5">
                <h2 className="text-4xl font-bold text-center mb-9">Books</h2>
                <div className="grid grid-cols-3 gap-6">
                    {
                        booksData.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
              </div>
      </section>
    );
};

export default Books;