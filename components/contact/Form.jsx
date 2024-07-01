import React from "react";

const Form = () => {
  return (
    <div className="md:w-1/4">
      <div className="flex flex-row space-x-4">
        <input
          className="w-1/2 px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="mt-4">
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          rows="5"
          placeholder="Message"
        ></textarea>
      </div>
      <button className="mt-4 w-full bg-blue-700 text-white text-center px-4 py-3 rounded-lg focus:outline-none">
        Send Message
      </button>
    </div>
  );
};

export default Form;
