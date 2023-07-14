import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
        </div>
        <div class="links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div class="credit">
          <span>Fork Eats</span> | All Rights Reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
