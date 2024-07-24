"use client";
import React, { useState } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <header className={`block lg.5:hidden px-4 py-2 bg-black`}>
      <div className="flex flex-row justify-between items-center">
        <Link href={"/"}>
          <div
            className="text-[#FFDC23] cursor-pointer"
            style={{ fontSize: "16px", fontWeight: "700" }}
          >
            Musa.
          </div>
        </Link>

        <button
          onClick={toggleSidebar}
          className="lg.5:hidden text-[#FFDC23] hover:text-blue focus:outline-none focus:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 pointer-events:none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {isSidebarVisible && (
          <div
            className={`fixed top-0 left-0 h-screen lg.5:hidden 
      transition-transform duration-300 transform ${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      }`}
            style={{
              zIndex: "20",
              backgroundColor: "white",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div className="flex flex-col w-64 bg-black h-full">
              <div className="p-3 w-full flex justify-end">
                <button onClick={() => setSidebarVisibility(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                    fill="#FFDC23"
                  >
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                  </svg>
                </button>
              </div>

              <div
                className="flex flex-col flex-1 overflow-y-auto h-full"
                style={{ fontSize: "15px" }}
              >
                <nav className="font-roboto text-white flex flex-col space-y-4 flex-1 px-2 py-4 text-xl justify-start items-center bg-black">
                  <Link href="/" className="mr-5 relative inline-block group ">
                    Home
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
                  </Link>

                  <Link
                    href="/work"
                    className="mr-5 relative inline-block group"
                  >
                    My Work
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
                  </Link>

                  <Link
                    href="/#feature"
                    className="mr-5 relative inline-block group"
                  >
                    Featured
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
                  </Link>
                  <Link
                    href="/#about"
                    className="mr-5 relative inline-block group"
                  >
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
                  <Link
                    href="/#results"
                    className="mr-5 relative inline-block group"
                  >
                    Results
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
                  </Link>
                  <Link
                    href="/#faqs"
                    className="mr-5 relative inline-block group"
                  >
                    FAQs
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
                  </Link>
                  <Link href={"/#contact"}>
                    <button className="border-2 border-[#FFDC23] bg-[#FFDC23] text-black text-center rounded-lg px-8 py-3 text-nowrap font-bold">
                      Contact us
                    </button>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HamburgerMenu;
