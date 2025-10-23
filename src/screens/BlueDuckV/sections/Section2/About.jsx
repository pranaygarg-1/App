import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = () => {
  // const featureCards = [
  //   {
  //     title: "Launch With Impact",
  //     image:
  //       "https://c.animaapp.com/mf9h3e3wUYtRXO/img/spring-spiral-glass-abstract-geometry-3d-3d-illustration-render-.png",
  //     alt: "Spring spiral glass",
  //     background:
  //       "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1148-1.svg",
  //   },
  //   {
  //     title: "Grow Through \ndata-driven Marketing",
  //     image:
  //       "https://c.animaapp.com/mf9h3e3wUYtRXO/img/chrome-y2k-abstract-element-png-template-1.png",
  //     alt: "Chrome abstract",
  //     background:
  //       "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1148.svg",
  //   },
  //   {
  //     title: "Scale Using Sharp Consulting Frameworks",
  //     image:
  //       "https://c.animaapp.com/mf9h3e3wUYtRXO/img/chrome-y2k-abstract-element-png-template-3.png",
  //     alt: "Chrome abstract",
  //     background:
  //       "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1148-2.svg",
  //   },
  // ];

  const featureCards = [
    {
      title: "Launch With Impact",
      description:
        "From GTM plans to first impressions, we turn smart ideas into bold market entries that stand out — not blend in.",
      image:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/spring-spiral-glass-abstract-geometry-3d-3d-illustration-render-.png",
      alt: "Spring spiral glass",
      background:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1148-1.svg",
    },
    {
      title: "Grow Through \ndata-driven Marketing",
      description:
        "Campaigns, content, and creative powered by insight — not guesswork. We make marketing that sells, not just shouts.",
      image:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/chrome-y2k-abstract-element-png-template-1.png",
      alt: "Chrome abstract",
      background:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1148.svg",
    },
    {
      title: "Scale Using Sharp Consulting Frameworks",
      description:
        "Proven growth systems and strategic thinking that move beyond slides and into measurable outcomes.",
      image:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/chrome-y2k-abstract-element-png-template-3.png",
      alt: "Chrome abstract",
      background:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1148-2.svg",
    },
  ];

  return (
    <section className="w-full max-w-[1242px] mx-auto px-4 py-12 sm:py-16 relative mb-16 md:mb-28">
      <div className="w-full">
        {/* WHO WE ARE */}
        <div className="translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="text-center mb-6 sm:mb-[30px]">
            <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#787878] text-base sm:text-xl tracking-[0] leading-[normal]">
              WHO WE ARE
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="text-center mb-6 sm:mb-[27px] px-4 sm:px-10">
            <h2 className="font-normal text-white text-[32px] sm:text-[48px] md:text-[68px] leading-tight sm:leading-[normal]">
              <span className="font-thin italic">Not Your</span>
              <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                {" "}Typical Marketing Agency
              </span>
              <span className="[font-family:'Helvetica_Neue-Italic',Helvetica] italic">.</span>
              <br />
              <span className="font-thin italic">Not Your</span>
              <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                {" "}Usual Consultants.
              </span>
            </h2>
          </div>
        </div>

        {/* Blue highlight text */}
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="flex justify-center mb-10 sm:mb-[76px] px-2">
            <div className="flex justify-center sm:justify-end">
              <div className="relative w-full max-w-[718px]">
                <p
                  className="relative font-light text-white text-sm sm:text-lg md:text-2xl text-center sm:text-right
                     leading-[20px] sm:leading-[28px] md:leading-[31.2px] m-0"
                >
                  At Blue Duck, we blend{" "}
                  <span className="relative inline-block align-middle">
                    {/* Blue highlight background that always matches text width & height */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-md -z-10
                         bg-[#1929f2] opacity-100"
                    />
                    {/* Text with adaptive padding so highlight has breathing room */}
                    <span className="relative px-2 sm:px-3 md:px-4 py-[2px]">
                      Storytelling, Strategy, and AI
                    </span>
                  </span>{" "}
                  to help brands:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        {/* <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-5 mb-16 md:mb-[120px] place-items-center">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="w-full max-w-[400px] h-[200px] bg-transparent border-none"
              >
                <CardContent className="p-0 relative h-full">
                  <img
                    className="absolute w-full h-[186px] top-0 left-0 object-cover"
                    alt="Rectangle"
                    src={card.background}
                  />
                  <div className="absolute top-5 left-4 sm:top-7 sm:left-8 w-[130px] sm:w-[156px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-base sm:text-lg md:text-2xl whitespace-pre-line leading-snug">
                    {card.title}
                  </div>
                  <img
                    className="absolute w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[152px] md:h-[152px] top-[80px] sm:top-[66px] left-[55%] sm:left-[220px] object-cover"
                    alt={card.alt}
                    src={card.image}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-5 mb-16 md:mb-[120px] place-items-center">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="group relative w-full max-w-[400px] h-[200px] bg-transparent border-none"
              >
                <CardContent className="p-0 relative h-full">
                  {/* Background image */}
                  <img
                    className="absolute w-full h-[186px] top-0 left-0 object-cover"
                    alt="Rectangle"
                    src={card.background}
                  />

                  {/* Text wrapper (for title + description swap) */}
                  <div 
                    className="absolute top-5 left-4 sm:top-7 sm:left-8 w-[55%] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white leading-snug">
                    {/* Title (visible by default, hides on hover) */}
                    <div 
                      className="text-base sm:text-lg md:text-2xl whitespace-pre-line transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:-translate-y-2">
                        {card.title}
                    </div>

                    {/* Description (hidden by default, shows on hover) */}
                    <div 
                      className="absolute top-0 left-0 text-sm sm:text-base md:text-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-500">
                          {card.description}
                    </div>
                  </div>

                  {/* Decorative image */}
                  <img
                    className="absolute w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[152px] md:h-[152px] top-[80px] sm:top-[66px] left-[55%] sm:left-[220px] object-cover"
                    alt={card.alt}
                    src={card.image}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Closing Text */}
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="text-center px-4 sm:px-[62px]">
          <div className="text-transparent text-lg sm:text-2xl md:text-4xl leading-[28px] sm:leading-[35px] md:leading-[45px]">
            <span className="font-thin italic text-[#ffffff99]">We Work With</span>
            <span className="font-thin text-[#ffffff99]">&nbsp;</span>
            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] text-[#ffffff99]">
              Founders And Teams Who Want Creativity
              <br className="hidden sm:block" />
              With ROI And Strategy
            </span>
            <span className="font-thin text-[#ffffff99]">&nbsp;</span>
            <span className="font-thin italic text-[#ffffff99]">
              Without The Jargon.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
