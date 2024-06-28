import React from "react";
import LeftHorizontalScroll from "./LeftHorizontalScroll";
import RightHorizontalScroll from "./RightHorizontalScroll";

const Header = () => {
  return (
    <div
      className="container mx-auto w-full flex justify-center items-center flex-col space-y-4 text-white"
      data-aos
    >
      <LeftHorizontalScroll />
      <RightHorizontalScroll />
      <LeftHorizontalScroll />
      <RightHorizontalScroll />
    </div>
  );
};

export default Header;
