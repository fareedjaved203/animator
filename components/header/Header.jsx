"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import LeftHorizontalScroll from "./LeftHorizontalScroll";
import ContactBtn from "./ContactBtn";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="relative">
      <div className="mb-6">
        <ContactBtn />
      </div>

      {pathname == "/" && (
        <>
          <div
            className="flex flex-col"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div>
              <LeftHorizontalScroll />
            </div>
          </div>

          <div className="flex space-x-4 justify-center items-center mt-6">
            <Link href={"/work"}>
              <button
                className="border-2 border-[#FFDC23] text-[#FFDC23] text-[#D9D9D9] text-center rounded-lg px-8 py-3 text-nowrap font-semibold"
                style={{ fontSize: "18px" }}
              >
                My Work
              </button>
            </Link>
            <Link href={"#contact"}>
              <button className="bg-[#FFDC23] text-black text-center rounded-lg px-6 py-3 text-nowrap flex space-x-2 justify-center items-center">
                <div className="font-bold" style={{ fontSize: "18px" }}>
                  Contact
                </div>
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 0.470612V1.97061H12.9425L0.5 14.4131L1.5575 15.4706L14 3.02811V12.4706H15.5V0.470612H3.5Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
