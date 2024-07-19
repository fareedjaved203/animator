import React from "react";

const Form = () => {
  return (
    <div className="md:w-1/4">
      <div className="flex flex-col space-y-4">
        <input
          className="text-[#818181] bg-black px-3 py-3 border border-[#FFDC23] rounded-lg focus:outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          className="text-[#818181] bg-black px-3 py-3 border border-[#FFDC23] rounded-lg focus:outline-none"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="mt-4">
        <textarea
          className="w-full text-[#818181] bg-black px-3 py-2 border border-[#FFDC23] rounded-lg focus:outline-none"
          rows="5"
          placeholder="Message"
        ></textarea>
      </div>
      <button className="mt-4 w-full bg-[#FFDC23] text-black text-center px-4 py-3 rounded-lg focus:outline-none">
        Send Message
      </button>
    </div>
  );
};

export default Form;
