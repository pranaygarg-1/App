import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const NavigationSection = () => {
  const marketingServices = [
    {
      title: "Brand Building & Positioning",
      description:
        "Craft distinctive brand stories and visual identities that stand out.",
    },
    {
      title: "Digital & Social Campaigns",
      description:
        "Full-funnel execution: SEO, performance ads, content calendars, reels, and influencer collaborations.",
    },
    {
      title: "Creative Collaterals",
      description:
        "Websites, landing pages, product videos, pitch decks, and investor briefs that drive action.",
    },
  ];

  const consultingServices = [
    {
      title: "Go-to-Market (GTM) Strategy",
      description:
        "Define ideal customers, plan channel mixes, set pricing, and build smart launch roadmaps.",
    },
    {
      title: "Growth & Operations",
      description:
        "Streamline marketing processes, improve performance, and scale with structure.",
    },
    {
      title: "Investor & Fundraising Readiness",
      description:
        "Shape compelling narratives, benchmark competition, and craft investor-ready pitch stories.",
    },
  ];

  return (
    <section className="w-full max-w-[1240px] mx-auto  relative">

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">

        <div className="text-center mb-[50px]">
          <h2 className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#787878] text-xl tracking-[0] leading-[normal]">
            WHAT WE DO
          </h2>
        </div>

        <div className="space-y-[120px]"> {/* increase spacing here as needed */}

          {/* Marketing Services */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="grid lg:grid-cols-2 gap-80 items-start">

              {/* Left - Image + Title */}
              <div className="order-2 lg:order-1">
                <div className="relative w-[528px] h-[489px] ml-60"> {/* FIXED HEIGHT container */}
                  <div className="absolute inset-0 bg-[url(https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1151.png)] bg-cover bg-[50%_50%]">
                    <img
                      className="w-[528px] h-[489px]"
                      alt="Rectangle"
                      src="https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1129.png"
                    />
                  </div>
                  <div className="absolute top-10 -left-60 w-[326px]">
                    <h3 className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[68px] leading-[normal]">
                      Marketing Services
                    </h3>
                  </div>

                </div>
              </div>

              {/* Right - Services */}
              <div className="order-1 lg:order-2 lg:pl-8">
                <div className="flex flex-col gap-12 pt-[21px]">
                  {marketingServices.map((service, index) => (
                    <Card
                      key={index}
                      className="bg-transparent border-none shadow-none translate-y-[-1rem] animate-fade-in opacity-0"
                      style={{ "--animation-delay": `${400 + index * 200}ms` }}
                    >
                      <CardContent className="p-0">
                        <div className="space-y-3">
                          <h4 className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-2xl leading-[normal]">
                            {index + 1}. {service.title}
                          </h4>
                          <p className="pl-[25px] font-light text-[#ffffffc2] text-[17px] leading-[normal]">
                            {service.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Consulting Services */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <div className="grid lg:grid-cols-2 gap-80 items-start">

              {/* Left - Image + Title */}
              <div className="order-2 lg:order-1">
                <div className="relative w-[528px] h-[489px] ml-60"> {/* FIXED HEIGHT container */}
                  <div className="absolute inset-0 bg-[url(https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1151-1.png)] bg-cover bg-[50%_50%]">
                    <img
                      className="w-[528px] h-[489px]"
                      alt="Rectangle"
                      src="https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1129-1.png"
                    />
                  </div>
                  <div className="absolute top-10 -left-60 w-[343px]">
                    <h3 className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-[68px] leading-[normal]">
                      Consulting Services
                    </h3>
                  </div>
                </div>
              </div>

              {/* Right - Services */}
              <div className="order-1 lg:order-2 lg:pl-8">
                <div className="flex flex-col gap-12 pt-[21px]">
                  {consultingServices.map((service, index) => (
                    <Card
                      key={index}
                      className="bg-transparent border-none shadow-none translate-y-[-1rem] animate-fade-in opacity-0"
                      style={{ "--animation-delay": `${1200 + index * 200}ms` }}
                    >
                      <CardContent className="p-0">
                        <div className="space-y-3">
                          <h4 className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-white text-2xl leading-[normal]">
                            {index + 1}. {service.title}
                          </h4>
                          <p className="pl-[25px] font-light text-[#ffffffc2] text-[17px] leading-[normal]">
                            {service.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
