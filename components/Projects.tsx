import { projects } from "@/constant";
import { motion } from "motion/react"
import Image from "next/image";
import LayeredText from "./LayeredText";
import { CornerDownRight } from "lucide-react";

function Projects() {
  return (
    <section
        id="work"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
      >
        {/* Section Header */}
        <LayeredText mainWord="PROJECTS" insideWord="Projects" mainClassName="!text-[200px]" insideClassName="!text-[64px]" />

        <div className="space-y-24">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Content */}
              <div className="flex items-center gap-4 mb-5">
                    <h3
                    className="text-xl sm:text-[64px] font-[splash] font-medium whitespace-nowrap"
                  >
                    {project.title}
                  </h3>
                  <Image
                    src="/assets/line.svg"
                    alt="decorative line"
                    width={200}
                    height={100}
                    className="h-20 w-full object-contain my-4"
                  />
                </div>
              <div className={project.reverse ? "md:col-start-2" : ""}>         
                <div className="space-y-4 mb-6">
                  {project.description.map((desc, i) => (
                    <div
                      key={i}
                      className="flex gap-3 text-gray-700 leading-relaxed"
                    >
                        <Image
                          src="/assets/projects/arrow.svg"
                          alt="dot"
                          width={12}
                          height={12}
                          className="w-3 h-3 mt-2 object-contain shrink-0"
                        />
                      <p className="text-[20px]">{desc}</p>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-[#A5C9D1CC] text-black text-sm font-medium rounded-sm shadow-sm hover:shadow-md transition-all ml-6"
                >
                  View Case Study
                </motion.button>
              </div>

              {/* Device Mockup */}
              {/* <div
                className={`relative ${project.reverse ? "md:col-start-1" : ""}`}
              >
                {project.device === "mobile" ? (
                  <div className="flex justify-center gap-4">
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative w-40 h-80 bg-black rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl z-10" />
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative w-40 h-80 bg-black rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800 mt-8"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl z-10" />
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                        <div className="absolute inset-0 bg-green-500 flex items-center justify-center">
                          <span className="text-white text-4xl">🎵</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative mx-auto w-full max-w-lg"
                  >
                    <div className="relative bg-gray-800 rounded-t-xl p-4 pt-2 shadow-2xl">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
                      <div className="mt-4 bg-white rounded-lg overflow-hidden aspect-16/10 relative">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="h-4 bg-gray-700 rounded-b-lg mx-4" />
                    <div className="h-2 bg-gray-600 rounded-b-lg mx-8" />
                  </motion.div>
                )}
              </div> */}
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default Projects