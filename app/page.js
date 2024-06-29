import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";
import Slider from "@/components/content slider/Slider";
import Thumbnails from "@/components/thumbnails/Thumbnails";

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
    </main>
  );
}
