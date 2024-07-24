"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ContentLayout } from "../Layout/ContentLayout";

const Hobbies = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <ContentLayout>
      <div
        className="flex justify-center items-center flex-col"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="grid grid-cols-1 lg.5:grid-cols-3 place-items-center text-white w-full">
          <div className="col-span-2 w-full order-2 lg.5:order-1">
            <div className="space-y-4 lg.5:px-0 mt-4 lg.5:mt-0 lg.5:w-[90%]">
              <div
                className="text-[#FFDC23] text-4xl lg.5:text-4.5xl text-center lg.5:text-start"
                style={{ fontWeight: "900" }}
              >
                About Me
              </div>
              <div className="text-sm md:text-base text-[#CACACA] font-roboto text-center md:px-[132px] lg.5:px-0  lg.5:text-start">
                We always provide the best for our clients in any case so that
                all their wishes can be realized and have a decent, comfortable
                and aesthetically pleasing place to live. Pleasing environment
                for the people using the space.
              </div>
            </div>
          </div>
          <div className="order-1 lg.5:order-2 flex justify-center lg.5:justify-end items-center lg.5:ml-auto">
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
    </ContentLayout>
  );
};

export default Hobbies;
