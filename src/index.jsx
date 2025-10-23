import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Sections + Components
import { Navbar } from "./components/ui/Navbar";
import { HeroSection } from "./screens/BlueDuckV/sections/Section1/HeroSection";
import { ContactSection } from "./screens/BlueDuckV/sections/Section2/About";
import { NavigationSection } from "./screens/BlueDuckV/sections/Section3/Services";
import { ChooseUs } from "./screens/BlueDuckV/sections/Section4/ChooseUs";
import { PortfolioSection } from "./screens/BlueDuckV/sections/Section5/PortfolioSection";
import { ServicesSection } from "./screens/BlueDuckV/sections/Section6/ServicesSection";
import { CallToActionSection } from "./screens/BlueDuckV/sections/Section7/CallToActionSection";
import { TestimonialsSection } from "./screens/BlueDuckV/sections/Section8/Footer";
import { LogoSection } from "./components/ui/Logo";

const App = () => {
  return (
    <div className="bg-black flex flex-col items-center w-screen min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="bg-black overflow-hidden w-full max-w-[1440px] flex flex-col">

        <div className="relative h-[100vh]">
          {/* Section 1 */}
          <HeroSection />
        </div>

        {/* Logos */}
        <LogoSection />

        {/* Section 2 → 8 */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <ContactSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <NavigationSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <ChooseUs />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <PortfolioSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
          <ServicesSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
          <CallToActionSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
          <TestimonialsSection />
        </section>
      </div>
    </div>
  );
};

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
