import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import FinalCTA from "@/components/home/FinalCTA";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Pickup from "@/components/home/Pickup";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import Services from "@/components/home/Services";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Services />

      <Process />

      <About />

      <Testimonials />

      {/* <Pickup /> */}


      <FinalCTA />

      <Contact />

      <Gallery />

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}