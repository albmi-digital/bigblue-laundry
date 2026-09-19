import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import Pickup from "@/components/home/Pickup";
import Process from "@/components/home/Process";
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

      <Pickup />

      <FinalCTA />

      <Contact />

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}