import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1156-2.png",
      logo: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/new-paypal-logo-white-png-horizontal-large-size-1-3.png",
      logoAlt: "New paypal logo",
      country: "USA",
      countryFlag:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/united-states-2.svg",
      tags: ["SOCIAL CAMPAIGNS", "APP REVAMP"],
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1157.png",
      logo: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/65a7cd2eb0ee3c6c128fa995-farmley-logo-1-2.png",
      logoAlt: "Img",
      country: "INDIA",
      countryFlag: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/flag-1.svg",
      tags: ["SOCIAL CAMPAIGNS", "BRANDING"],
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1156.png",
      logo: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/new-paypal-logo-white-png-horizontal-large-size-1-3.png",
      logoAlt: "New paypal logo",
      country: "USA",
      countryFlag:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/united-states-2.svg",
      tags: ["SOCIAL CAMPAIGNS", "APP REVAMP"],
    },
    {
      id: 4,
      image: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1157-1.png",
      logo: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/65a7cd2eb0ee3c6c128fa995-farmley-logo-1-2.png",
      logoAlt: "Img",
      country: "INDIA",
      countryFlag: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/flag-1-1.svg",
      tags: ["SOCIAL CAMPAIGNS", "BRANDING"],
    },
    {
      id: 5,
      image: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1156-1.png",
      logo: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/new-paypal-logo-white-png-horizontal-large-size-1-3.png",
      logoAlt: "New paypal logo",
      country: "USA",
      countryFlag:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/united-states-2.svg",
      tags: ["SOCIAL CAMPAIGNS", "APP REVAMP"],
    },
    {
      id: 6,
      image: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1157-2.png",
      logo: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/65a7cd2eb0ee3c6c128fa995-farmley-logo-1-2.png",
      logoAlt: "Img",
      country: "INDIA",
      countryFlag: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/flag-1-2.svg",
      tags: ["SOCIAL CAMPAIGNS", "BRANDING"],
    },
  ];

  return (
    <section className="w-full py-16 px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="max-w-[1240px] mx-auto">
        <header className="text-center mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <h2 className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#787878] text-xl tracking-[0] leading-[normal]">
            EXPLORE OUR WORK
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.id}
              className="group relative bg-transparent border-none shadow-none hover:scale-[1.02] transition-transform duration-300 translate-y-[-1rem] animate-fade-in opacity-0"
              style={{ "--animation-delay": `${600 + index * 100}ms` }}
            >
              <CardContent className="p-0 relative">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    className="w-full h-[360px] object-cover transition-transform duration-300 group-hover:scale-105"
                    alt="Portfolio project"
                    src={item.image}
                  />

                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="inline-flex items-center justify-center gap-1 pl-[7px] pr-3 py-1.5 bg-black rounded-[90px] border border-solid border-[#1e1e1e] text-white text-xs [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal"
                    >
                      <img
                        className="w-[18px] h-[18px]"
                        alt={`${item.country} flag`}
                        src={item.countryFlag}
                      />
                      {item.country}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 px-3">
                  <img
                    className="h-[30px] w-auto object-contain"
                    alt={item.logoAlt}
                    src={item.logo}
                  />

                  <div className="flex items-center gap-3">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="inline-flex items-center justify-center gap-2.5 px-3 py-1.5 bg-[#2a2626] rounded-[90px] border border-solid border-[#343434] text-white text-xs [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <div className="inline-flex items-center gap-1">
            <Button className="h-auto inline-flex flex-col items-start gap-2.5 px-5 py-[9px] bg-[#1929f2] hover:bg-[#1929f2]/90 transition-colors duration-300">
              <div className="flex items-center gap-3 w-full">
                <span className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  Discover All Work
                </span>
              </div>
            </Button>

            <img
              className="w-10 h-10"
              alt="Arrow icon"
              src="https://c.animaapp.com/mf9h3e3wUYtRXO/img/frame-1000006346.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
