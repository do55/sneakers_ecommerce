import "./contact.styles.scss";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isActive, setIsActive] = useState(false);
  const form = useRef();

  const handleClick = (event) => {
    setIsActive(true);
    resetForm();
  };

  const resetForm = (e) => {};

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7sx5i4j",
        "template_95krcsk",
        form.current,
        "1mZCx7jSJsJpKF7iX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsActive(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setIsActive(false);
          e.target.reset();
        }
      );
  };

  return (
    <div className="contact-container">
      <form className="formContact" ref={form} onSubmit={sendEmail}>
        <div className="contactForm">
          <input
            type="text"
            className="textInput"
            name="first_name"
            placeholder="Your name.."
          />

          <input
            type="text"
            className="textInput"
            name="last_name"
            placeholder="Your last name.."
          />

          <select className="textInput" name="country">
            <option value="Poland">Poland</option>
            <option value="Canada">Canada</option>
            <option value="USA">USA</option>
          </select>

          <textarea
            className="textInput"
            name="message"
            placeholder="Write something.."
            style={{ height: "200px" }}
          ></textarea>
        </div>
        <div>
          <input
            onClick={handleClick}
            type="submit"
            className={isActive ? "submitInput clicked" : "submitInput"}
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
