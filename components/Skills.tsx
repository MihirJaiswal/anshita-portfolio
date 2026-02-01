import { skills, tools } from "@/constant";
import { motion } from "motion/react";
import Image from "next/image";

function Skills() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-16 justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[50%]"
        >
          <div className="flex items-center gap-4 mb-4">
            <h3 className="text-5xl sm:text-6xl font-[splash] font-medium">
              Skills
            </h3>
            <Image
              src="/assets/line.svg"
              alt="decorative line"
              width={200}
              height={5}
              className="h-1 object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-5.5">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-2.5 bg-[#A5C9D1CC] text-black text-sm font-medium rounded-sm cursor-default transition-shadow hover:shadow-md font-[poppins]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4">
            <h3 className="text-5xl sm:text-6xl font-[splash] font-medium">
              Tools
            </h3>
            <Image
              src="/assets/line.svg"
              alt="decorative line"
              width={200}
              height={4}
              className="h-1 object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-4">
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
                <div>
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} logo`}
                    width={80}
                    height={80}
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
