import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addDataToDB } from "../../Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const allBooks = useLoaderData();

  const book = allBooks.find((book) => book.bookId === parseInt(id));
  const { bookId, bookName, author, image, review, rating, category, tags, yearOfPublishing, publisher, totalPages}= book;


  return (
    <section className="book-details py-24">
      <div className="container max-w-[1210px] mx-auto px-5">
        <div className="flex gap-5">
          <div className="img-box bg-gray-100 rounded-2xl w-6/12 px-5 py-10">
            <img className="max-w-[425px] mx-auto" src={image} alt={bookName + ' image'} />
          </div>
          <div className="p-6 w-6/12">
            <div className="card-content">
            <h1 className="text-4xl font-bold mb-4 flex justify-between gap-3 items-start">
                {bookName}
              </h1>
              <p className="text-base font-medium text-gray-600 mb-6">
                By : <span>{author}</span>
              </p>
              <p className="border-t border-b border-gray-200 py-4">{category}</p>
              <p className="py-6 text-gray-500"><strong className="text-black">Review : </strong>{review}</p>
              <div className="meta-box flex gap-5 mb-4 items-center">
                <span className="text-black font-bold">Tag</span>
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block text-sm bg-[#23BE0A15] rounded-3xl text-green-600 py-2 px-5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="border-t border-gray-200 py-6">
                <p className="text-sm flex justify-between max-w-sm gap-15 mb-3">
                    <span className="text-gray-500">Number of Pages:</span>
                    <span className="font-bold text-black">{totalPages}</span>
                </p>
                <p className="text-sm flex justify-between max-w-sm gap-15 mb-3">
                    <span className="text-gray-500">Publisher:</span>
                    <span className="font-bold text-black">{publisher}</span>
                </p>
                <p className="text-sm flex justify-between max-w-sm gap-15 mb-3">
                    <span className="text-gray-500">Year of Publishing:</span>
                    <span className="font-bold text-black">{yearOfPublishing}</span>
                </p>
                <p className="text-sm flex justify-between max-w-sm gap-15 mb-3">
                    <span className="text-gray-500">Rating:</span>
                    <span className="font-bold text-black">{rating}</span>
                </p>
              </div>
              <div className="buttons flex items-center gap-5">
            <button
             onClick={()=>addDataToDB(bookId)}
            
            className="inline-block bg-transparent text-black py-3 px-7 rounded-lg text-lg font-medium border border-gray-200  transition-all duration-300 ease-in-out  outline-0">
              Read
            </button>
            <button className="inline-block  bg-[#59C6D2] text-white py-3 px-7 rounded-lg text-lg font-medium hover:bg-[#518f96] transition-all duration-300 ease-in-out border-0 outline-0">
             Wishlist
            </button>
          </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
