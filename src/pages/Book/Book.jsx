import React from 'react';
import { Link } from 'react-router';

const Book = ({book}) => {

    const { bookId, bookName, author, image, review, rating, category, tags, yearOfPublishing, publisher, totalPages}= book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className='border border-gray-200 p-6 rounded-2xl flex flex-col justify-between'>
            <div className="card-img-box mb-6 rounded-2xl bg-gray-100 p-6 text-center ">
                <img className='h-[196px] w-[140px] mx-auto' src={image} alt="" />
            </div>
            <div className="card-content">
                <div className="meta-box flex gap-5 mb-4">
                    {
                        tags.map((tag,i) => (<span key={i} className='inline-block text-sm bg-[#23BE0A15] rounded-3xl text-green-600 py-2 px-5'>{tag}</span>))
                    }
                    
                </div>
                <h2 className="text-2xl font-bold mb-4 flex justify-between gap-3 items-start">{bookName} <span className='inline-block text-xs bg-[#be0a971f] rounded-3xl text-gray-600 py-1 px-3' > {yearOfPublishing}</span></h2>
                <p className='text-base font-medium text-gray-600 mb-5'>By : <span>{author}</span></p>
            </div>
            <div className="card-footer border-t border-gray-200 border-dashed pt-5 flex justify-between text-gray-700">
                <span>{category}</span>
                <div className="buttons flex gap-2 items-center">
                    <span className='text-base'> {rating}</span>
                    <span className='text-2xl'>★</span>
                </div>
            </div>
            
        </div>
        </Link>
    );
};

export default Book;