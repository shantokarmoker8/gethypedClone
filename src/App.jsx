import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Expertises from "./components/Expertises";
import Work from "./components/Work";
import Brands from "./components/Brands";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrolled={scrolled}
      />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Expertises />
        <Work />
        <Brands />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
