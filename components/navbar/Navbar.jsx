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
          <Image src={"/menuIcon.svg"} width={30} height={30} alt="menu-icon" />
          <nav
            class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hover:cursor-pointer "
            style={{ fontSize: "13px", fontWeight: "500" }}
          >
            <Link href="#home" class="mr-5 hover:underline ">
              Home
            </Link>
            <Link href="#work" class="mr-5 hover:underline">
              My Work
            </Link>
            <Link href="#feature" class="mr-5 hover:underline">
              Featured
            </Link>
            <Link
              href="#about"
              class="mr-5 hover:underline flex justify-center items-center space-x-1"
            >
              About Me
            </Link>
            <Link href="#testimonials" class="mr-5 hover:underline">
              Testimonials
            </Link>
            <Link href="#results" class="mr-5 hover:underline">
              Results
            </Link>
            <Link href="#faqs" class="mr-5 hover:underline">
              FAQs
            </Link>
          </nav>
          <button className="bg-blue-600 text-[#D9D9D9] text-center rounded-full px-10 py-3 text-nowrap">
            Contact Me
          </button>
        </div>
      </header>
      <HamburgerMenu />
    </>
  );
};

export default Navbar;
