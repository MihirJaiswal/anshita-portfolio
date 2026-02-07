'use client'
import { motion } from "motion/react";
import Image from "next/image";
import LayeredText from "./LayeredText";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 sm:pt-24 pb-16 sm:pb-13.5 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center min-h-screen justify-center"
    >
      <HeroImage />
      <LayeredText 
        mainWord="PORTFOLIO" 
        insideWord="Anshita Rathore" 
        mainClassName="-my-8 sm:-my-8 md:-my-20" 
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
        className="text-center text-base sm:text-lg md:text-xl mt-4 text-gray-600 max-w-2xl font-poppins px-4"
      >
        Designing interfaces that are clear, usable, and thoughtful
      </motion.p>
    </section>
  );
}

export default Hero;