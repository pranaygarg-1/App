import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = () => {
  const featureCards = [
    {
      title: "Launch With Impact",
      image:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/spring-spiral-glass-abstract-geometry-3d-3d-illustration-render-.png",
      alt: "Spring spiral glass",
      background:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1148-1.svg",
    },
    {
      title: "Grow Through \ndata-driven Marketing",
      image:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/chrome-y2k-abstract-element-png-template-1.png",
      alt: "Chrome abstract",
      background:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1148.svg",
    },
    {
      title: "Scale Using Sharp Consulting Frameworks",
      image:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/chrome-y2k-abstract-element-png-template-3.png",
      alt: "Chrome abstract",
      background:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1148-2.svg",
    },
  ];

  return (
    <section className="w-full max-w-[1242px] mx-auto px-4 py-16 relative">
      <div className="w-full">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="text-center mb-[60px]">
            <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#787878] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              WHO WE ARE
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="text-center mb-[136px] px-20">
              <h2 className="[font-family:'Helvetica_Neue-Thin',Helvetica] font-normal text-white text-[68px] tracking-[0] leading-[normal]">
                <span className="[font-family:'Helvetica_Neue-ThinItalic',Helvetica] font-thin italic">
                  Not Your
                </span>
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                  {" "}
                  Typical Marketing Agency
                </span>
                <span className="[font-family:'Helvetica_Neue-Italic',Helvetica] italic">
                  .
                </span>
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                  {" "}
                  <br />
                </span>
                <span className="[font-family:'Helvetica_Neue-ThinItalic',Helvetica] font-thin italic">
                  Not Your
                </span>
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica]">
                  {" "}
                  Usual Consultants.
                </span>
              </h2>
            </div>
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="flex justify-center mb-[76px]">
              <div className="w-[718px] h-[33px] relative">
                <div className="relative w-[716px] h-[33px]">
                  <div className="absolute w-[308px] h-[31px] top-0.5 left-[248px] bg-[#1929f2] rounded" />
                  <div className="absolute top-0 left-0 [font-family:'Helvetica_Neue-Light',Helvetica] font-light text-white text-2xl text-right tracking-[0] leading-[31.2px] whitespace-nowrap">
                    At Blue Duck, we blend&nbsp;&nbsp;Storytelling, Strategy,
                    and AI&nbsp;&nbsp;to help brands:
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-[108px]">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-full max-w-[400px] h-[218px] bg-transparent border-none"
                >
                  <CardContent className="p-0 relative h-full">
                    <img
                      className="absolute w-full h-[186px] top-0 left-0"
                      alt="Rectangle"
                      src={card.background}
                    />
                    <div className="absolute w-[156px] top-7 left-8 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal] whitespace-pre-line">
                      {card.title}
                    </div>
                    <img
                      className="absolute w-[152px] h-[152px] top-[66px] left-[220px] object-cover"
                      alt={card.alt}
                      src={card.image}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="text-center px-[162px]">
          <div className="[font-family:'Helvetica_Neue-Thin',Helvetica] font-normal text-transparent text-4xl tracking-[0] leading-[46.8px]">
            <span className="[font-family:'Helvetica_Neue-ThinItalic',Helvetica] font-thin italic text-[#ffffff99]">
              We Work With
            </span>
            <span className="font-thin text-[#ffffff99]">&nbsp;</span>
            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] text-[#ffffff99]">
              Founders And Teams Who Want Creativity <br />
              with Roi And Strategy
            </span>
            <span className="font-thin text-[#ffffff99]">&nbsp;</span>
            <span className="[font-family:'Helvetica_Neue-ThinItalic',Helvetica] font-thin italic text-[#ffffff99]">
              Without The Jargon.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
