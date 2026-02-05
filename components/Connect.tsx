"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LayeredText from "./LayeredText";

function Connect() {
  return (
    <section
      id="connect"
      className="pt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative pb-0"
    >
      <LayeredText
        mainWord="CONNECT"
        insideWord="Connect"
        mainClassName="!text-[200px] -my-4 sm:-my-8 md:-my-16"
        insideClassName="!text-[64px]"
      />
      <p className="text-center font-poppins text-xl mb-16">
        If something here stayed with you, I&apos;d love to hear from you.
      </p>
      <div className="flex items-center justify-center relative z-0">
        <Image
          src="/assets/connect/anshita-connect.png"
          alt="anshita"
          height={260}
          width={400}
        />
      </div>
    </section>
  );
}

export default Connect;
