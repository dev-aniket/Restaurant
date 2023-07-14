import React from "react";
import aboutImg from "../assets/images/aboutImg.jpg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>About</span> Us
        </h1>

        {/* COLUMS  */}

        <div className="row">
          <div className="image">
            <img src={aboutImg} alt="about" />
          </div>
          <div className="content">
            <h3>The ultimate delight to start your day</h3>
            <p>
              We at Fork provide the best morning breakfast for the unstoppables. We are raipur based morning routine restaurant. Rise and indulge at our flavorful haven. From morning favorites to
              irresistible burgers and sandwiches, we serve culinary perfection
              in every bite. Experience the bliss of breakfast and the
              satisfaction of savory creations at our restaurant. Welcome to a
              world of delicious delight!
            </p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
