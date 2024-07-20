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
    <main className="min-h-screen bg-black font-inter">
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="mt-16">
        <Header />
      </div>
      <div id="feature" className="mt-32">
        <Thumbnails />
      </div>
      <div id="about" className="mt-32">
        <Hobbies />
      </div>
      <div id="results" className="mt-32">
        <Achievements />
      </div>
      <div id="work" className="mt-32">
        <Slider />
      </div>
      <div id="testimonials" className="mt-32">
        <Reviews />
      </div>
      <div id="faqs" className="mt-32">
        <FAQs />
      </div>
      <div id="contact" className="mt-32">
        <Contact />
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
