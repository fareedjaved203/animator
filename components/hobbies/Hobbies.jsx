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
      className="container mx-auto px-4 md:px-20"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="400"
      data-aos-offset="0"
    >
      <div className="flex justify-center items-center md:flex-row flex-col flex-col-reverse text-white md:px-32">
        <div className="space-y-6 flex-1 px-4 md:px-0 mt-4 md:mt-0">
          <div className="text-[#e2b203] text-3xl md:text-5xl">
            Welcome, I&#8217;m glad you&#8217;re here!
          </div>
          <div>
            Hey, I&#8217;m Dill! I&#39;m a 20-year-old YouTube Thumbnail
            Designer and Strategist with over 7 years of experience in this
            dynamic industry. I&#8217;ve had the opportunity to work with some
            of the most prominent creators on Youtube and I&#8217;ve mastered
            the art of crafting strategically designed thumbnails that drive
            results.{" "}
          </div>
        </div>
        <div className="flex justify-end items-center flex-1">
          <Image
            src={
              "https://tvline.com/wp-content/uploads/2024/03/mrbeast-amazon-prime.jpg?w=600&h=400&crop=1"
            }
            width={250}
            height={250}
            alt="me"
            className="rounded-full aspect-square object-cover cursor-pointer hover:scale-105 hover:transition-all p-1 border border-2 border-[#e2b203]"
          />
        </div>
      </div>

      <div className="mt-16 flex justify-center items-center md:flex-row md:flex-row-reverse flex-col flex-col-reverse text-white md:px-32">
        <div className="space-y-6 flex-1 px-4 md:px-0 mt-4 md:mt-0 ">
          <div className="text-[#e2b203] text-3xl md:text-5xl">
            I love what I do!
          </div>
          <div>
            My passion lies in helping creators shine on YouTube by creating
            eye-catching, click-worthy thumbnails. Trust in my expertise, and
            together, we&#39;ll elevate your content and make your channel a
            standout success. Let&#39;s bring your vision to life, one thumbnail
            at a time.
          </div>
        </div>
        <div className="flex justify-start items-center flex-1 ">
          <Image
            src={
              "https://d3so17pif08pib.cloudfront.net/Pictures/480xany/6/4/3/28643_mr_beast2_17650.jpg"
            }
            width={250}
            height={250}
            alt="me"
            className="rounded-full aspect-square object-cover cursor-pointer hover:scale-105 hover:transition-all p-1 border border-2 border-[#e2b203]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
