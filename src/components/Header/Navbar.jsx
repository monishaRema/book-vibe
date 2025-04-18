import React from 'react';

const Navbar = () => {
    return (
      <header className="header">
        <div className="container max-w-[1210px] mx-auto px-5">
            <div className="flex justify-between items-center">
                <div className="brand">
                    <a href="http://">Logo</a>
                </div>
                <nav className="nav-menu">
                    <ul className="flex gap-5">
                        <li className="nav-item"><a href="" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="" className="nav-link"></a>About</li>
                        <li className="nav-item"><a href="" className="nav-link"></a>Books</li>
                        <li className="nav-item"><a href="" className="nav-link"></a>Contact</li>
                    </ul>
                </nav>
                <div className="buttons flex gap-5">
                    <button className="btn">Log in</button>    
                    <button className="btn">Sign up</button>    
                </div>
            </div>
        </div>
      </header>
    );
};

export default Navbar;