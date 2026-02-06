"use client";
import { motion } from "motion/react";
import BrushStroke from "./BrushStroke";
import Signature from "./signature/Signature";

function Navbar() {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#E8E8E6]/80 backdrop-blur-sm"
      >
        <div className="flex justify-between items-center max-w-5xl mx-auto px-8">
          {/* Logo */}
        {/* <div className="w-12">
          <Signature/>
        </div> */}

        {/* Navigation Links */}
        <div className="flex gap-16 text-sm tracking-wide text-gray-800">
          {["Home", "About", "Work", "Connect"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative group font-poppins text-base ${index === 0 ? "text-black font-medium" : " hover:text-black"} transition-colors`}
              whileHover={{ scale: 1.02 }}
            >
              {item}
              {index === 0 && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black" />
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Resume Button */}
        <BrushStroke className="h-10 flex items-center">
          <motion.a
            href="#resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-12 text-sm font-poppins"
          >
            Resume
          </motion.a>
        </BrushStroke>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
