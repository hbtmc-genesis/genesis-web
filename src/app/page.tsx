import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMission from "@/components/AboutMission";
import Council from "@/components/Council";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-genesis-darker text-genesis-light selection:bg-genesis-orange/30">
      <Navbar />
      <Hero />
      <AboutMission />
      <Council />
      <Contact />
      <Footer />
    </main>
  );
}
