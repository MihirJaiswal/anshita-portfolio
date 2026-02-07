"use client";
import { projects } from "@/constant";
import { motion } from "motion/react";
import Image from "next/image";
import LayeredText from "./LayeredText";
import BrushStroke from "./BrushStroke";

function Projects() {
  return (
    <section
      id="work"
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Section Header */}
      <LayeredText
        mainWord="PROJECTS"
        insideWord="Projects"
        mainClassName="!text-[120px] md:!text-[200px]"
        insideClassName="!text-[40px] md:!text-[64px]"
      />

      <div className="space-y-12 md:space-y-24">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Content */}
            <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-5">
              <h3 className="text-3xl md:text-[64px] font-[splash] font-medium whitespace-nowrap">
                {project.title}
              </h3>
              <Image
                src="/assets/line.svg"
                alt="decorative line"
                width={200}
                height={100}
                className="h-10 md:h-20 w-full object-contain my-4"
              />
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
              <div className="w-full md:max-w-lg">
                <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                  {project.description.map((desc, i) => (
                    <div
                      key={i}
                      className="flex gap-2 md:gap-3 text-gray-700 leading-relaxed"
                    >
                      <Image
                        src="/assets/projects/arrow.svg"
                        alt="dot"
                        width={12}
                        height={12}
                        className="w-3 h-3 mt-2 object-contain shrink-0"
                      />
                      <p className="text-base md:text-[20px]">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="ml-0 md:ml-6">
                  <BrushStroke className="h-10 md:h-12 flex items-center justify-center w-fit">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-5 md:px-6.5 py-2 text-black text-sm font-medium rounded-sm transition-all"
                    >
                      View Case Study
                    </motion.button>
                  </BrushStroke>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={500}
                  width={500}
                  className="w-full object-cover h-60 md:h-76"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
