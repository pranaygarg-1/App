import React from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import video from "../../../../../public/assets/videos/city.mp4";

// Animation variants for initial fade-in
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const AboutUsSection = () => {
  const { scrollY } = useScroll();

  // Headings go up on scroll
  const headingY = useTransform(scrollY, [0, 400], [0, -120]);
  const smoothHeadingY = useSpring(headingY, { stiffness: 50, damping: 20 });

  // Subtitle + CTA go down on scroll
  const bottomY = useTransform(scrollY, [0, 400], [0, 80]);
  const smoothBottomY = useSpring(bottomY, { stiffness: 50, damping: 20 });

  // Video scales up
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.8]);
  const smoothVideoScale = useSpring(videoScale, { stiffness: 40, damping: 20 });

  return (
    <section className="w-full relative pt-20 overflow-hidden">
      <main className="w-full max-w-[1018px] mx-auto mt-28 px-4">
        <motion.div
          className="relative w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full max-w-[1024px] mx-auto">
            {/* Hero Heading */}
            <motion.h1
              variants={itemVariants}
              style={{ y: smoothHeadingY }}
              className="text-center leading-[normal] tracking-[0]"
            >
              <motion.span
                variants={itemVariants}
                className="text-[50px] lg:text-[70px] block [font-family:'Helvetica-Regular',Helvetica] font-normal text-white"
              >
                TIRED{" "}
                <span className="font-thin italic text-white text-[50px] lg:text-[70px] leading-[1.1]">
                  of
                </span>{" "}
                AGENCIES
              </motion.span>

              {/* Middle Row with Video + Text */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-4"
              >
                {/* Video */}
                <motion.div
                  style={{ scale: smoothVideoScale }}
                  className="w-[160px] h-[90px] sm:w-[190px] sm:h-[100px] lg:w-[250px] lg:h-[140px] bg-[#c4c4c4] flex items-center justify-center shrink-0 overflow-hidden rounded-lg shadow-lg"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                    src={video}
                  />
                </motion.div>

                {/* Heading Text */}
                <motion.span
                  variants={itemVariants}
                  className="font-extralight text-white text-[50px] lg:text-[70px] leading-[1.1] text-center lg:text-left"
                >
                  THAT JUST{" "}
                  <span className="[font-family:'Helvetica-Regular',Helvetica] font-normal text-[50px] lg:text-[70px]">
                    DESIGN
                  </span>{" "}
                  <span className="italic font-light">or</span>
                </motion.span>
              </motion.div>

              <motion.span
                variants={itemVariants}
                className="mt-[10px] font-thin text-white text-[55px] lg:text-[75px] leading-[1.1] block"
              >
                TOOLS THAT JUST{" "}
                <span className="font-normal text-[50px] lg:text-[70px]">
                  AUTOMATE?
                </span>
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              style={{ y: smoothBottomY }}
              className="mt-[40px] text-center [font-family:'Helvetica_Neue-Light',Helvetica] font-extralight text-[#cacaca] text-base lg:text-xl leading-[26px]"
            >
              We build brands and growth strategies that actually work faster,
              smarter, and built to last.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              style={{ y: smoothBottomY }}
              className="flex flex-col lg:flex-row items-center justify-center gap-2 mt-[40px] lg:mt-[60px]"
            >
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
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              variants={itemVariants}
              style={{ y: smoothBottomY }}
              className="text-center mt-4 mb-32 [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-[#9e9595] text-sm tracking-[0] leading-[normal]"
            >
              (No credit card. No login. Just results.)
            </motion.p>
          </div>
        </motion.div>
      </main>
    </section>
  );
};
