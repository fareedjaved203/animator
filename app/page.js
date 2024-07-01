import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import Slider from "@/components/content slider/Slider";
import Thumbnails from "@/components/thumbnails/Thumbnails";
import Hobbies from "@/components/hobbies/Hobbies";
import Reviews from "@/components/reviews/Reviews";
import FAQs from "@/components/FAQs/FAQs";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div>
        <Header />
      </div>
      <div className="mt-40">
        <Slider />
      </div>
      <div className="mt-40">
        <Thumbnails />
      </div>
      <div className="mt-40">
        <Hobbies />
      </div>
      <div className="mt-40">
        <Reviews />
      </div>
      <div className="mt-40">
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
