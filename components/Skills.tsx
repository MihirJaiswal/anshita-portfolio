"use client";
import { skills, tools } from "@/constant";
import { motion } from "motion/react";
import Image from "next/image";
import BrushStroke from "./BrushStroke";

function Skills() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-start  gap-12 lg:gap-16 justify-between">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:max-w-[50%]"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-[splash] font-medium whitespace-nowrap">
              Skills
            </h3>
            <Image
              src="/assets/line.svg"
              alt="decorative line"
              width={200}
              height={5}
              className="h-2 w-[65%] xs:w-[75%] md:w-54 lg:w-72 object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-5.5">
            {skills.map((skill, index) => (
              <BrushStroke
                key={skill}
                className="h-10 sm:h-11 lg:h-12.5 flex items-center justify-center"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 text-black text-xs sm:text-sm font-medium rounded-sm cursor-default transition-shadow font-[poppins]"
                >
                  {skill}
                </motion.span>
              </BrushStroke>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-auto"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-[splash] font-medium whitespace-nowrap">
              Tools
            </h3>
            <Image
              src="/assets/line.svg"
              alt="decorative line"
              width={200}
              height={4}
              className="h-1 w-[70%] xs:w-[80%] md:w-48 lg:w-54 object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-start lg:justify-start">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-20 h-20 relative">
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
