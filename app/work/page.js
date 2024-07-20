import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { Work } from "@/components/work/Work";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="sticky top-0 z-10">
        <Navbar />
      </div>
      <div className="mt-16">
        <Header />
      </div>
      <div id="work" className="mt-10">
        <Work />
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
