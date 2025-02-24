import "./Contact.css";
import message from "../assets/msg-icon.png";
import mail from "../assets/mail-icon.png";
import phone from "../assets/phone-icon.png";
import location from "../assets/location-icon.png";
import arrow from "../assets/white-arrow.png";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fbccd25c-60e1-4cbc-92fa-7c78dfdbd04e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact container">
      <div className="send">
        <h3>
          Send us a message <img src={message} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <p>
          <img src={mail} alt="" />
          Contact@Shubham.dev
        </p>
        <p>
          <img src={phone} alt="" />
          +919637165554
        </p>
        <p className="add">
          <img src={location} alt="" />
          Plot no. 14, Audumber Colony B, Karve Nager, Pune
        </p>
      </div>
      <div className="form">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input
            type="number"
            name=""
            id=""
            placeholder="Enter your phone number"
            required
          />
          <label>Your Mail</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your mail id"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="btn dark-btn">
            submit <img src={arrow} alt="" />
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};
export default Contact;
