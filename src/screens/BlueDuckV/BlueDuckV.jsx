import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { PortfolioSection } from "./sections/PortfolioSection/PortfolioSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";

export const BlueDuckV = () => {
  const logoData = [
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/deepseek-text-1.png",
      alt: "Deepseek text",
      className: "w-[151px] h-7 object-cover",
    },
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/coca-cola-logo-white-1.png",
      alt: "Coca cola logo white",
      className: "w-[87px] h-7 object-cover",
    },
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/adobe-express---file--7--1.png",
      alt: "Adobe express file",
      className: "w-[65px] h-[46px]",
    },
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/avidxchange-primarylogo-rgbh-1.png",
      alt: "Avidxchange",
      className: "w-[164px] h-7",
    },
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/adobe-express---file--6--1.png",
      alt: "Adobe express file",
      className: "w-[70px] h-[31px]",
    },
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/new-paypal-logo-white-png-horizontal-large-size-1-3.png",
      alt: "New paypal logo",
      className: "w-[93px] h-[25px] object-cover",
    },
    {
      src: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/xpay-preto-1.png",
      alt: "Xpay preto",
      className: "w-[70px] h-7 object-cover bg-white",
    },
  ];

  return (
    <div
      className="bg-black flex flex-col items-center w-screen min-h-screen"
      data-model-id="3816:7750"
    >
      <div className="bg-black overflow-hidden w-full max-w-[1440px] flex flex-col">
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <AboutUsSection />
        </section>

        <section className="w-full h-[758px] bg-[#c4c4c4] flex items-center justify-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] mb-12">
          <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[normal]">
            Placeholder for a video that will expand with animation
          </div>
        </section>

        <section className="w-full flex justify-center py-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] mb-24">
          <div className="flex items-center gap-[69px] opacity-80">
            {logoData.map((logo, index) => (
              <img
                key={`logo-${index}`}
                className={`${logo.className}`}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </section>

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
