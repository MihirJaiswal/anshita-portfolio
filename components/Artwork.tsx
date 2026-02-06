'use client'
import Image from "next/image"
import { motion } from "framer-motion";
import { artworks } from "@/constant";
import LayeredText from "./LayeredText";

function Artwork() {
  return (
      <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <LayeredText mainWord="ARTWORK" insideWord="Artwork" mainClassName="!text-[200px] -my-4 sm:-my-8 md:-my-16" insideClassName="!text-[64px]" />
        <p className="text-center text-[20px] mb-12">
          Drawings from my sketchbook, shaped by patience and detail.
        </p>

        <div className="flex items-center justify-center gap-9">
          <div className="flex flex-col">
            <Image
              src='/assets/artwork/art3.png'
              alt="Artwork 1"  
              width={500}
              height={700}
              className="mb-6 rounded-lg object-cover"
            />
            <Image
              src='/assets/artwork/art1.png'
              alt="Artwork 2" 
              width={500}
              height={700}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <Image
              src='/assets/artwork/art4.png'
              alt="Artwork 1"  
              width={580}
              height={700}
              className="mb-6 rounded-lg object-cover"
            />
          </div>
          <div>
            <Image
              src='/assets/artwork/art.png'
              alt="Artwork 1"  
              width={500}
              height={700}
              className="mb-6 rounded-lg object-cover"
            />
            <Image
              src='/assets/artwork/art2.png'
              alt="Artwork 2" 
              width={500}
              height={700}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
  )
}

export default Artwork