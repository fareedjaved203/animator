"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import slider from "./slider.json";

const Slider = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      class="scroll w-full"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
    >
      <div class="m-scroll-left space-x-2">
        {slider?.map((item) => (
          <div key={item?.id} className="content-slider">
            <Image
              width={150}
              height={150}
              layout="responsive"
              alt="image"
              className="rounded-full aspect-square object-cover cursor-pointer border border-2 border-blue-400"
              src={item?.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
