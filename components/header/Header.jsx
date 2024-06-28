import React from "react";
import LeftHorizontalScroll from "./LeftHorizontalScroll";
import RightHorizontalScroll from "./RightHorizontalScroll";

const Header = () => {
  return (
    <div className="container mx-auto relative">
      <div className="opacity-20 w-full flex justify-start items-center flex-col space-y-4">
        <LeftHorizontalScroll />
        <RightHorizontalScroll />
        <LeftHorizontalScroll />
        <RightHorizontalScroll />
      </div>
      <div className="absolute top-36 w-full text-center">
        <div className="text-7xl text-[#e2b203]">
          Creating for
          <div>Creators.</div>
        </div>
        <div className="flex space-x-4 justify-center items-center mt-4">
          <button className="bg-blue-600 text-[#D9D9D9] text-center rounded-full px-10 py-3 text-nowrap">
            My Work
          </button>
          <button className="bg-blue-600 text-[#D9D9D9] text-center rounded-full px-10 py-3 text-nowrap">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
