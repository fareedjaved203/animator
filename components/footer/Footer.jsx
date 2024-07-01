import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <header
        class="container mx-auto px-4 py-5 md:px-20 text-white font-inter bg-black"
        style={{ fontSize: "13px", fontWeight: "500" }}
      >
        <div class="flex flex-nowrap flex-col md:flex-row items-center space-y-6 md:space-y-0">
          <Image src={"/menuIcon.svg"} width={30} height={30} alt="menu-icon" />
          <nav
            class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hover:cursor-pointer "
            style={{ fontSize: "13px", fontWeight: "500" }}
          >
            <a class="mr-5 hover:underline ">Home</a>
            <a class="mr-5 hover:underline">My Work</a>
            <a class="mr-5 hover:underline">Featured</a>
            <a class="mr-5 hover:underline flex justify-center items-center space-x-1">
              About Me
            </a>
            <a class="mr-5 hover:underline">Testimonials</a>
            <a class="mr-5 hover:underline">Results</a>
            <a class="mr-5 hover:underline">FAQs</a>
          </nav>
          <button className="bg-blue-600 text-[#D9D9D9] text-center rounded-full px-10 py-3 text-nowrap">
            Contact Me
          </button>
        </div>
      </header>
    </>
  );
};

export default Footer;
