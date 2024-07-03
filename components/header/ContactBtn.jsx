"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ContactBtn = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname == "/" ? (
        <div class="absolute top-36 w-full text-center animate-fade-in animation-delay-1000">
          <div class="text-7xl text-[#e2b203]">
            Creating for
            <div>Creators.</div>
          </div>
          <div class="flex space-x-4 justify-center items-center mt-4">
            <button class="bg-blue-600 text-[#D9D9D9] text-center rounded-full px-10 py-3 text-nowrap">
              My Work
            </button>
            <button class="bg-blue-600 text-[#D9D9D9] text-center rounded-full px-10 py-3 text-nowrap">
              Contact Me
            </button>
          </div>
        </div>
      ) : (
        <div class="flex justify-center items-center flex-col absolute top-36 w-full text-center animate-fade-in animation-delay-1000">
          <div class="text-7xl text-[#e2b203]">
            Where the Magic
            <div>Happens</div>
          </div>
          <div class=" flex space-x-4 justify-center items-center mt-4 text-white w-full 2xl:w-[20%] md:w-[37%]">
            Welcome to the heart of my creative journey. Below, you&#39;ll find
            a selection of my recent projects and works of art that represent my
            passion, dedication, and commitment to excellence. Each piece is a
            testament to the unique vision and creativity that define my craft.
          </div>
        </div>
      )}
    </>
  );
};

export default ContactBtn;
