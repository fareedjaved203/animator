import React from "react";
import { AiFillLike } from "react-icons/ai";
import { MdRemoveRedEye } from "react-icons/md";

const Achievements = () => {
  return (
    <div className="container mx-auto px-4 md:px-20 flex justify-center items-center">
      <div className="flex justify-center items-center flex-col md:flex-row w-3/4 space-y-4 md:space-y-0">
        <div className="space-y-6  flex-1 flex justify-center items-center flex-col">
          <div>
            <AiFillLike className="text-white" size={150} />
          </div>
          <div className="text-3xl text-[#e2b203]">100 Million+</div>
          <div className="text-white text-xl">Generated Subsribers</div>
        </div>
        <div className="space-y-6 flex-1 flex justify-center items-center flex-col">
          <div className="">
            <MdRemoveRedEye className="text-white" size={150} />
          </div>
          <div className="text-3xl text-[#e2b203]">5 Hundred+</div>
          <div className="text-white text-xl">Views</div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
