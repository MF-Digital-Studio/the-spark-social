import Hero from "@/src/components/sections/Hero";
import AboutUs from "@/src/components/sections/AboutUs";
import Services from "@/src/components/sections/Services";
import Works from "@/src/components/sections/Works";
import Brands from "@/src/components/sections/Brands";
import Footer from "@/src/components/sections/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Hero />
      <AboutUs />
      <Services />
      <Works />
      <Brands />
      <Footer />
    </main>
  );
}

