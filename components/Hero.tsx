import { motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import LayeredText from "./LayeredText";

function Hero() {
  const [eyesOpen, setEyesOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEyesOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-246.5 h-67.75 overflow-hidden rounded-2xl shadow-xl opacity-100"
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-transparent z-10" />

        {/* Eyes closed image - visible initially */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: eyesOpen ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/eyes-closed.webp"
            alt="Anshita Rathore"
            fill
            quality={100}
            unoptimized
            className="object-cover object-top"
            priority
          />
        </motion.div>

        {/* Eyes open image - fades in after 1 second */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: eyesOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/eyes-open.webp"
            alt="Anshita Rathore"
            fill
            quality={100}
            unoptimized
            className="object-cover object-top"
            priority
          />
        </motion.div>
      </motion.div>
      <LayeredText mainWord="PORTFOLIO" insideWord="Anshita Rathore" mainClassName="-my-4 sm:-my-8 md:-my-16" />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-4 w-full px-10 origin-center"
      >
        <Image
          src="/assets/line.svg"
          alt="divider"
          width={330}
          height={10}
          className="w-full"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center text-lg sm:text-xl tracking-[0.2em] uppercase font-light text-gray-800"
      >
        UI/UX Designer
      </motion.p>
    </section>
  );
}

export default Hero;
