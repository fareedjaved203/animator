import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <header
        class="container mx-auto pb-12 text-white font-inter flex justify-center items-center"
        style={{ fontSize: "13px", fontWeight: "500" }}
      >
        <div class="flex flex-nowrap flex-col md:w-2/3 justify-center md:flex-row items-center space-y-6 md:space-y-0">
          <div className="text-[#FFDC23]">Musa.</div>

          <nav
            class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hover:cursor-pointer"
            style={{ fontSize: "13px", fontWeight: "500" }}
          >
            <a class="mr-5 hover:underline ">Home</a>
            <a class="mr-5 hover:underline">My Work</a>
            <a class="mr-5 hover:underline">Featured</a>
            <a class="mr-5 hover:underline flex justify-center items-center space-x-1">
              About Me
            </a>
            <a class="mr-5 hover:underline">Testimonials</a>
            <a class="mr-5 hover:underline">Results</a>
            <a class="mr-5 hover:underline">FAQs</a>
          </nav>
          <Link href={"/work"}>
            <button class="border-2 border-[#FFDC23] bg-[#FFDC23] text-[#FFDC23] text-black text-center rounded-lg px-8 py-3 text-nowrap font-bold">
              Contact us
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Footer;
