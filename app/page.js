import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import Slider from "@/components/content slider/Slider";
import Thumbnails from "@/components/thumbnails/Thumbnails";
import Hobbies from "@/components/hobbies/Hobbies";
import Reviews from "@/components/reviews/Reviews";
import FAQs from "@/components/FAQs/FAQs";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Achievements from "@/components/achievements/Achievements";
import CarouselSlider from "@/components/reviews/Test";

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-inter">
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="pt-20 min-h-[564px]">
        <Header />
      </div>
      <div id="feature" className=""></div>
      <div className="md:mt-32">
        <Thumbnails />
      </div>
      <div id="about" className=""></div>
      <div className="mt-20 md:mt-32">
        <Hobbies />
      </div>
      <div id="results" className=""></div>
      <div className="mt-20 md:mt-32">
        <Achievements />
      </div>
      <div id="work" className=""></div>
      <div className="mt-20 md:mt-32">
        <Slider />
      </div>
      <div id="testimonials" className=""></div>
      <div className="mt-20 md:mt-32">
        {/* <Reviews /> */}
        <CarouselSlider />
      </div>
      <div id="faqs" className=""></div>
      <div className="mt-20 md:mt-32">
        <FAQs />
      </div>
      <div id="contact" className=""></div>
      <div className="mt-20 md:mt-32">
        <Contact />
      </div>
      <div className="mt-20 md:mt-32">
        <Footer />
      </div>
    </main>
  );
}
