import React from 'react';
import "./header.scss";
import logo from "./../../images/logo.svg"

const Header = () => {
    return (
        <header id="header" className="bg-gray-900">
            <div className="container">
                <div className="header  flex items-center justify-between">
                    <div className="header--nav flex items-center ">
                        <img src={logo} alt="img"/>
                        <h5 className="text text-2xl px-2 text-amber-50">Jumashev</h5>
                    </div>

                    <nav className="header--navbar py-4 text-amber-50 ">
                        <a href="#" className="">Home</a>
                        <a href="#" className="px-5">About Me</a>
                        <a href="#">Services</a>
                        <a href="#">Contact</a>
                    </nav>
                    <div className="">
                        <button className="px-3 py-5 bg-transparent border-amber-500 text-amber-50">Dark</button>
                        <button className="px-3 py-5 bg-transparent border-amber-500 text-amber-50">GitHub</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;