"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import slider from "./data.json";
import "./lefttwo.css";

const LeftTwo = () => {
  const scrollersRef = useRef([]);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller-left-two");
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
          ".scroller__inner-left-two"
        );
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div>
      <div
        className="scroller-left-two w-full"
        data-direction="left"
        data-speed="slow"
      >
        <div className="scroller__inner-left-two">
          {slider?.map((item) => (
            <div key={item?.id}>
              <Image
                width={250}
                height={150}
                alt="image"
                className="rounded-xl aspect-video object-cover cursor-pointer border border-2 border-blue-400"
                src={item?.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftTwo;
