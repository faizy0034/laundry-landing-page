import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Pricing from "./components/Pricing/Pricing"
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp/FloatingWhatsApp";

function App() {

   useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
