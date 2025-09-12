import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 mb-24">

      <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] whitespace-nowrap  font-light text-white text-lg md:text-5xl lg:text-[68px] text-center tracking-[0] leading-[normal] mb-14">
        Ready To Turn Noise Into Growth?
      </h2>


      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] flex items-center gap-1">
        <Button className="h-auto bg-[#1929f2] hover:bg-[#1929f2]/90 transition-colors px-5 py-[9px] flex items-center gap-3">
          <span className=" font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
            Work With Blue Duck
          </span>
        </Button>

        <img
          className="w-10 h-10"
          alt="Frame"
          src="https://c.animaapp.com/mf9h3e3wUYtRXO/img/frame-1000006346.svg"
        />
      </div>
    </section>
  );
};
