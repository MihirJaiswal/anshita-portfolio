import React, { useState } from "react";
import { motion } from "framer-motion";

const SignatureAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSignatureDone, setIsSignatureDone] = useState(false);

  // The path data extracted from your SVG
  const pathData =
    "M0.5 32.5C0.644682 32.5 2.81714 31.25 7.62353 27.8874C10.4594 25.9033 13.5874 22.8372 17.1453 18.8865C20.7032 14.9357 24.465 10.0608 26.837 6.83066C29.2089 3.60056 30.0771 2.16307 30.4881 1.61005C30.7023 1.32183 29.4501 4.69336 26.9707 10.9556C25.6458 14.302 24.7807 18.1554 24.259 20.5257C23.7372 22.8959 23.7372 23.7084 23.5925 23.9395C22.6786 25.399 20.826 19.0077 18.6305 16.8183C17.624 15.8145 16.3605 15.5816 15.5954 15.4869C13.8222 15.2674 11.3294 16.394 9.56581 17.5654C9.21502 17.7984 9.05393 18.163 8.94213 18.449C8.83033 18.7349 8.83033 18.985 9.22821 19.3012C10.2857 20.1419 11.8928 20.3789 13.1687 20.3476C13.7942 20.3323 14.3722 20.2539 16.9491 18.9404C19.526 17.627 24.0836 15.0645 26.7208 13.6819C29.358 12.2994 29.9368 12.1744 30.3796 12.1725C30.8224 12.1706 31.1118 12.2956 31.2608 12.9225C31.67 14.6432 31.1205 16.8334 30.6098 18.5048C30.4035 19.1798 30.2437 19.4887 31.0734 18.4935C35.9713 12.6186 36.669 11.7331 37.1425 11.2909C37.5169 10.9412 37.9865 13.663 38.1673 17.2302C38.2282 18.4315 38.7099 18.36 39.9814 16.5778C43.6628 11.4176 45.7315 7.37706 45.6964 7.12233C45.6141 6.52422 45.0015 8.31834 45.0738 8.94712C45.2865 10.7954 46.4615 12.1024 46.6456 14.4035C46.7347 15.5159 45.7381 16.7103 45.0059 17.4082C44.9025 17.5068 45.1418 16.7312 46.9909 14.002C48.84 11.2729 52.2401 6.5229 54.0278 3.88844C55.8156 1.25399 55.8879 0.878988 55.9252 0.560808C55.9915 -0.00538897 54.8773 3.42254 53.197 9.22837C52.1169 12.9604 51.7249 14.9452 51.7239 15.4831C51.7213 16.7259 54.2701 11.807 59.2705 8.32686C60.9305 7.17157 59.47 12.6062 59.7593 13.68C59.8667 14.0785 60.6274 13.8789 61.0703 13.6895C64.4424 12.2473 67.0637 6.68956 67.5449 5.41873C68.2218 3.63092 65.4634 9.51151 65.8613 11.8477C65.9513 12.3763 66.2614 12.6706 66.6264 12.8628C66.9914 13.0551 67.4978 13.1176 68.1927 12.8998C69.7557 12.182 71.1565 11.2918 72.0323 10.5986C72.4017 10.2805 72.6187 10.0305 73.5 9.39409";

  return (
    <div
      className="flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative cursor-pointer group">
        {/* SVG Container */}
        <motion.div
          className="relative z-10"
          animate={{
            rotate: isHovered ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <svg
            width="90"
            height="45"
            viewBox="0 0 74 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            {/* 
              Defs for the filter to make it look like ink 
              (Optional, adds a slight texture)
            */}
            <defs>
              <filter id="ink">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.02"
                  numOctaves="3"
                  result="noise"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
              </filter>
            </defs>

            {/* The Animated Path */}
            <motion.path
              d={pathData}
              stroke="black"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="transparent"
              // Animation Props
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.1,
                },
                opacity: { duration: 0.01 },
              }}
              onAnimationComplete={() => setIsSignatureDone(true)}
            />
          </svg>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isSignatureDone ? 1 : 0,
          }}
          transition={{
            duration: 1
          }}
          className="absolute top-[-37%] right-[5%]"
        >
          <span className="text-xl">.</span>
        </motion.div>
      </div>
    </div>
  );
};

export default SignatureAnimation;
