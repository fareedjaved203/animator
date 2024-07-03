"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LeftHorizontalScroll from "./LeftHorizontalScroll";
import RightHorizontalScroll from "./RightHorizontalScroll";
import LeftTwo from "./LeftTwo";
import RightTwo from "./RightTwo";
import ContactBtn from "./ContactBtn";

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
      <ContactBtn />
    </div>
  );
};

export default Header;
