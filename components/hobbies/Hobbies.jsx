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
      className="container mx-auto px-4 xl:px-40 2xl:px-64"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="flex justify-center items-center md:flex-row flex-col-reverse text-white md:px-32">
        <div className="space-y-6 flex-1 px-4 md:px-0 mt-4 md:mt-0">
          <div
            className="text-[#FFDC23] text-3xl"
            style={{ fontWeight: "500" }}
          >
            ABOUT ME
          </div>
          <div className="text-sm text-[#CACACA]">
            We always provide the best for our clients in any case so that all
            their wishes can be realized and have a decent, comfortable and
            aesthetically pleassing place to live. Pleasing environment for the
            people using the space.
          </div>
        </div>
        <div className="flex justify-end items-center flex-1">
          <Image
            src={
              "https://tvline.com/wp-content/uploads/2024/03/mrbeast-amazon-prime.jpg?w=600&h=400&crop=1"
            }
            width={220}
            height={220}
            alt="me"
            className="rounded-full aspect-square object-cover cursor-pointer hover:scale-105 hover:transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
