import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Footer from "./Footer";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", color: "" });

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  const sendEmail = (e) => {
    console.log("FORM DETAILS", form);
    e.preventDefault();
    for (let i = 0; i < 3; i++) {
      if (form.current[i].value === "") {
        setStatus({ message: "Enter all the fields", color: "red" });

        return;
      }
    }
    if (!ValidateEmail(form.current[1].value)) {
      setStatus({ message: "Enter valid email", color: "red" });

      return;
    }

    emailjs
      .sendForm(
        "service_j3enzha",
        "template_yo3z8w8",
        form.current,
        "MxMT2ua4MN1Wqs1FZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setStatus({ message: "Message send successfully", color: "green" });
        },
        (error) => {
          setStatus({
            message: "There was an error while sending the message",
            color: "red",
          });

          console.log(error.text);
        }
      );
  };
  return (
    <div className="section" id="contact">
      <div className="flex justify-center flex-col flex-wrap gap-10 ">
        <div>
          <h1 className="text-center">Contact</h1>
          <p className="text-center">Get in Touch with me</p>
        </div>
        <div className="w-1/2 m-auto h-fit">
          <h1 className="text-center mb-10">Write your message</h1>
          <form
            ref={form}
            action=""
            className="grid-root h-16"
            onSubmit={sendEmail}
          >
            <div className="relative mb-16">
              <label
                htmlFor="name"
                className="absolute -top-3 left-5 z-10 p-1 text-small-font-size bg-body-color"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Insert your name"
                className="bg-body-color absolute left-0 top-0  h-full w-full z-1 outline-none bg-none border-solid border-2 border-input-border text-text-color p-6 rounded-xl"
              />
            </div>
            <div className="relative mb-16">
              <label
                htmlFor="email"
                className="absolute -top-3 left-5 z-10 p-1 text-small-font-size bg-body-color"
              >
                Email
              </label>
              <input
                placeholder="Insert your email"
                type="email"
                name="email"
                className="bg-body-color absolute left-0 top-0 h-full w-full z-1 outline-none bg-none border-solid border-2 border-input-border text-text-color p-6 rounded-xl"
              />
            </div>
            <div className="relative  h-44">
              <label
                htmlFor="message"
                className="absolute -top-3 left-5 z-10 p-1 text-small-font-size bg-body-color"
              >
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                cols={35}
                rows={15}
                type="text"
                name="message"
                className="block resize-none bg-body-color absolute left-0 top-0 h-44 w-full z-1 outline-none bg-none border-solid border-2 border-input-border text-text-color p-6 rounded-xl"
              />
            </div>

            <button
              className="flex button-send button--flex w-5/12 gap-1 large:p-4 "
              // change this if required
              type="submit"
            >
              Send Message
              <svg
                className="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                />
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                />
              </svg>
            </button>
            <p style={{ color: `${status.color}` }}>{status.message}</p>
            <Footer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
