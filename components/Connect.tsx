"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LayeredText from "./LayeredText";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const floatAnimation = {
  y: [-5, 5, -5],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const socialLinks = [
  {
    href: "mailto:your-email@example.com",
    src: "/assets/connect/mail.png",
    alt: "mail",
    position: "top-[20%] left-[13.5%]",
    lineSrc: "/assets/connect/line1.svg",
    lineClass: "w-47 h-40",
    iconPosition: "top-[-38%] -left-[40%]",
  },
  {
    href: "https://twitter.com/yourhandle",
    src: "/assets/connect/x.png",
    alt: "x",
    position: "bottom-[36%] left-[6%]",
    lineSrc: "/assets/connect/line2.svg",
    lineClass: "w-50 h-16",
    iconPosition: "top-[0%] -left-[40%]",
    external: true,
  },
  {
    href: "https://linkedin.com/in/yourprofile",
    src: "/assets/connect/linkedin.png",
    alt: "linkedin",
    position: "top-[25%] right-[15%]",
    lineSrc: "/assets/connect/line3.svg",
    lineClass: "w-40 h-34",
    iconPosition: "top-[-65%] -right-[62%]",
    external: true,
  },
  {
    href: "https://instagram.com/yourhandle",
    src: "/assets/connect/instagram.png",
    alt: "instagram",
    position: "top-[54%] right-[3.5%]",
    lineSrc: "/assets/connect/line4.svg",
    lineClass: "w-60 h-30",
    iconPosition: "top-[0%] -right-[40%]",
    external: true,
  },
];

function Connect() {
  return (
    <section
      id="connect"
      className="pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative pb-0"
    >
      <LayeredText
        mainWord="CONNECT"
        insideWord="Connect"
        mainClassName="!text-[120px] md:!text-[200px] -my-2 md:-my-4 sm:-my-8 lg:-my-16"
        insideClassName="!text-[40px] md:!text-[64px]"
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center font-poppins text-base md:text-xl mb-10 md:mb-16 px-4"
      >
        If something here stayed with you, I&apos;d love to hear from you.
      </motion.p>

      {/* Desktop Layout - Image with decorative lines and floating icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="hidden lg:flex items-center justify-center relative z-0"
      >
        <motion.div className="relative">
          <Image
            src="/assets/connect/anshita-connect.png"
            alt="anshita"
            height={260}
            width={400}
            className="relative"
          />
        </motion.div>

        {/* Animated social links */}
        {socialLinks.map((link, index) => (
          <motion.div
            key={link.alt}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`absolute ${link.position}`}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Image
                src={link.lineSrc}
                alt={`line ${index + 1}`}
                width={119}
                height={64}
                className={`relative z-10 ${link.lineClass} object-contain`}
              />
            </motion.div>
            <motion.a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`absolute ${link.iconPosition} text-[32px] z-20`}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -8, 0],
                transition: {
                  duration: 2.5 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                },
              }}
            >
              <Image
                src={link.src}
                alt={link.alt}
                width={110}
                height={110}
                unoptimized
                className="drop-shadow-lg"
              />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile Layout - Simple centered layout with icons */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:hidden flex flex-col items-center gap-8"
      >
        <div className="flex items-center justify-center gap-2 sm:gap-6 w-full">
          {socialLinks.map((link) => (
            <motion.a
              key={link.alt}
              variants={itemVariants}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center"
            >
              <Image
                src={link.src}
                alt={link.alt}
                width={80}
                height={80}
                unoptimized
                className="drop-shadow-md"
              />
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          animate={{
            y: [0, -5, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src="/assets/connect/anshita-connect.png"
            alt="anshita"
            height={400}
            width={300}
            className="w-full max-w-[500px] h-88 sm:h-104"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Connect;
