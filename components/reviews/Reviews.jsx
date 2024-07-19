"use client";
import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import clientReviews from "./reviews.json";
import "./reviews.css";
import Stars from "./Stars";

const Reviews = () => {
  const [toggle, setToggle] = useState(false);
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
      <div className="flex justify-center items-center text-center w-full text-4xl font-semibold text-[#FFDC23] mb-20">
        <div className="w-3/4">Client Reviews</div>
      </div>

      <div
        className="scroller-reviews text-white"
        data-direction="right"
        data-speed="slow"
      >
        <div className="scroller__inner-reviews p-2">
          {clientReviews.map((review) => (
            <div
              key={review.id}
              className={`flex flex-col space-y-3 overflow-auto w-80 space-x-4 mb-8 p-4 pl-0 bg-black rounded-xl h-56 border border-white cursor-pointer`}
            >
              <div className="p-2 px-3">
                <Stars />
              </div>
              <div className="text-xs mt-2 italic">"{review.review}"</div>

              <div className="flex justify-center items-center">
                <div className="flex-1">
                  <Image
                    src={review.image}
                    width={90}
                    height={90}
                    alt="me"
                    className="rounded-full w-16 h-16 aspect-square object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="text-md font-semibold">{review.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
