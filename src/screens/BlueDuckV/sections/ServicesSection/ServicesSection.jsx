import { ChevronDownIcon } from "lucide-react";
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
    {
      question:
        "What makes Blue Duck different from other agencies or consultants?",
      answer: "",
    },
    {
      question: "Who is Blue Duck best suited for?",
      answer: "",
    },
    {
      question: "What is your AI-Powered Brand Engine?",
      answer: "",
    },
    {
      question:
        "Do I need to have an existing brand or marketing strategy to work with you?",
      answer: "",
    },
    {
      question: "How do your marketing services drive ROI?",
      answer: "",
    },
    {
      question:
        "Can I hire you for just one service (like pitch decks or GTM strategy)?",
      answer: "",
    },
    {
      question: "How does AI play a role in your offerings?",
      answer: "",
    },
    {
      question: "What industries do you specialize in?",
      answer: "",
    },
    {
      question: "What's your typical engagement model or timeline?",
      answer: "",
    },
    {
      question: "How do I get started with Blue Duck?",
      answer: "",
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
          {testimonials.map((testimonial, index) => (
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
      <div className= "flex justify-start p-0 m-0">
        
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
      </div>


      {/* Blog Section */}
      <div className="w-full max-w-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
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
      </div>
    </section>
  );
};
