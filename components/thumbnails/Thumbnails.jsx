import React from "react";
import GridComponent from "./Grid";

const Thumbnails = () => {
  return (
    <div className="container mx-auto px-4 md:px-20 text-white">
      <div className="flex flex-col space-y-6 justify-center items-center">
        <div className="text-3xl md:text-5xl text-center text-[#e2b203]">
          Featured Thumbnails
        </div>
        <div className="w-1/2 text-center">
          I take pride in combining design and strategy that exceeds your
          expectations.
        </div>
        <div>Explore my featured thumbnails below!</div>
      </div>
      <div className="mt-20">
        <GridComponent />
      </div>
    </div>
  );
};

export default Thumbnails;
