"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LayeredText from "./LayeredText";
import Lightbox from "./Lightbox";
import ShareButton from "./ShareButton";

const artworkImages = [
  "/assets/artwork/art3.png",
  "/assets/artwork/art4.png",
  "/assets/artwork/art.png",
  "/assets/artwork/art1.png",
  "/assets/artwork/art2.png",
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const leftColumnVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const centerColumnVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const rightColumnVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

function Artwork() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNavigate = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      <LayeredText
        mainWord="ARTWORK"
        insideWord="Artwork"
        mainClassName="!text-[120px] md:!text-[200px] -my-2 md:-my-4 sm:-my-8 lg:-my-16"
        insideClassName="!text-[40px] md:!text-[64px]"
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-base md:text-[20px] mb-8 md:mb-12 font-[poppins]"
      >
        Drawings from my sketchbook, shaped by patience and detail.
      </motion.p>

      {/* Desktop Layout - 3 columns with staggered animations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="hidden xs:flex items-center justify-center gap-4"
      >
        <motion.div variants={leftColumnVariants} className="flex flex-col">
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer mb-3"
            onClick={() => openLightbox(0)}
          >
            <Image
              src="/assets/artwork/art3.png"
              alt="Artwork 1"
              width={500}
              height={700}
              className="rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            onClick={() => openLightbox(3)}
          >
            <Image
              src="/assets/artwork/art1.png"
              alt="Artwork 2"
              width={500}
              height={700}
              className="rounded-lg object-cover"
            />
          </motion.div>
        </motion.div>
        <motion.div variants={centerColumnVariants} className="flex items-center justify-center h-full">
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            onClick={() => openLightbox(1)}
          >
            <Image
              src="/assets/artwork/art4.png"
              alt="Artwork 1"
              width={580}
              height={700}
              className="rounded-lg object-cover"
            />
          </motion.div>
        </motion.div>
        <motion.div variants={rightColumnVariants}>
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer mb-3"
            onClick={() => openLightbox(2)}
          >
            <Image
              src="/assets/artwork/art.png"
              alt="Artwork 1"
              width={500}
              height={700}
              className="rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            onClick={() => openLightbox(4)}
          >
            <Image
              src="/assets/artwork/art2.png"
              alt="Artwork 2"
              width={500}
              height={700}
              className="rounded-lg object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Layout - Single column grid with stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="xs:hidden grid grid-cols-1 gap-6"
      >
        {artworkImages.map((src, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={src}
              alt={`Artwork ${index + 1}`}
              width={500}
              height={700}
              className="w-full rounded-lg object-cover shadow-md"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Share button with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center mt-8"
      >
        <ShareButton title="My Artwork Gallery" />
      </motion.div>

      {/* Lightbox */}
      <Lightbox
        images={artworkImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNavigate={handleNavigate}
      />
    </section>
  );
}

export default Artwork;
