import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // or wherever your cn function is

interface LayeredTextProps {
  mainWord: string;
  insideWord: string;
  mainClassName?: string;
  insideClassName?: string;
  containerClassName?: string;
  animationDelay?: number;
  mainColor?: string;
  insideColor?: string; 
  as?: "h1" | "h2" | "h3" | "div"; 
}

const LayeredText: React.FC<LayeredTextProps> = ({
  mainWord,
  insideWord,
  mainClassName,
  insideClassName,
  containerClassName,
  animationDelay = 0,
  mainColor = "text-[#A5C9D1CC]",
  insideColor = "text-black",
  as: Component = "div",
}) => {
  return (
    <Component className={cn("relative text-center", containerClassName)}>
      {/* Background Large Text */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: animationDelay + 0.2 }}
        className={cn(
          "font-['Alumni_Sans'] font-bold l leading-0 tracking-normal text-center flex items-center justify-center h-max",
          "text-[120px] sm:text-[200px] md:text-[240px] lg:text-[320px]",
          mainColor,
          mainClassName,
        )}
      >
        {mainWord}
      </motion.h1>

      {/* Foreground Text */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: animationDelay + 0.4 }}
        className={cn(
          "absolute inset-0 flex items-center justify-center pt-4 font-['splash']",
          "text-5xl sm:text-7xl md:text-8xl lg:text-9xl",
          insideColor,
          insideClassName,
        )}
      >
        {insideWord}
      </motion.h2>
    </Component>
  );
};

export default LayeredText;
