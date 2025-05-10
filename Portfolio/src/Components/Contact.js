import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

function Contact() {
  const form = useRef();
  const [inputUsername, setUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      inputUsername.trim() === "" ||
      inputMessage === "" ||
      inputEmail === ""
    ) {
      alert("Please enter valid input");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        console.log("SUCCESS!");
        setSubmitted(true);
      })
      .catch((error) => console.log("FAILED...", error.text));
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center  text-white">
      {!submitted ? (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
        >
          <input
            type="text"
            name="user_name"
            value={inputUsername}
            placeholder="Your Name"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border-b border-gray-400 bg-transparent text-white text-center focus:outline-none"
          />
          <input
            type="email"
            name="user_mail"
            value={inputEmail}
            placeholder="Your Email"
            onChange={(e) => setInputEmail(e.target.value)}
            className="w-full p-3 border-b border-gray-400 bg-transparent text-white text-center focus:outline-none"
          />
          <textarea
            name="message"
            value={inputMessage}
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border-b border-gray-400 bg-transparent text-white text-center focus:outline-none resize-none"
            rows="3"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      ) : (
        <h2 className="text-green-400 text-3xl font-bold">Thank You!</h2>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
