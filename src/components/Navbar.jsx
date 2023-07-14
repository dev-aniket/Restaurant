import React, { useRef } from "react";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  const searchRef = useRef();
  const navbarRef = useRef();

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
  };
  const navbarHandler = () => {
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.toggle("active");
  };

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={logo} alt="logo"></img>
      </a>

      {/* NAV MENU */}

      <nav className="navbar" ref={navbarRef}>
        <a href="#home">HOME</a>
        <a href="#menu">MENU</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <div className="icons">
        <div className="fas fa-search" onClick={searchHandler}></div>
        <div
          className="fas fa-bars"
          id="menu-btn"
          onClick={navbarHandler}
        ></div>
      </div>
      <div className="search-form" ref={searchRef}>
        <input type="search" placeholder="Explore..." id="search-box" />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>
    </header>
  );
};

export default Navbar;
