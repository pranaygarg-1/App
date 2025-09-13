import React from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowRight } from "lucide-react";

export const AboutUsSection = () => {
  return (
    <section className="w-full relative pt-20">
      {/* Hero Content */}
      <main className="w-full max-w-[1018px] mx-auto mt-28 px-4">
        <div className="relative w-full">
          <div className="w-full max-w-[1024px] mx-auto">
            {/* Hero Heading */}
            <div className="relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <h1 className="text-center leading-[normal] tracking-[0]">
                <span className="text-[50px] lg:text-[70px] block [font-family:'Helvetica-Regular',Helvetica] font-normal text-white">
                  TIRED{" "}
                  <span className="font-thin italic text-white text-[50px] lg:text-[70px] leading-[1.1]">
                    of
                  </span>{" "}
                  AGENCIES
                </span>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                  {/* Video Placeholder */}
                  <div className="w-[190px] h-[100px] bg-[#c4c4c4] flex items-center justify-center shrink-0">
                    <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-black text-xs text-center leading-snug">
                      Placeholder for video which <br /> will expand in second
                      section
                    </span>
                  </div>
                  {/* Heading Text */}
                  <span className="font-extralight text-white text-[50px] lg:text-[70px] leading-[1.1]">
                    THAT JUST{" "}
                    <span className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-[50px] lg:text-[70px]">
                      DESIGN
                    </span>{" "}
                    <span className="italic font-light">or</span>
                  </span>
                </div>
                <span className="mt-[10px] font-thin text-white text-[55px] lg:text-[75px] leading-[1.1] block">
                  TOOLS THAT JUST{" "}
                  <span className="font-normal text-[50px] lg:text-[70px]">
                    AUTOMATE?
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="mt-[40px] text-center [font-family:'Helvetica_Neue-Light',Helvetica] font-extralight text-[#cacaca] text-base lg:text-xl leading-[26px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              We build brands and growth strategies that actually work faster,
              smarter, and built to last.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 mt-[40px] lg:mt-[60px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <Button className="h-12 px-5 py-[9px] bg-[#1929f2] hover:bg-[#1520d4] transition-colors">
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-base lg:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Try Our AI-Powered Brand Engine
                </span>
              </Button>

              <Button className="h-12 px-5 bg-[#1929f2] hover:bg-[#1520d4] flex items-center gap-2">
                <ArrowRight size={18} />
              </Button>

              {/* <img
                className="w-10 h-10"
                alt="Frame"
                src="https://c.animaapp.com/mf9h3e3wUYtRXO/img/frame-1000006346.svg"
              /> */}
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
