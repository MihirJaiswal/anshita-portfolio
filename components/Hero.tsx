"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import LayeredText from "./LayeredText";
import HeroImage from "./HeroImage";

function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative pt-32 sm:pt-24 pb-16 sm:pb-13.5 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center min-h-screen xs:justify-center overflow-hidden"
    >
      {/* Parallax background layer */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#A5C9D1]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.div style={{ y: textY, opacity }} className="relative z-10 flex flex-col items-center justify-center">
        <HeroImage />
        <LayeredText
          mainWord="PORTFOLIO"
          insideWord="Anshita Rathore"
          mainClassName="!text-[110px] sm:!text-[160px] lg:!text-[200px] -my-8 sm:-my-8 md:-my-15 lg:-my-20"
          insideClassName="!text-[40px] sm:!text-[52px] lg:!text-[64px]"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-6 sm:mb-6.5 w-full px-6 sm:px-10 origin-center"
        >
          <Image
            src="/assets/line.svg"
            alt="divider"
            width={330}
            height={10}
            className="w-full"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl uppercase text-gray-800 font-poppins"
        >
          UI/UX Designer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="text-center text-base sm:text-lg md:text-xl mt-4 text-gray-600 max-w-88  xs:max-w-2xl font-poppins"
        >
          Designing interfaces that are clear, usable, and thoughtful
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Hero;