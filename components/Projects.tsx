"use client";
import Link from "next/link";
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
            <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-5 overflow-hidden">
              <h3 className="text-2xl xs:text-[35px] md:text-[50px] lg:text-[64px] font-[splash] font-medium sm:whitespace-nowrap">
                {project.title}
              </h3>
              <Image
                src="/assets/line.svg"
                alt="decorative line"
                width={200}
                height={100}
                className="hidden xs:block h-20 w-full object-contain my-4"
              />
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0">
              <div className="w-full lg:max-w-lg">
                <div className="space-y-3 lg:space-y-4 mb-4 md:mb-6">
                  {project.description.map((desc, i) => (
                    <div
                      key={i}
                      className="flex gap-2 lg:gap-3 text-gray-700 leading-relaxed"
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
                <div className="ml-5 flex items-center gap-4">
                  <BrushStroke className="h-10 md:h-12 flex items-center justify-center w-fit">
                    <Link href={`/projects/${project.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 md:px-6.5 py-2 text-black text-sm font-medium rounded-sm transition-all"
                      >
                        View Case Study
                      </motion.button>
                    </Link>
                  </BrushStroke>
                </div>
              </div>
              <div className="w-full lg:w-auto">
                <Link href={`/projects/${project.id}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={500}
                    width={500}
                    unoptimized
                    className="w-full object-cover h-full lg:h-68 py-8 lg:py-0 cursor-pointer hover:opacity-95 transition-opacity"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
