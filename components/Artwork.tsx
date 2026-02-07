"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { artworks } from "@/constant";
import LayeredText from "./LayeredText";

function Artwork() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <LayeredText
        mainWord="ARTWORK"
        insideWord="Artwork"
        mainClassName="!text-[120px] md:!text-[200px] -my-2 md:-my-4 sm:md:-my-8 lg:md:-my-16"
        insideClassName="!text-[40px] md:!text-[64px]"
      />
      <p className="text-center text-base md:text-[20px] mb-8 md:mb-12 font-[poppins]">
        Drawings from my sketchbook, shaped by patience and detail.
      </p>

      {/* Desktop Layout - 3 columns */}
      <div className="hidden md:flex items-center justify-center gap-9">
        <div className="flex flex-col">
          <Image
            src="/assets/artwork/art3.png"
            alt="Artwork 1"
            width={500}
            height={700}
            className="mb-6 rounded-lg object-cover"
          />
          <Image
            src="/assets/artwork/art1.png"
            alt="Artwork 2"
            width={500}
            height={700}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center justify-center h-full">
          <Image
            src="/assets/artwork/art4.png"
            alt="Artwork 1"
            width={580}
            height={700}
            className="mb-6 rounded-lg object-cover"
          />
        </div>
        <div>
          <Image
            src="/assets/artwork/art.png"
            alt="Artwork 1"
            width={500}
            height={700}
            className="mb-6 rounded-lg object-cover"
          />
          <Image
            src="/assets/artwork/art2.png"
            alt="Artwork 2"
            width={500}
            height={700}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Mobile Layout - Single column grid */}
      <div className="md:hidden grid grid-cols-1 gap-6">
        <Image
          src="/assets/artwork/art3.png"
          alt="Artwork 1"
          width={500}
          height={700}
          className="w-full rounded-lg object-cover"
        />
        <Image
          src="/assets/artwork/art4.png"
          alt="Artwork 2"
          width={580}
          height={700}
          className="w-full rounded-lg object-cover"
        />
        <Image
          src="/assets/artwork/art.png"
          alt="Artwork 3"
          width={500}
          height={700}
          className="w-full rounded-lg object-cover"
        />
        <Image
          src="/assets/artwork/art1.png"
          alt="Artwork 4"
          width={500}
          height={700}
          className="w-full rounded-lg object-cover"
        />
        <Image
          src="/assets/artwork/art2.png"
          alt="Artwork 5"
          width={500}
          height={700}
          className="w-full rounded-lg object-cover"
        />
      </div>
    </section>
  );
}

export default Artwork;
