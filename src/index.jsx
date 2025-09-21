import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Sections + Components
import { Navbar } from "./components/ui/Navbar";
import { AboutUsSection } from "./screens/BlueDuckV/sections/Section1/HeroSection";
import { ContactSection } from "./screens/BlueDuckV/sections/Section2/About";
import { NavigationSection } from "./screens/BlueDuckV/sections/Section3/Services";
import { HeroSection } from "./screens/BlueDuckV/sections/Section4/ChooseUs";
import { PortfolioSection } from "./screens/BlueDuckV/sections/Section5/PortfolioSection";
import { ServicesSection } from "./screens/BlueDuckV/sections/Section6/ServicesSection";
import { CallToActionSection } from "./screens/BlueDuckV/sections/Section7/CallToActionSection";
import { TestimonialsSection } from "./screens/BlueDuckV/sections/Section8/Footer";

const App = () => {
  const logoData = [
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/deepseek-text-1.png",
      alt: "Deepseek text",
    },
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/coca-cola-logo-white-1.png",
      alt: "Coca cola logo white",
    },
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/adobe-express---file--7--1.png",
      alt: "Adobe express file",
    },
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/avidxchange-primarylogo-rgbh-1.png",
      alt: "Avidxchange",
    },
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/adobe-express---file--6--1.png",
      alt: "Adobe express file",
    },
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/new-paypal-logo-white-png-horizontal-large-size-1-3.png",
      alt: "New paypal logo",
    },
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/xpay-preto-1.png",
      alt: "Xpay preto",
    },
  ];

  return (
    <div className="bg-black flex flex-col items-center w-screen min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="bg-black overflow-hidden w-full max-w-[1440px] flex flex-col">
        {/* Section 1 */}
        <AboutUsSection />

        {/* Logos */}
        <section className="w-full flex justify-center py-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] mb-24">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-80 px-6">
            {logoData.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex items-center justify-center max-h-[46px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`max-h-[46px] w-auto object-contain ${logo.alt === "Xpay preto" ? "invert brightness-0" : ""
                    }`}
                />
              </div>
            ))}
          </div>
        </section>


        {/* Section 2 → 8 */}
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <ContactSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <NavigationSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <HeroSection />
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
