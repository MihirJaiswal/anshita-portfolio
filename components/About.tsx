'use client'
import { motion } from "motion/react";
import Image from "next/image";
import LayeredText from "./LayeredText";

function About() {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto">
      <div className="flex justify-between gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex-1 items-center justify-center"
        >
          <div className="relative w-79 h-108 mx-auto">
            <div className="relative w-full h-full z-20">
              <Image
                src="/assets/anshita-paper.png"
                alt="Anshita Portrait"
                fill
                unoptimized
                loading="lazy"
                className="object-cover"
              />
            </div>

            {/* Decorative Lines*/}
            <div className="absolute top-[5%] right-[-30%]">
             <Image
              src="/assets/about/line1.svg"
              alt="line 1"
              width={119}
              height={64}
              className="relative z-10 w-30 h-16 object-contain"
            />
            <span className="absolute top-[-50%] right-[-29%] text-[32px] font-[splash]">Creative</span>
            </div>
            <div className="absolute -top-[8%] left-[-15%]">
            <Image
              src="/assets/about/line6.svg"
              alt="line 6"
              width={64}
              height={85}
              className="relative z-10 w-16 h-21 object-contain"
            />
            <span className="absolute top-[-35%] right-[-90%] text-[32px] font-[splash] whitespace-nowrap">Detail-oriented</span>
            </div>
            <div className="absolute top-[45%] left-[-35%] ">
            <Image
              src="/assets/about/line5.svg"
              alt="line 5"
              width={131}
              height={48}
              className="relative z-10 w-32 h-12 object-contain"
            />
            <span className="absolute top-[-60%] right-[40%] text-[32px] font-[splash] whitespace-nowrap">Sociable</span>
            </div>
            
            
            <div className="absolute top-[45%] right-[-30%] ">
            <Image
              src="/assets/about/line2.svg"
              alt="line 2"
              width={104}
              height={74}
              className="relative z-10 w-26 h-18.5 object-contain"
            />
            <span className="absolute bottom-[-50%] right-[-45%] text-[32px] font-[splash] whitespace-nowrap">Empathic</span>
            </div>
            <div className="absolute bottom-[5%] left-[-35%]">
            <Image
              src="/assets/about/line4.svg"
              alt="line 4"
              width={119}
              height={64}
              className="relative z-10 w-30 h-16 object-contain"
            />
            <span className="absolute bottom-[-54%] left-[-55%] text-[32px] font-[splash] whitespace-nowrap">Motivated</span>
            </div>
            <div className="absolute -bottom-[5%] right-[-15%] ">
            <Image
              src="/assets/about/line3.svg"
              alt="line 3"
              width={118}
              height={65}
              className="relative z-10 w-29.5 h-16 object-contain"
            />
            <span className="absolute bottom-[-65%] right-[-50%] text-[32px] font-[splash] whitespace-nowrap">Fast learner</span>
            </div>
          </div>
          <div>
            <Image
              src="/assets/about/star1.svg"
              alt="star"
              width={5}
              height={5}
              className="absolute -bottom-[12%] left-[25%] transform w-7 h-7"
            />
            <Image
              src="/assets/about/star2.svg"
              alt="star"
              width={5}
              height={5}
              className="absolute -bottom-[15%] left-[22%] transform w-5 h-5"
            />
            <Image
              src="/assets/about/star2.svg"
              alt="star"
              width={5}
              height={5}
              className="absolute -top-[15%] right-[22%] transform w-5 h-5"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-start justify-end"
        >
          <LayeredText
            mainWord="HELLO"
            insideWord="Hello"
            mainClassName="!text-[200px] -my-4 sm:-my-8 md:-my-16"
            insideClassName="!text-[64px]"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 leading-relaxed max-w-md p-2"
          >
            <p className="font-['Poppins'] font-normal text-[20px] leading-8.5 tracking-normal text-justify align-middle">
              I&apos;m Anshita, a UI/UX designer who loves understanding people
              and how they interact with digital spaces. I care deeply about the why behind every design decision and the
              small details that make an experience feel right. For me, design
              isn&apos;t just about screens or visuals, it&apos;s about creating
              interfaces that feel intuitive and easy to use. If something works
              without explanation, I know I&apos;ve done my job.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
