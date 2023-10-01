import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Helmet } from "react-helmet";

const EmailContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yus7ygk",
        "template_1ckwa4d",
        form.current,
        "UITE3JKvBqj88ifTh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex items-center justify-center">
      <Helmet>
        <title>Contact - Sojib</title>
      </Helmet>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col">
          <label className="font-bold">Name</label>
          <input
          placeholder="Your Name"
            className="input text-black input-bordered input-info w-full max-w-xs"
            type="text"
            name="user_name"
          />
          <label className="font-bold">Email</label>
          <input
          placeholder="Your Email"
            className="input text-black input-bordered input-info w-full max-w-xs"
            type="email"
            name="user_email"
          />
        </div>
        <label className="font-bold">Message</label>
        <textarea
        placeholder="Your Message"
          className="input text-black input-bordered input-info w-full h-28 max-w-xs"
          name="message"
        />
        <input
          className="btn btn-outline btn-accent"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default EmailContact;
