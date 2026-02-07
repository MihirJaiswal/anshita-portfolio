"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LayeredText from "./LayeredText";

function Connect() {
  return (
    <section
      id="connect"
      className="pt-12 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative pb-0"
    >
      <LayeredText
        mainWord="CONNECT"
        insideWord="Connect"
        mainClassName="!text-[120px] md:!text-[200px] -my-2 md:-my-4 sm:md:-my-8 lg:md:-my-16"
        insideClassName="!text-[40px] md:!text-[64px]"
      />
      <p className="text-center font-poppins text-base md:text-xl mb-10 md:mb-16 px-4">
        If something here stayed with you, I&apos;d love to hear from you.
      </p>

      {/* Desktop Layout - Image with decorative lines */}
      <div className="hidden lg:flex items-center justify-center relative z-0">
        <Image
          src="/assets/connect/anshita-connect.png"
          alt="anshita"
          height={260}
          width={400}
          className="relative"
        />
        <div className="absolute top-[20%] left-[13.5%]">
          <Image
            src="/assets/connect/line1.svg"
            alt="line 1"
            width={119}
            height={64}
            className="relative z-10 w-47 h-40 object-contain"
          />
          <div className="absolute top-[-38%] -left-[40%] text-[32px] z-20">
            <Image
              src='/assets/connect/mail.png'
              alt="mail"
              width={110}
              height={110}
              unoptimized
            />
          </div>
        </div>
        <div className="absolute bottom-[36%] left-[6%]">
          <Image
            src="/assets/connect/line2.svg"
            alt="line 6"
            width={64}
            height={85}
            className="relative z-10 w-50 h-16 object-contain"
          />
          <div className="absolute top-[0%] -left-[40%] text-[32px] z-20">
            <Image
              src='/assets/connect/x.png'
              alt="x"
              width={110}
              height={110}
              unoptimized
            />
          </div>
        </div>
        <div className="absolute top-[25%] right-[15%] ">
          <Image
            src="/assets/connect/line3.svg"
            alt="line 5"
            width={131}
            height={48}
            className="relative z-10 w-40 h-34 object-contain"
          />
          <div className="absolute top-[-65%] -right-[62%] text-[32px] z-20">
            <Image
              src='/assets/connect/linkedin.png'
              alt="linkedin"
              width={110}
              height={110}
              unoptimized
            />
          </div>
        </div>
        <div className="absolute top-[54%] right-[3.5%]">
          <Image
            src="/assets/connect/line4.svg"
            alt="line 5"
            width={131}
            height={48}
            className="relative z-10 w-60 h-30 object-contain"
          />
          <div className="absolute top-[0%] -right-[40%] text-[32px] z-20">
            <Image
              src='/assets/connect/instagram.png'
              alt="instagram"
              width={110}
              height={110}
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Simple centered layout with icons */}
      <div className="lg:hidden flex flex-col items-center gap-8">
        <div className="flex items-center justify-center gap-2 sm:gap-6 w-full">
          <motion.a
            href="mailto:your-email@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center"
          >
            <Image
              src='/assets/connect/mail.png'
              alt="mail"
              width={80}
              height={80}
              unoptimized
            />
          </motion.a>
          
          <motion.a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center"
          >
            <Image
              src='/assets/connect/x.png'
              alt="x"
              width={80}
              height={80}
              unoptimized
            />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center"
          >
            <Image
              src='/assets/connect/linkedin.png'
              alt="linkedin"
              width={80}
              height={80}
              unoptimized
            />
          </motion.a>
          
          <motion.a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center"
          >
            <Image
              src='/assets/connect/instagram.png'
              alt="instagram"
              width={80}
              height={80}
              unoptimized
            />
          </motion.a>
        </div>
        <Image
          src="/assets/connect/anshita-connect.png"
          alt="anshita"
          height={200}
          width={300}
          className="w-full max-w-[300px] h-auto"
        />
      </div>
    </section>
  );
}

export default Connect;