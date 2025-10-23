// Logo.jsx
import React from "react";

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

export const LogoSection = () => {
  return (
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
              className={`max-h-[46px] w-auto object-contain ${
                logo.alt === "Xpay preto" ? "invert brightness-0" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
