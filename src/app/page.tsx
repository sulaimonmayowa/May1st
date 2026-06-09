import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import HowIWork from "@/components/HowIWork";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <SelectedWork />
      <HowIWork />
      <Testimonials />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
