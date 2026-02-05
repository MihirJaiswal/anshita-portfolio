import About from "@/components/About";
import Artwork from "@/components/Artwork";
import Captures from "@/components/Captures";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E8E8E6] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Captures />
      <Artwork />
      <Connect />
      <Footer />
    </main>
  );
}
