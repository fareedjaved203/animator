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
    <header className="block md:hidden px-4 py-2 bg-black">
      <div class="flex flex-row justify-between items-center">
        <div className="text-[#FFDC23] text-2xl">Musa.</div>

        <button
          onClick={toggleSidebar}
          className="md:hidden text-[#FFDC23] hover:text-blue focus:outline-none focus:text-black"
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
            className="fixed top-0 left-0 h-screen md:hidden"
            style={{
              zIndex: "20",
              backgroundColor: "white",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div
              className={
                isSidebarVisible
                  ? "flex flex-col w-64 bg-black h-full"
                  : "hidden md:flex flex-col w-64 bg-black"
              }
            >
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
                  <a class="mr-5 hover:text-gray-900 hover:underline ">Home</a>
                  <a class="mr-5 hover:text-gray-900 hover:underline">
                    My Work
                  </a>
                  <a class="mr-5 hover:text-gray-900 hover:underline">
                    Featured
                  </a>
                  <a class="mr-5 hover:text-gray-900 hover:underline flex justify-center items-center space-x-1">
                    About Me
                  </a>
                  <a class="mr-5 hover:text-gray-900 hover:underline">
                    Testimonials
                  </a>
                  <a class="mr-5 hover:text-gray-900 hover:underline">
                    Results
                  </a>
                  <a class="mr-5 hover:text-gray-900 hover:underline">FAQs</a>
                  <Link href={"/work"}>
                    <button class="border-2 border-[#FFDC23] bg-[#FFDC23] text-black text-center rounded-lg px-8 py-3 text-nowrap font-bold">
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
