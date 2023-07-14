import React, { useRef } from "react";
import logo from "../assets/images/Logo.png";
import { menu, cart } from "./MenuData";

const Home = () => {
  // NAVBAR

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

  // CART

  const cartRef = useRef();

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <>
      {/* NAVBAR  */}

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
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
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

        {/* CART ITEM  */}

        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index * Math.random()}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>{item.name}</h3>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
      </header>

      {/* HOME PAGE  */}

      <section className="home" id="home">
        <div className="content">
          <h3>
            Fresh <span>food in the </span> Morning
          </h3>
          <p>
            Here mornings come alive with a burst of flavor! Our delightful
            restaurant is a havenfor food lovers seeking a scrumptious start to
            their day.
          </p>
          <a href="#menu" className="btn">
            Explore Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
