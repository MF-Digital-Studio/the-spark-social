import Hero from "@/src/components/sections/Hero";
import AboutUs from "@/src/components/sections/AboutUs";
import Services from "@/src/components/sections/Services";
import TalentDetail from "@/src/components/sections/TalentDetail";
import ServiceDetails from "@/src/components/sections/ServiceDetails";
import Works from "@/src/components/sections/Works";
import Brands from "@/src/components/sections/Brands";
import Footer from "@/src/components/sections/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Spark Social",
    "alternateName": ["thesparksocial", "thespark", "spark", "TheSpark", "Spark Social"],
    "url": "https://thesparksocial.com",
    "logo": "https://thesparksocial.com/favicon.png",
    "description": "Creative digital agency specializing in advertisement, film production, and talent management."
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative">
        <Hero />
      </div>
      <div className="relative -mt-[1px] z-10">
        <AboutUs />
      </div>
      <div className="relative -mt-[1px] z-10">
        <Services />
      </div>
      <div className="relative -mt-[1px] z-10">
        <TalentDetail />
      </div>
      <div className="relative -mt-[1px] z-10">
        <ServiceDetails />
      </div>
      {/* <div className="relative -mt-[1px] z-10">
        <Creators />
      </div> */}
      <div className="relative -mt-[1px] z-10">
        <Works />
      </div>
      <div className="relative -mt-[1px] z-10">
        <Brands />
      </div>
      <div className="relative -mt-[1px] z-10">
        <Footer />
      </div>
    </main>
  );
}
