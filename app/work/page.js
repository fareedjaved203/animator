import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { Work } from "@/components/work/Work";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#041014]">
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div>
        <Header />
      </div>
      <div id="work" className="mt-40">
        <Work />
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
