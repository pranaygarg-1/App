import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const navigationItems = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Insights", href: "#insights" },
  { label: "Company", href: "#company" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ✅ Logo + Text */}
        <div className="flex items-center gap-3">
          <img
            className="w-52 h-12"
            alt="Logo"
            src="https://c.animaapp.com/mf9h3e3wUYtRXO/img/group-1000006337.png"
          />
          {/* <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg">Blue Duck</span>
            <span className="text-sm font-light text-gray-300">
              Brand Meets Intelligence
            </span>
          </div> */}
        </div>

        {/* ✅ Desktop Nav */}
        <nav className="hidden lg:flex gap-10 items-center">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-normal hover:text-gray-300 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* ✅ CTA Button */}
        <div className="hidden lg:flex items-center gap-1">
          <Button className="h-10 px-5 bg-[#1929f2] hover:bg-[#1520d4] flex items-center gap-2">
            <span>Book A Demo</span>
          </Button>

          <Button className="h-10 px-5 bg-[#1929f2] hover:bg-[#1520d4] flex items-center gap-2">
            <ArrowRight size={18} />
          </Button>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black z-40 flex flex-col items-start px-6 py-6 space-y-6 overflow-y-auto">
          <div className="flex w-full justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <img
                className="w-14 h-12"
                alt="Logo"
                src="https://c.animaapp.com/mf9h3e3wUYtRXO/img/group-1000006337.png"
              />
              {/* <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg">Blue Duck</span>
                <span className="text-sm font-light text-gray-300">
                  Brand Meets Intelligence
                </span>
              </div> */}
            </div>
            <button className="text-white" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-5 w-full">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg hover:text-gray-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-6 w-full flex flex-col gap-1">
            <Button className="w-full h-10 bg-[#1929f2] hover:bg-[#1520d4] flex items-center justify-center gap-2">
              <span>Book A Demo</span>
            </Button>

            <Button className="h-10 px-5 bg-[#1929f2] hover:bg-[#1520d4] flex items-center gap-2">
            <ArrowRight size={18} />
          </Button>
          </div>
        </div>
      )}
    </header>
  );
};
