import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ChooseUs = () => {
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
    <section className="w-full h-auto bg-white">
      <div className="max-w-[1274px] mx-auto px-4 relative">
        {/* Vertical dividers (behind heading & cards, desktop only) */}
        <div className="absolute top-0 left-0 w-full h-full hidden sm:block pointer-events-none z-0">
          <div className="flex h-full w-full">
            {Array.from({ length: featureCards.length }).map((_, i) => (
              <div key={i} className="flex-1 relative">
                <div className="absolute inset-0 flex justify-center">
                  <div className="w-1 h-full bg-black/100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <h2 className="relative z-10 text-center pt-20 mb-12 sm:mb-4 font-normal text-black text-lg md:text-lg tracking-wider">
          WHY CHOOSE BLUE DUCK
        </h2>

        {/* Cards */}
        <div className="relative flex flex-col sm:flex-row items-stretch justify-between gap-8 z-10 pb-32">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="flex-1 max-w-full sm:max-w-[300px] h-[280px] bg-[#040404] border border-[#ffffff1a] hover:scale-105 transition-transform duration-300 shadow-lg flex flex-col"
            >
              <CardContent className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                <img
                  className={`${card.imageClasses} mb-6`}
                  alt={card.title}
                  src={card.image}
                />
                <h3 className="font-normal text-white text-lg sm:text-xl md:text-2xl leading-snug mb-3">
                  {card.title}
                </h3>
                <p className="font-light text-[#ffffffc2] text-sm md:text-base leading-normal">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
