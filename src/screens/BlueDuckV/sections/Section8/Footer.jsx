import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const TestimonialsSection = () => {
  // Navigation data for Company section
  const companyLinks = [
    { label: "Services", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Company", href: "#" },
  ];

  // Navigation data for Support section
  const supportLinks = [
    { label: "Help & Support", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Legal & Security", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#090909] py-[125px] px-[60px] translate-y-[-1rem] animate-fade-in opacity-0 pb-28">

      <div className="max-w-[1308px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">

          {/* Newsletter Subscription Section */}
          <div className="lg:col-span-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="space-y-[12px]">
              <h3 className="[font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-white text-base leading-[19.2px]">
                Subscribe to Updates
              </h3>

              <div className="flex gap-2">
                <div className="flex-1 max-w-[292px]">
                  <Input
                    type="email"
                    placeholder="Email@example.com"
                    className="h-[42px] bg-[#19191978] border-[#5d5d5d] text-[#7d7d7d] placeholder:text-[#7d7d7d] [font-family:'Helvetica_Neue-Regular',Helvetica] text-[15px] focus:border-[#1929f2] focus:ring-1 focus:ring-[#1929f2]"
                    defaultValue=""
                  />
                </div>

                <Button className="h-[42px] px-6 py-2.5 bg-[#1929f2] border border-[#ffffff3b] rounded-md hover:bg-[#1929f2]/90 transition-colors">
                  <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-lg">
                    Send
                  </span>
                </Button>
              </div>
            </div>

            <div className="mt-[52px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <img
                className="w-60 h-[50px]"
                alt="Company Logo"
                src="https://c.animaapp.com/mf9h3e3wUYtRXO/img/group-1000006199.png"
              />
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-2 flex justify-end gap-[90px]">
            {/* Company Section */}
            <nav className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              <h4 className="[font-family:'Darker_Grotesque',Helvetica] font-semibold text-[#1929f2] text-[22px] leading-[21.6px] mb-3">
                Company
              </h4>

              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="[font-family:'Darker_Grotesque',Helvetica] font-normal text-[#d3d3d3] text-xl leading-[21.6px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Support Section */}
            <nav className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              <h4 className="[font-family:'Darker_Grotesque',Helvetica] font-semibold text-[#1929f2] text-[22px] leading-[21.6px] mb-3">
                Support
              </h4>

              <ul className="space-y-4">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="[font-family:'Darker_Grotesque',Helvetica] font-normal text-[#d3d3d3] text-xl leading-[21.6px] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
