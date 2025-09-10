import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = () => {
  const featureCards = [
    {
      title: "Hybrid Partner",
      description: "Creative marketing + strategic consulting under one roof",
      image:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/3d-rendered-abstract-glass-rectangles-with-detailed-reflection-d-3.png",
      imageClasses: "w-[100px] h-[108px]",
    },
    {
      title: "AI-Native",
      description: "Smarter insights, faster execution",
      image:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/3d-rendered-abstract-glass-rectangles-with-detailed-reflection-d-1.png",
      imageClasses: "w-[85px] h-[92px]",
    },
    {
      title: "Minimal Fluff, Maximum ROI",
      description: "Outcomes you can measure",
      image:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/3d-rendered-abstract-glass-rectangles-with-detailed-reflection-d-2.png",
      imageClasses: "w-[103px] h-[110px]",
    },
    {
      title: "Built for Startups & Scale-Ups",
      description: "Fast-moving. Founder-friendly. Growth-focused.",
      image:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/3d-rendered-abstract-glass-rectangles-with-detailed-reflection-d.png",
      imageClasses: "w-[73px] h-[78px]",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-[1274px] mx-auto px-2 sm:px-4 relative">
        <div className="relative">
          <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] text-center mb-8 sm:mb-12 md:mb-16 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-lg sm:text-xl tracking-[0] leading-[normal]">
            WHY CHOOSE BLUE DUCK
          </h2>

          <div className="flex flex-col sm:flex-row sm:justify-between items-stretch gap-6 sm:gap-8 relative">
            {/* Vertical divider lines - hide on mobile */}
            <div className="absolute inset-0 hidden sm:flex justify-between pointer-events-none">
              <div className="w-px h-full bg-black" />
              <div className="w-px h-full bg-black" />
              <div className="w-px h-full bg-black" />
              <div className="w-px h-full bg-black" />
            </div>

            {featureCards.map((card, index) => (
              <Card
                key={index}
                className={`translate-y-[-1rem] animate-fade-up opacity-0 [--animation-delay:${200 + index * 200}ms] flex-1 max-w-full sm:max-w-[298px] h-[240px] sm:h-[271px] bg-[#040404] border border-solid border-[#ffffff12] backdrop-blur-[20.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20.5px)_brightness(100%)] hover:scale-105 transition-transform duration-300`}
              >
                <CardContent className="relative h-full p-0 flex flex-col">
                  <div className="flex justify-center pt-4 sm:pt-6">
                    <img
                      className={card.imageClasses + " max-w-[80px] sm:max-w-none h-auto"}
                      alt="Element rendered abstract"
                      src={card.image}
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-end px-4 sm:px-7 pb-5 sm:pb-7">
                    <h3 className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-lg sm:text-2xl text-center tracking-[0] leading-[normal] mb-2 sm:mb-4">
                      {card.title}
                    </h3>

                    <p className="[font-family:'Helvetica_Neue-Light',Helvetica] font-light text-[#ffffffc2] text-sm sm:text-base text-center tracking-[0] leading-[normal]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
