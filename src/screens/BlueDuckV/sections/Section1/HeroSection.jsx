import React from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowRight } from "lucide-react";
import video from "../../../../../public/assets/videos/city.mp4";

export const HeroSection = () => {
  return (
    <section className="relative sticky top-0 h-screen w-full flex items-center">
      <main className="w-full max-w-[1018px] mx-auto px-4 pt-64">
        <div
          className="relative w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full max-w-[1024px] mx-auto">
            {/* Hero Heading */}
            <h1 className="text-center leading-none tracking-[0]">
              <span className="text-[50px] lg:text-[70px] block [font-family:'Helvetica-Regular',Helvetica] font-normal text-white">
                TIRED{" "}
                <span className="font-thin italic text-white text-[50px] lg:text-[70px] leading-[1.1]">
                  of
                </span>{" "}
                AGENCIES
              </span>
              {/* Middle Row with Video + Text */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-4">
                {/* Video */}
                <div className="w-[160px] h-[90px] sm:w-[190px] sm:h-[100px] lg:w-[250px] lg:h-[140px] bg-[#c4c4c4] flex items-center justify-center shrink-0 overflow-hidden rounded-lg shadow-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                    src={video}
                  />
                </div>
                {/* Heading Text */}
                <span className=" font-extralight text-white text-[50px] lg:text-[70px] leading-[1.1] text-center lg:text-left">
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
            {/* Subtitle */}
            <p className="mt-[40px] text-center [font-family:'Helvetica_Neue-Light',Helvetica] font-extralight text-[#cacaca] text-base lg:text-xl leading-[26px]">
              We blend strategy, storytelling, and systems to build brands that sell, scale, and stay.
              <br/>
              Not decks. Not promises. Actual results.
            </p>
            {/* CTA Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 mt-[35px] lg:mt-[50px]">
              <Button className="h-12 px-5 py-[9px] bg-[#1929f2] hover:bg-[#1520d4] transition-colors">
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-base lg:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Try Our AI-Powered Brand Engine
                </span>
              </Button>
              <Button
                className="h-12 px-5 bg-[#1929f2] hover:bg-[#1520d4] flex items-center gap-2"
                aria-label="Learn more"
              >
                <ArrowRight size={18} />
              </Button>
            </div>
            {/* Disclaimer */}
            <p className="text-center mt-3 mb-36 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#9e9595] text-sm tracking-[0] leading-[normal]">
              (No jargon. No waiting. Just outcomes.)
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};
