import React from "react";
import { menu } from "./MenuData";

const Menu = () => {

  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          Our <span>Menu</span>
        </h1>

        {/* CART BOX'S  */}

        <div className="box-container">
          {menu.map((item, ind) => (
            <div className="box">
              <img src={item.img} alt="img" />
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
              <button className="btn">Order</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
