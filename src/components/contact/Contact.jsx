import { useState, useRef } from "react";
import "./contact.scss";
import EmailJS from "emailjs-com";

export default function Contact() {
  const formRef = useRef();

  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState(false);
  

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);

    EmailJS.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_USER_ID
    )
      .then((result) => {
        if (result.text === "OK") {
          setStatus(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg"
          alt=""
        />
      </div>
      <div className="right">
        <h1>Contact.</h1>
        {status ? ( message &&
          <span>Successfully sent! Thank you for your email </span>
        ) : (
          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" name="user_email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        )}
      </div>
    </div>
  );
}
