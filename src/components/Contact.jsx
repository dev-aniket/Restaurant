import React, { useState, useEffect } from "react";

const Contact = () => {
  const initialValus = { name: "", email: "", phone: "", message: "" };
  const [formValues, setFormValues] = useState(initialValus);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, [formErrors]);

  const validate = (values) => {
    const error = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.name) {
      error.name = "Your name is required";
    }

    if (!values.email) {
      error.email = "Your email is required";
    } else if (!emailRegex.test(values.email)) {
      error.email = "This is not a valid email";
    }

    if (!values.phone) {
      error.phone = "Your phone number is required";
    }

    if (!values.message) {
      error.message = "Your message is required";
    } else if (values.message.length < 5) {
      error.message = "please write something more";
    } else if (values.message.length > 50) {
      error.message = "Word limit exceeded";
    }

    return error;
  };

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          Contact<span> Us</span>
        </h1>

        {/* FORM CREATION  */}

        <div className="row">
          <iframe
            title="raipur"
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238042.93878855108!2d81.15241763506155!3d21.215151121453527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda204daf4bd%3A0x6354bc632f5c1bc6!2sThe%20Buzz%20Cafe!5e0!3m2!1sen!2sin!4v1689228649661!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            width="600"
            height="500"
          ></iframe>

          <form onSubmit={handleSubmit}>
            <h3>Reach Out to Us</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.name}</p>

            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.email}</p>

            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input
                type="number"
                name="phone"
                placeholder="Enter your phone"
                value={formValues.phone}
                onChange={handleChange}
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.phone}</p>

            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input
                type="text"
                name="message"
                placeholder="Enter your message"
                value={formValues.message}
                onChange={handleChange}
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.message}</p>

            <button className="btn">Contact Now</button>

            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <h1
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: "2rem",
                }}
              >
                Form Has Been Submitted
              </h1>
            ) : (
              <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
