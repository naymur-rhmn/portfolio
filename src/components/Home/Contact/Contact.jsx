import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import toast from "react-hot-toast";
//emailjs
import emailjs from "@emailjs/browser";
import SectionTitle from "../SectionTitle/SectionTitle";

const Contact = () => {
  const [result, setResult] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_coj52h3",
        "template_s310f8v",
        form.current,
        "fwUsdkE743MoDcsFn"
      )
      .then(
        (result) => {
          form.current.reset();
          setResult(true);
          toast("Success!! You will get reply soon!");
        },
        (error) => {
          setResult(false);
          setError(true);
        }
      );
    setTimeout(() => {
      setResult(false);
      setError(false);
    }, 3000);
  };

  return (
    <Element name="contact" className="section">
      <section className="bg-bg1">
        <div className="max-w-screen-xl flex items-center justify-center min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-78px)] mx-auto px-10 md:px-32  py-16 md:py-32">
          <div className="w-full">
            <div>
              <SectionTitle
                title="Contact"
                subtitle="I'd love to hear from you!"
              />
            </div>
            <div className="mt-16">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-16"
              >
                {/* first row */}
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="flex flex-col">
                    <label className="text-white pb-2" htmlFor="text">
                      Your name <span className="text-brand1">*</span>
                    </label>
                    <input
                      className="custom-input bg-transparent border-b border-brand1 outline-none text-gray-300 pt-2 pb-1"
                      type="text"
                      name="user_name"
                      id="text"
                      placeholder="Enter Your Name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white   pb-2" htmlFor="email">
                      Your email <span className="text-brand1">*</span>
                    </label>
                    <input
                      className="custom-input  pt-2 pb-1 bg-transparent border-b text-gray-300 border-brand1 outline-none"
                      type="email"
                      name="user_email"
                      id="email"
                      placeholder="Enter Your email"
                      required
                    />
                  </div>
                </div>
                {/* second row */}
                <div className="flex flex-col flex-1">
                  <label className="text-white   pb-2" htmlFor="message">
                    Your message <span className="text-brand1">*</span>
                  </label>
                  <textarea
                    className="custom-input bg-transparent border-b border-brand1 outline-none text-gray-300"
                    name="message"
                    id="message"
                    placeholder="Enter your needs"
                    rows="4"
                    required
                  ></textarea>
                  <div className="flex justify-center mt-12">
                    <button
                      className="bg-brand1 hover:bg-opacity-90 hover:transition text-bg1 rounded-full button-u px-6 py-2 md:py-3 focus:outline-none active:outline-none"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
