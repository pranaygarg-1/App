import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = () => {
  const testimonials = [
    {
      id: 1,
      backgroundImage:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-722.svg",
      avatar: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/jv3hwfz1v6v8-2-1.png",
      quote: "Blue Duck nailed our brand voice and gave us tools to scale it",
      author: "-Rajiv B., Founder, Claritysoft",
      logo: null,
    },
    {
      id: 2,
      backgroundImage:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-723-2.svg",
      avatar: null,
      quote:
        "The AI content engine saves us 10+ hours a week. Total game-changer.",
      author: "-Mira S., Marketing Lead, Bloom AI",
      logo: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/bloomai-1.png",
    },
    {
      id: 3,
      backgroundImage:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-723.svg",
      avatar: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/jv3hwfz1v6v8-2-1.png",
      quote: "Blue Duck nailed our brand voice and gave us tools to scale it",
      author: "-Rajiv B., Founder, Claritysoft",
      logo: null,
    },
    {
      id: 4,
      backgroundImage:
        "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-723-1.svg",
      avatar: null,
      quote:
        "The AI content engine saves us 10+ hours a week. Total game-changer.",
      author: "-Mira S., Marketing Lead, Bloom AI",
      logo: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/bloomai-1-1.png",
    },
  ];

  const faqItems = [
    // General
    {
      question: "What is Blue Duck?",
      answer:
        "Blue Duck is a consulting-led growth partner that blends consulting, storytelling, AI, and analytics to drive real business growth—not just marketing campaigns.",
    },
    {
      question: "How is Blue Duck different from a traditional agency?",
      answer:
        "We go beyond ads and content. From sales enablement to investor readiness, we work as your extended growth team—consulting, executing, and closing deals.",
    },
    {
      question: "Who do you work with?",
      answer:
        "Startups, scale-ups, and enterprises across industries like tech, healthcare, AI, telecom, and consumer brands.",
    },
    // Services
    {
      question: "What services do you offer?",
      answerList: [
        "Sales & Business Development",
        "Brand Building & Positioning",
        "AI-Powered Digital Marketing",
        "Content Creation & Campaigns",
        "Go-to-Market (GTM) Strategy",
        "Investor Pitch & Fundraising Support",
      ],
    },
    {
      question: "Can you help with fundraising?",
      answer:
        "Yes. We create investor-ready pitch decks, market sizing (TAM/SAM/SOM), and storytelling strategies that help secure funding.",
    },
    {
      question: "Do you provide both B2B and B2C solutions?",
      answer:
        "Absolutely—whether it’s enterprise partnerships or mass customer acquisition, we build tailored strategies for both.",
    },
    {
      question: "Do you only advise or also execute?",
      answer:
        "Both. We design the strategy and execute it—campaigns, events, lead generation, and deal closures.",
    },
    {
      question: "Do you provide event and launch support?",
      answer:
        "Yes. From trade shows to digital product launches, we manage end-to-end events, PR, and partner activations.",
    },
    // Engagement
    {
      question: "What engagement models do you offer?",
      answerList: [
        "Retainer (monthly ongoing support)",
        "Project-based (for rebranding, launches, pitch decks)",
        "Hybrid (retainer + flexible add-ons)",
      ],
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, we’ve helped companies expand across Australia, UAE, Europe, and Asia.",
    },
    {
      question: "Can you create custom growth strategies for niche industries?",
      answer:
        "Definitely. We start with your Ideal Customer Profile (ICP) and build growth plans specific to your market.",
    },
    // Process & Results
    {
      question: "How do you measure success?",
      answer:
        "Through clear KPIs like customer acquisition, revenue pipeline growth, lead conversion rates, and funding milestones.",
    },
    {
      question: "Can you show examples of past work?",
      answer:
        "Yes. We’ve helped clients secure multi-million-dollar funding, close strategic partnerships, and launch in new markets. (Add a Case Studies or Work section on site).",
    },
    {
      question: "How fast can I see results?",
      answer:
        "It depends on the scope—some campaigns deliver leads within weeks, while GTM and fundraising strategies can take 2–3 months to show impact.",
    },
    // Getting Started
    {
      question: "How do I get started with Blue Duck?",
      answer:
        "Fill out our contact form or schedule a call. We’ll understand your needs, suggest a plan, and kickstart growth.",
    },
    {
      question: "Do you offer a free consultation?",
      answer:
        "Yes, we start with a discovery session to understand your goals and challenges.",
    },
    {
      question: "What makes Blue Duck the right growth partner for me?",
      answer:
        "If you’re looking for more than a marketing agency—someone who defines positioning, executes campaigns, and helps close deals—we’re the partner for you.",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      image: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-35.png",
      category: "Branding |  Design",
      title: "Branding Isn't Just a Logo: What Early-Stage Startups Get Wrong",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-35-2.png",
      category: "Branding |  Design",
      title: "Branding Isn't Just a Logo: What Early-Stage Startups Get Wrong",
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-35-3.png",
      category: "Branding |  Design",
      title: "Branding Isn't Just a Logo: What Early-Stage Startups Get Wrong",
    },
    {
      id: 4,
      image: "https://c.animaapp.com/mf9h3e3wUYtRXO/img/rectangle-35-1.png",
      category: "Branding |  Design",
      title: "Branding Isn't Just a Logo: What Early-Stage Startups Get Wrong",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center gap-40 py-20 mb-12">
      {/* Testimonials Section */}
      <div className="w-full max-w-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="text-center mb-12">
          <h2 className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-light text-[#787878] text-lg tracking-[0] leading-[normal]">
            WHAT OTHERS SAY
          </h2>
        </div>

        <div className="flex gap-7 overflow-x-auto scrollbar-hide pb-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="min-w-[403px] h-60 bg-transparent border-none"
            >
              <CardContent className="p-0 h-full relative">
                <div
                  className="w-full h-full bg-cover bg-center rounded-lg"
                  style={{
                    backgroundImage: `url(${testimonial.backgroundImage})`,
                  }}
                >
                  <div className="relative w-[343px] h-[171px] top-7 left-8">
                    <img
                      className="absolute w-7 h-[23px] top-0 right-0"
                      alt="Quote"
                      src="https://c.animaapp.com/mf9h3e3wUYtRXO/img/-.svg"
                    />

                    {testimonial.logo && (
                      <div className="absolute top-[18px] left-0">
                        <img
                          className="h-[33px] object-contain"
                          alt="Company logo"
                          src={testimonial.logo}
                        />
                      </div>
                    )}

                    <div className="absolute w-[343px] top-1 left-0">
                      {testimonial.avatar && (
                        <img
                          className="w-[62px] h-[62px] object-cover rounded-full"
                          alt="Avatar"
                          src={testimonial.avatar}
                        />
                      )}

                      <div className="absolute w-[339px] top-[86px] left-0 [font-family:'Helvetica_Neue-Light',Helvetica] font-light text-white text-xl tracking-[0] leading-[normal]">
                        {testimonial.quote}
                      </div>

                      <div className="absolute top-[150px] left-0 [font-family:'Helvetica_Neue-Light',Helvetica] font-light text-white text-sm tracking-[0] leading-[normal]">
                        {testimonial.author}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      {/* <div className= "flex justify-start p-0 m-0">
        
        <div className="w-full max-w-4xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] mt ">
          <div className="text-center mb-20">
            <h2 className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#787878] text-xl tracking-[0] leading-[normal]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-8">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none"
              >
                <div className="relative">
                  <AccordionTrigger className="flex justify-between items-center w-full py-0 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    <div className="text-left pl-[17px] [-webkit-text-stroke:1px_#00000038] font-light text-white text-2xl tracking-[0.50px] leading-7 mb-3">
                      {item.question}
                    </div>
                    <ChevronDownIcon className="h-5 w-5 text-white transition-transform duration-200 mr-[38px]" />
                  </AccordionTrigger>
                  <div className="absolute w-full h-px bg-[url(https://c.animaapp.com/mf9h3e3wUYtRXO/img/line-11.svg)] bg-repeat-x bottom-0" />
                </div>
                <AccordionContent className="pt-4 pb-0">
                  <div className="pl-[17px] text-white">{item.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>

        </div>
      </div> */}

      {/* FAQ Section */}
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-[972px] h-[794px] flex flex-col items-center overflow-hidden">
        <div className="mb-10 pt-2">
          <h2 className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#787878] text-xl tracking-[0] leading-[normal]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>
        {/* Scrollable accordion area fixed inside container */}
        <div className="w-full flex-1 px-2 overflow-y-auto scrollbar-hide pr-2">
          <Accordion type="single" collapsible className="space-y-8">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none"
              >
                <div className="relative">
                  <AccordionTrigger className="flex justify-between items-start w-full py-0 hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:text-white [&>svg]:h-5 [&>svg]:w-5">
                    <div className="text-left pl-[4px] [-webkit-text-stroke:1px_#00000038] font-light text-white text-xl tracking-[0.50px] leading-7 mb-3">
                      {item.question}
                    </div>
                  </AccordionTrigger>
                  <div className="absolute w-full h-px bg-[url(https://c.animaapp.com/mf9h3e3wUYtRXO/img/line-11.svg)] bg-repeat-x bottom-0" />
                </div>
                <AccordionContent className="pt-2 pb-0">
                  <div className="pl-[4px] text-white whitespace-pre-line text-sm leading-relaxed">
                    {item.answerList ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {item.answerList.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      item.answer
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Blog Section */}
      {/* <div className="w-full max-w-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <div className="text-center mb-16 ">
          <h2 className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#787878] text-xl tracking-[0] leading-[normal]">
            BLOGS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="bg-transparent border-none translate-y-[-1rem] animate-fade-in opacity-0"
              style={{ "--animation-delay": `${800 + index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="w-full h-[210px] mb-4 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Blog post"
                    src={post.image}
                  />
                </div>

                <div className="space-y-2">
                  <div className=" font-normal text-[#ffffffab] text-base tracking-[0] leading-[20.8px]">
                    {post.category}
                  </div>

                  <h3 className="font-normal text-white text-base tracking-[0] leading-[26px]">
                    {post.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}

      <div className="w-full max-w-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] mx-auto">
        <div className="text-center mb-16">
          <h2 className="[font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#787878] text-xl tracking-[0] leading-[normal]">
            BLOGS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="bg-transparent border-none translate-y-[-1rem] animate-fade-in opacity-0"
              style={{ "--animation-delay": `${800 + index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Responsive image wrapper */}
                <div className="w-full aspect-[16/9] mb-4 rounded-lg overflow-hidden bg-black flex items-center justify-center">
                  <img
                    className="w-full h-full object-contain"
                    alt="Blog post"
                    src={post.image}
                  />
                </div>

                <div className="space-y-2">
                  <div className="font-normal text-[#ffffffab] text-base tracking-[0] leading-[20.8px]">
                    {post.category}
                  </div>
                  <h3 className="font-normal text-white text-base tracking-[0] leading-[26px]">
                    {post.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
