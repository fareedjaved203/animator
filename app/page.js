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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#041014]">
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
      <div id="work" className="mt-40">
        <Slider />
      </div>

      <div id="feature" className="mt-40">
        <Thumbnails />
      </div>
      <div id="about" className="mt-40">
        <Hobbies />
      </div>
      <div id="testimonials" className="mt-40">
        <Reviews />
      </div>
      <div id="results" className="mt-40">
        <Achievements />
      </div>
      <div id="faqs" className="mt-40">
        <FAQs />
      </div>
      <div className="mt-40">
        <Contact />
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </main>
  );
}
