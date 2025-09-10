import React from "react";
import { Button } from "../../../../components/ui/button";

export const AboutUsSection = () => {
  const navigationItems = [
    { label: "Services" },
    { label: "Projects" },
    { label: "Insights" },
    { label: "Company" },
  ];

  return (
    <section className="w-full relative">

      {/* Navigation Header */}
      <header className="w-full h-12 m-8 relative translate-y-[-1rem] animate-fade-in opacity-0">
        <div >

          <img
            className="w-[230px] h-12 ml-16"
            alt="Group"
            src="https://c.animaapp.com/mf9h3e3wUYtRXO/img/group-1000006337.png"
          />

          <nav className="flex items-center gap-12 absolute top-3.5 left-[409px] ml-16 p-1">
            {navigationItems.map((item, index) => (
              <a
                key={item.label}
                href="#"
                className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap hover:text-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="absolute w-[350px] h-10 top-[5px] right-0 flex items-center gap-0">

            <Button className="h-10 px-5 py-[9px] bg-[#1929f2] hover:bg-[#1520d4] transition-colors">
              <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                Book A Demo
              </span>
            </Button>

            <img
              className="w-10 h-10 ml-2"
              alt="Frame"
              src="https://c.animaapp.com/mf9h3e3wUYtRXO/img/frame-1000006346.svg"
            />
          </div>

        </div>
      </header>

      {/* Hero Content */}
      <main className="w-full max-w-[1018px] mx-auto mt-32 px-4">
        <div className="relative w-full">

          {/* Hero Text Section */}
          <div className=" w-full max-w-[1024px] mx-auto">

            {/* Main Hero Text */}
            <div className="relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <h1 className="text-center leading-[normal] tracking-[0]">
                <span className="text-[70px]  block [font-family:'Helvetica-Regular',Helvetica] font-normal text-white">
                  TIRED{" "}
                  <span className="[font-family:'Helvetica-Light',Helvetica] font-light text-[70px]">
                    of
                  </span>{" "}
                  AGENCIES{" "}
                </span>

                <div className="flex items-center gap-6">
                  {/* Video Placeholder */}
                  <div className="w-[170px] h-[100px] bg-[#c4c4c4] flex items-center justify-center shrink-0">
                    <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-xs text-center leading-snug">
                      Placeholder for video which <br />
                      will expand in second section
                    </span>
                  </div>

                  {/* Heading Text */}
                  <span className="[font-family:'Helvetica-Light',Helvetica] font-light text-white text-[70px] leading-[1.1]">
                    THAT JUST{" "}
                    <span className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-[70px]">
                      DESIGN
                    </span>{" "}
                    <span className="italic font-light">or</span>
                  </span>
                </div>




                <span className="mt-[10px] [font-family:'Helvetica-Light',Helvetica] font-light text-white text-[60px] leading-[1.1]">
                  TOOLS THAT JUST{" "}
                  <span className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-[60px]">
                    AUTOMATE?
                  </span>
                </span>

              </h1>

            </div>

            {/* Subtitle */}
            <p className="mt-[31px] text-center [font-family:'Helvetica_Neue-Light',Helvetica] font-light text-[#cacaca] text-xl tracking-[0] leading-[26px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              We build brands and growth strategies that actually work faster,
              smarter, and built to last.
            </p>

            {/* CTA Section */}
            <div className="flex items-center justify-center gap-1 mt-[90px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <Button className="h-10 px-5 py-[9px] bg-[#1929f2] hover:bg-[#1520d4] transition-colors">
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Try Our AI-Powered Brand Engine
                </span>
              </Button>

              <img
                className="w-10 h-10 ml-1"
                alt="Frame"
                src="https://c.animaapp.com/mf9h3e3wUYtRXO/img/frame-1000006346.svg"
              />
            </div>

            {/* Disclaimer */}
            <p className="text-center mt-4 mb-32 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#9e9595] text-sm tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              (No credit card. No login. Just results.)
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};
