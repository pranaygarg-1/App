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
    <section className="w-full max-w-[1242px] mx-auto px-4 py-16 relative mb-28">

      <div className="w-full">

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="text-center mb-[30px]">
            <div className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#787878] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              WHO WE ARE
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="text-center mb-[27px] px-10">
              <h2 className="font-normal text-white text-[68px] tracking-[0] leading-[normal]">
                <span className="font-thin italic">
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
                <span className="font-thin italic">
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
              <div className="relative w-[718px] h-[33px]">
                {/* Highlight background */}
                <div className="absolute top-[2px] left-[248px] w-[308px] h-[31px] bg-[#1929f2] rounded" />

                {/* Text layer */}
                <div style={{ wordSpacing: '0.1em' }} className="absolute top-0 left-0 font-light text-white text-2xl text-right leading-[31.2px] whitespace-nowrap tracking-normal">
                  At Blue Duck, we blend&nbsp;&nbsp;
                  <span className="relative z-10">Storytelling, Strategy, and AI</span>
                  &nbsp;&nbsp;to help brands:
                </div>
              </div>
            </div>
          </div>


          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-[120px]">

              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-full max-w-[400px] h-[200px] bg-transparent border-none"
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

        <div className="text-center px-[62px]">

          <div className="text-transparent text-4xl tracking-[0] leading-[45px]">

            <span className="font-thin italic text-[#ffffff99]">
              We Work With
            </span>

            <span className="font-thin text-[#ffffff99]">&nbsp;</span>

            <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] text-[#ffffff99]">
              Founders And Teams Who Want Creativity 
              <br />
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
