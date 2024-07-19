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
    <main className="min-h-screen bg-black font-poppins">
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="mt-16">
        <Header />
      </div>
      <div id="feature" className="mt-24">
        <Thumbnails />
      </div>
      <div id="about" className="mt-24">
        <Hobbies />
      </div>
      <div id="results" className="mt-24">
        <Achievements />
      </div>
      <div id="work" className="mt-24">
        <Slider />
      </div>
      <div id="testimonials" className="mt-24">
        <Reviews />
      </div>
      <div id="faqs" className="mt-24">
        <FAQs />
      </div>
      <div id="contact" className="mt-24">
        <Contact />
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}
