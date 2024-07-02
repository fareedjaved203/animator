"use client";
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clientReviews from "./reviews.json";
import "./reviews.css";

const Reviews = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const scrollersRef = useRef([]);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller-reviews");
    scrollersRef.current = Array.from(scrollers);

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollersRef.current.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(
          ".scroller__inner-reviews"
        );
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", false);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="flex justify-center items-center text-center w-full text-4xl md:text-5xl text-[#e2b203] mb-20">
        <div className="w-3/4">What Clients have to say</div>
      </div>

      <div
        className="scroller-right-two text-white"
        data-direction="right"
        data-speed="slow"
      >
        <div className="scroller__inner-right-two p-2">
          {clientReviews.map((review) => (
            <div
              key={review.id}
              className="w-80 space-x-4 mb-8 p-4 pl-0 bg-gray-800 rounded-xl h-56 border border-blue-400 cursor-pointer hover:scale-105 hover:transition-all hover:duration-300 duration-300"
            >
              <div className="flex space-x-4 pl-4">
                <div className="flex-1">
                  <Image
                    src={review.image}
                    width={120}
                    height={120}
                    alt="me"
                    className="rounded-full aspect-square object-cover border border-2 border-blue-400"
                  />
                </div>
                <div className="flex-grow">
                  <div className="text-lg font-semibold">{review.name}</div>
                  <span className="mt-1 text-md text-blue-300 font-semibold">
                    {review.role}
                  </span>{" "}
                </div>
              </div>
              <div className="text-sm mt-2 line-clamp-4">{review.review}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
