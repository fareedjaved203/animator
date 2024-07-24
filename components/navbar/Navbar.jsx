import React from "react";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="container hidden min-[900px]:block text-white font-inter bg-opacity-80 h-[82px]">
        <div className="mx-auto py-5 w-full max-w-[1040px] justify-center flex flex-nowrap flex-col md:flex-row items-center">
          <Link href={"/"}>
            <div
              className="text-[#FFDC23] cursor-pointer"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              Musa.
            </div>
          </Link>
          <nav className="font-roboto font-normal md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hover:cursor-pointer space-x-6">
            <Link
              href="/"
              className="relative inline-block group font-normal text-[#CACACA] hover:text-white active:text-white hover:font-normal"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link
              href="/work"
              className="relative inline-block group font-normal hover:font-normal text-[#CACACA] hover:text-white active:text-white"
            >
              My Work
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link
              href="/#feature"
              className="relative inline-block group font-normal hover:font-normal text-[#CACACA] hover:text-white active:text-white"
            >
              Featured
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link
              href="/#about"
              className="relative inline-block group font-normal hover:font-normal text-[#CACACA] hover:text-white active:text-white"
            >
              About Me
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link
              href="/#testimonials"
              className="relative inline-block group font-normal hover:font-normal text-[#CACACA] hover:text-white active:text-white"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link
              href="/#results"
              className="relative inline-block group font-normal hover:font-normal text-[#CACACA] hover:text-white active:text-white"
            >
              Results
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link
              href="/#faqs"
              className="relative inline-block group font-normal hover:font-normal text-[#CACACA] hover:text-white active:text-white"
            >
              FAQs
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>
          </nav>

          <Link href={"/#contact"}>
            <button
              className="border-2 border-[#FFDC23] bg-[#FFDC23] text-black rounded-lg flex justify-center items-center text-nowrap h-[50px] w-[115px]"
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
