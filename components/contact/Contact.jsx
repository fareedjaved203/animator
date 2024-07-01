import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 md:px-20">
      <div className="text-center">
        <div className="text-white">THANK YOU!</div>
        <div className="text-3xl text-[#e2b203]">Get in touch today!</div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
