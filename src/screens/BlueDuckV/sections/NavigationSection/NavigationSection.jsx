import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const ServiceBlock = ({ title, bgImg, img, services, delay }) => (
  <div className="grid lg:grid-cols-2 gap-16 items-start">
    {/* Left - Image + Title */}
    <div className="order-2 lg:order-1">
      <div className="relative w-full max-w-[528px] h-[489px] mx-auto lg:ml-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        <img src={img} alt={title} className="w-full h-full" />
        <div className="absolute top-10 -left-8 lg:-left-20 w-[260px] sm:w-[300px] lg:w-[343px]">
          <h3 className="font-normal text-white text-4xl sm:text-5xl lg:text-[68px] leading-normal">
            {title}
          </h3>
        </div>
      </div>
    </div>

    {/* Right - Services */}
    <div className="order-1 lg:order-2 lg:pl-8">
      <div className="flex flex-col gap-12 pt-[21px]">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-transparent border-none shadow-none translate-y-[-1rem] animate-fade-in opacity-0"
            style={{ "--animation-delay": `${delay + index * 200}ms` }}
          >
            <CardContent className="p-0">
              <div className="space-y-3">
                <h4 className="font-normal text-white text-2xl leading-normal">
                  {index + 1}. {service.title}
                </h4>
                <p className="pl-[25px] font-light text-[#ffffffc2] text-[17px] leading-normal">
                  {service.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

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
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-[50px]">
          <h2 className="font-normal text-[#787878] text-lg sm:text-xl tracking-[0] leading-normal">
            WHAT WE DO
          </h2>
        </div>

        <div className="space-y-[100px] sm:space-y-[120px]">
          <ServiceBlock
            title="Marketing Services"
            bgImg="https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1151.png"
            img="https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1129.png"
            services={marketingServices}
            delay={400}
          />

          <ServiceBlock
            title="Consulting Services"
            bgImg="https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1151-1.png"
            img="https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-1129-1.png"
            services={consultingServices}
            delay={1200}
          />
        </div>
      </div>
    </section>
  );
};
