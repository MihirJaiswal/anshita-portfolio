"use client";
import { motion } from "motion/react";
import { useState } from "react";
import BrushStroke from "./BrushStroke";
import SignatureAnimation from "./Signature";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-[#E8E8E6]/80 backdrop-blur-sm"
      >
        <div className="flex justify-between items-center max-w-5xl mx-auto lg:px-8">
          <div className="w-12 scale-75 xs:scale-100 ml-2 xs:ml-4">
            <SignatureAnimation />
          </div>

          <div className="hidden md:flex gap-8 lg:gap-16 text-sm tracking-wide text-gray-800">
            {["Home", "About", "Work", "Connect"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(0)}
                className={`relative font-poppins text-base ${
                  index === 0 ? "text-black font-medium" : "hover:text-black"
                } transition-colors`}
                whileHover={{ scale: 1.02 }}
              >
                {item}
                <motion.div
                  animate={{
                    scaleX: hoveredIndex === index || index === 0 ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute -bottom-1 left-0 w-full origin-left"
                >
                  <Image
                    src="/assets/line2.svg"
                    alt=""
                    width={48}
                    height={2}
                    className="w-full h-0.5"
                  />
                </motion.div>
              </motion.a>
            ))}
          </div>

          <BrushStroke className="hidden md:flex h-10 items-center">
            <motion.a
              href="#resume"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 lg:px-6 py-12 text-sm font-poppins"
            >
              Resume
            </motion.a>
          </BrushStroke>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="h-0.5"
            >
              <Image
                src="/assets/line3.svg"
                alt=""
                width={24}
                height={2}
                className="h-1"
              />
            </motion.div>
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5"
            >
              <Image
                src="/assets/line3.svg"
                alt=""
                width={24}
                height={2}
                className="h-1"
              />
            </motion.div>
            <motion.div
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="h-0.5"
            >
              <Image
                src="/assets/line3.svg"
                alt=""
                width={24}
                height={2}
                className="h-1"
              />
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={
            isOpen
              ? { height: "auto", opacity: 1, filter: "blur(0px)" }
              : { height: 0, opacity: 0, filter: "blur(150px)" }
          }
          transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 flex flex-col gap-4">
            {["Home", "About", "Work", "Connect"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`font-poppins text-base ${
                  index === 0 ? "text-black font-medium" : "text-gray-800"
                } py-2`}
                whileTap={{ scale: 0.98 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}

export default Navbar;
