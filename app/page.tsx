// app/page.tsx (Complete with all sections)
"use client";

import About from "@/components/About";
import Artwork from "@/components/Artwork";
import Captures from "@/components/Captures";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";
import Image from "next/image";



const socials = [
  { name: "Email", icon: "✉", position: "left-4 top-0" },
  { name: "LinkedIn", icon: "in", position: "right-4 top-0" },
  { name: "X", icon: "X", position: "left-8 bottom-20" },
  { name: "Instagram", icon: "IG", position: "right-8 bottom-16" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E8E8E6] overflow-x-hidden">
      {/* Navigation */}
      <Navbar/>
      {/* Hero Section */}
      <Hero/>
      {/* About Section */}
      <About/>
      {/* Skills & Tools Section */}
      <Skills/>
      {/* Projects Section */}
      <Projects/>
      {/* Captures Section */}
      <Captures/>
      {/* Artwork Section */}
      <Artwork/>
      {/* Connect Section */}
      <section
        id="connect"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative"
      >
        <div className="relative text-center mb-12">
          <h2
            className="text-[60px] sm:text-[80px] md:text-[100px] font-bold tracking-tighter leading-none select-none"
            style={{
              fontFamily: "var(--font-playfair)",
              WebkitTextStroke: "2px #B5D1E1",
              color: "transparent",
            }}
          >
            CONNECT
          </h2>
          <span
            className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl text-black pt-2"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            Connect
          </span>
        </div>
        <p className="text-center text-gray-700 mb-16">
          If something here stayed with you, I&apos;d love to hear from you.
        </p>

        {/* Social Connection Hub */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Center Portrait */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative w-48 h-64 z-10"
          >
            <div className="absolute inset-0 bg-white rounded-sm shadow-2xl transform rotate-1" />
            <div className="relative w-full h-full overflow-hidden rounded-sm">
              <Image
                src="/api/placeholder/200/300"
                alt="Anshita"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Social Icons with curved lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 5 }}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#B8D4E3" />
              </marker>
            </defs>
            <motion.path
              d="M 200 150 Q 150 200 120 280"
              fill="none"
              stroke="#B8D4E3"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <motion.path
              d="M 400 150 Q 450 200 480 280"
              fill="none"
              stroke="#B8D4E3"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
            <motion.path
              d="M 220 350 Q 180 400 160 450"
              fill="none"
              stroke="#B8D4E3"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />
            <motion.path
              d="M 380 350 Q 420 400 440 450"
              fill="none"
              stroke="#B8D4E3"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6 }}
            />
          </svg>

          {/* Social Buttons */}
          {[
            { icon: "✉", label: "Email", pos: "left-[10%] top-[25%]" },
            { icon: "in", label: "LinkedIn", pos: "right-[10%] top-[25%]" },
            { icon: "X", label: "Twitter", pos: "left-[15%] bottom-[20%]" },
            { icon: "IG", label: "Instagram", pos: "right-[15%] bottom-[20%]" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href="#"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: index * 0.1 + 0.5,
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`absolute ${social.pos} w-16 h-16 bg-[#B8D4E3] rounded-sm shadow-lg flex items-center justify-center text-2xl font-bold text-gray-800 z-20`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-300 bg-[#E8E8E6] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; 2025 Anshita Rathore</p>
          <p>Designed and built with care.</p>
        </div>
      </footer>
    </main>
  );
}
