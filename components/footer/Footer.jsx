import Link from "next/link";

const Footer = () => {
  return (
    <>
      <header
        class="container mx-auto pb-12 text-white font-inter flex justify-center items-center"
        style={{ fontSize: "13px", fontWeight: "500" }}
      >
        <div class="flex flex-nowrap flex-col md:w-2/3 justify-center md:flex-row items-center space-y-6 md:space-y-0">
          <Link href={"/"}>
            <div
              className="text-[#FFDC23] cursor-pointer"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              Musa.
            </div>
          </Link>

          <nav
            class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hover:cursor-pointer"
            style={{ fontSize: "16px", fontWeight: "400" }}
          >
            <Link href="/" class="mr-5 relative inline-block group ">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link href="/work" class="mr-5 relative inline-block group">
              My Work
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>

            <Link href="/#feature" class="mr-5 relative inline-block group">
              Featured
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>
            <Link href="/#about" class="mr-5 relative inline-block group">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>
            <Link
              href="/#testimonials"
              class="mr-5 relative inline-block group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>
            <Link href="/#results" class="mr-5 relative inline-block group">
              Results
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>
            <Link href="/#faqs" class="mr-5 relative inline-block group">
              FAQs
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-450 ease-in-out"></span>
            </Link>
          </nav>
          <Link href={"/#contact"}>
            <button
              class="border-2 border-[#FFDC23] bg-[#FFDC23] text-black text-center rounded-lg px-8 py-3 text-nowrap"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              Contact us
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Footer;
