import React from "react";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header
        class="hidden md:block text-white font-inter bg-black bg-opacity-80"
        style={{ fontSize: "13px", fontWeight: "500" }}
      >
        <div class="container mx-auto px-4 py-5 w-2/3 justify-center flex flex-nowrap flex-col md:flex-row items-center">
          <div className="text-[#FFDC23] text-2xl">Musa.</div>
          <nav
            class="font-roboto md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hover:cursor-pointer "
            style={{ fontSize: "13px", fontWeight: "500" }}
          >
            <Link href="/" class="mr-5 hover:underline ">
              Home
            </Link>
            <Link href="/work" class="mr-5 hover:underline">
              My Work
            </Link>
            <Link href="/#feature" class="mr-5 hover:underline">
              Featured
            </Link>
            <Link
              href="/#about"
              class="mr-5 hover:underline flex justify-center items-center space-x-1"
            >
              About Me
            </Link>
            <Link href="/#testimonials" class="mr-5 hover:underline">
              Testimonials
            </Link>
            <Link href="/#results" class="mr-5 hover:underline">
              Results
            </Link>
            <Link href="/#faqs" class="mr-5 hover:underline">
              FAQs
            </Link>
          </nav>
          <Link href={"/work"}>
            <button
              class="border-2 border-[#FFDC23] bg-[#FFDC23] text-[#FFDC23] text-black text-center rounded-lg px-8 py-3 text-nowrap font-bold"
              style={{ fontSize: "14px" }}
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
