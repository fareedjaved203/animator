import React from "react";

const Form = () => {
  return (
    <div className="md:w-1/3">
      <div className="flex flex-col space-y-4">
        <div className="space-y-2 flex flex-col">
          <label className="text-[#FFDC23]">Name</label>
          <input
            className="text-[#818181] bg-black px-3 py-3 border border-[#FFDC23] rounded-lg focus:outline-none"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="space-y-2 flex flex-col">
          <label className="text-[#FFDC23]">Email</label>
          <input
            className="text-[#818181] bg-black px-3 py-3 border border-[#FFDC23] rounded-lg focus:outline-none"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <label className="text-[#FFDC23]">Message</label>
        <textarea
          className="w-full text-[#818181] bg-black px-3 py-2 border border-[#FFDC23] rounded-lg focus:outline-none"
          rows="5"
          placeholder="Message"
        ></textarea>
      </div>
      <button className="mt-4 w-full bg-[#FFDC23] text-black text-center px-4 py-3 rounded-lg focus:outline-none font-bold">
        Send Message
      </button>
    </div>
  );
};

export default Form;
