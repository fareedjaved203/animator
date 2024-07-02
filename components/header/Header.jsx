"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LeftHorizontalScroll from "./LeftHorizontalScroll";
import RightHorizontalScroll from "./RightHorizontalScroll";
import LeftTwo from "./LeftTwo";
import RightTwo from "./RightTwo";

const Header = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="relative">
      <div
        className="flex flex-col"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <div className="opacity-20">
          <LeftHorizontalScroll />
          <RightHorizontalScroll />
          <LeftTwo />
          <RightTwo />
        </div>
      </div>
      <div class="absolute top-36 w-full text-center animate-fade-in animation-delay-1000">
        <div class="text-7xl text-[#e2b203]">
          Creating for
          <div>Creators.</div>
        </div>
        <div class="flex space-x-4 justify-center items-center mt-4">
          <button class="bg-blue-600 text-[#D9D9D9] text-center rounded-full px-10 py-3 text-nowrap">
            My Work
          </button>
          <button class="bg-blue-600 text-[#D9D9D9] text-center rounded-full px-10 py-3 text-nowrap">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
