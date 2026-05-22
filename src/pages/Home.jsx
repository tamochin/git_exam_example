import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import BestsellersSection from "../components/sections/BestsellersSection";
import ExploreSection from "../components/sections/ExploreSection";
import InspirationSection from "../components/sections/InspirationSection";
import PopularSection from "../components/sections/PopularSection";
import AboutSection from "../components/sections/AboutSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-stone-800">
      <Navbar />
      <main>
        <Hero />
        <BestsellersSection />
        <ExploreSection />
        <InspirationSection />
        <PopularSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
