'use client'
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

function HeroImage() {
  const [eyesOpen, setEyesOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEyesOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative py-1">
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-250 h-70 overflow-hidden opacity-100"
    >
      {/* Eyes closed image - visible initially */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: eyesOpen ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/eyes-closed.png"
          alt="Anshita Rathore"
          fill
          quality={100}
          unoptimized
          className="object-cover object-top "
          priority
        />
      </motion.div>

      {/* Eyes open image - fades in after 1 second */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: eyesOpen ? 1 : 0 }}
        transition={{ duration: 0 }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/eyes-open.png"
          alt="Anshita Rathore"
          fill
          quality={100}
          unoptimized
          className="object-cover object-top"
          priority
        />
      </motion.div>
    </motion.div>
    </div>
  );
}

export default HeroImage;
