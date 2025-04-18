import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container max-w-[1210px] mx-auto px-5">
        <div className="flex justify-between items-center py-5">
          <div className="brand">
            <h2 className="font-bold text-3xl text-gray-800">Book Vibe</h2>
          </div>
          <nav className="nav-menu">
            <ul className="flex gap-5">
              <Link to={'/'}>
<li className="nav-item">Home</li>
              </Link>
              <Link to={'/listed-books'}>
<li className="nav-item">Listed Books</li>
              </Link>
              <Link to={'/pages-to-read'}>
<li className="nav-item">Pages to Read</li>
              </Link>
       
             
            </ul>
          </nav>
          <div className="buttons flex items-center gap-5">
            <button className="inline-block bg-[#23BE0A] text-white py-3 px-7 rounded-lg text-lg font-medium hover:bg-[#487940] transition-all duration-300 ease-in-out border-0 outline-0">
              Sign in
            </button>
            <button className="inline-block  bg-[#59C6D2] text-white py-3 px-7 rounded-lg text-lg font-medium hover:bg-[#518f96] transition-all duration-300 ease-in-out border-0 outline-0">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
