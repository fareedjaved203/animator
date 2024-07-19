"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "./Form";

const Contact = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="container mx-auto px-4 md:px-20"
    >
      <div className="text-center space-y-4">
        <div
          className="text-3xl md:text-4.5xl text-[#FFDC23] font-semibold"
          style={{ fontWeight: "900" }}
        >
          Get in touch today!
        </div>
        <div className="text-white">Thank You!</div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
