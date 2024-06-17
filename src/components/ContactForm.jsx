import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const formElements = form.current.elements;
    const userName = formElements.user_name.value.trim();
    const userEmail = formElements.user_email.value.trim();
    const message = formElements.message.value.trim();

    if (!userName || !userEmail || !message) {
      setFormError("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm("service_yc4frqk", "template_bm97o5g", form.current, {
        publicKey: "aeFY6RH_mOH7nMKeJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormError("");
          setFormSuccess("Message sent successfully!");
          setTimeout(() => {
            setFormSuccess("");
          }, 5000);
          formElements.user_name.value = ""
          formElements.user_email.value = ""
          formElements.message.value = ""
        },
        (error) => {
          console.log("FAILED...", error.text);
          setFormError(
            "Failed to send message. Please try again or reach out to nguyenfrancis6@gmail.com."
          );
        }
      );
  };
  return (
    <div className="relative bg-blue-900 max-w-3xl min-w-60 h-[80vh] flex flex-col items-center mx-8 md:mx-auto my-14 p-10 gap-4 rounded-2xl text-white">
      <h1 className="font-bold text-4xl sm:text-5xl text-center">Let's Connect!</h1>
      {formError && (
        <div className="static phone:absolute text-sm phone:text-md phone:top-24 bg-red-500 text-white p-1 sm:p-2 rounded">
          {"⚠ " + formError}
        </div>
      )}
      {formSuccess && (
        <div className="static phone:absolute text-sm phone:text-md phone:top-24 bg-green-500 text-white p-2 rounded">
          {formSuccess}
        </div>
      )}
      <form
        className="flex flex-col w-full h-full justify-around"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col">
          <label className="text-xl mb-2">Name</label>
          <input
            className="border px-1 h-8 phone:h-12 rounded text-black text-xl focus:outline-slate-700"
            type="text"
            name="user_name"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl mb-2">Email</label>
          <input
            className="border px-1 h-8 phone:h-12 text-black rounded text-xl focus:outline-slate-700"
            type="email"
            name="user_email"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl mb-2">Message</label>
          <textarea
            className="border px-1 py-1 h-24 text-black rounded text-xl focus:outline-slate-700"
            name="message"
          />
        </div>
        <input
          className="border border-white max-w-full w-full mx-auto cursor-pointer rounded bg-blue-950 h-12 hover:opacity-60 active:opacity-30"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default ContactForm;
