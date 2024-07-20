import React from "react";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header
        className="hidden md:block text-white font-inter bg-black bg-opacity-80"
        style={{ fontSize: "13px", fontWeight: "500" }}
      >
        <div className="container mx-auto px-4 py-5 w-2/3 justify-center flex flex-nowrap flex-col md:flex-row items-center">
          <Link href={"/"}>
            <div
              className="text-[#FFDC23] cursor-pointer"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              Musa.
            </div>
          </Link>
          <nav
            className="font-roboto md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hover:cursor-pointer "
            style={{ fontSize: "16px", fontWeight: "400" }}
          >
            <Link href="/" className="mr-5 relative inline-block group ">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link href="/work" className="mr-5 relative inline-block group">
              My Work
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link href="/#feature" className="mr-5 relative inline-block group">
              Featured
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>
            <Link href="/#about" className="mr-5 relative inline-block group">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>
            <Link
              href="/#testimonials"
              className="mr-5 relative inline-block group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>
            <Link href="/#results" className="mr-5 relative inline-block group">
              Results
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>
            <Link href="/#faqs" className="mr-5 relative inline-block group">
              FAQs
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>
          </nav>
          <Link href={"/#contact"}>
            <button
              className="border-2 border-[#FFDC23] bg-[#FFDC23] text-black text-center rounded-lg px-8 py-3 text-nowrap"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              Contact us
            </button>
          </Link>
        </div>
      </header>
      <HamburgerMenu />
    </>
  );
};

export default Navbar;
