import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ResearchSection from "./components/ResearchSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <Navbar />
      <main className="min-h-screen bg-white w-full overflow-x-hidden">
        <div id="home" className="-mt-8 sm:-mt-12 md:-mt-14 lg:-mt-16">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="research">
          <ResearchSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
