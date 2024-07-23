"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Hobbies = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className="container mx-auto px-4 md:px-20 flex justify-center items-center flex-col"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center text-white md:w-[940px]">
        <div className="col-span-2 w-full order-2 md:order-1">
          <div className="space-y-4 px-4 md:px-0 mt-4 md:mt-0 md:w-[90%]">
            <div
              className="text-[#FFDC23] text-3xl md:text-4.5xl"
              style={{ fontWeight: "900" }}
            >
              About Me
            </div>
            <div
              className="text-sm text-[#CACACA] font-roboto"
              style={{ fontSize: "16px" }}
            >
              We always provide the best for our clients in any case so that all
              their wishes can be realized and have a decent, comfortable and
              aesthetically pleasing place to live. Pleasing environment for the
              people using the space.
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-end items-center ml-auto">
          <Image
            src={
              "https://tvline.com/wp-content/uploads/2024/03/mrbeast-amazon-prime.jpg?w=600&h=400&crop=1"
            }
            width={250}
            height={250}
            alt="me"
            className="rounded-full w-[256px] h-[256px] aspect-square object-cover cursor-pointer hover:scale-105 hover:transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
