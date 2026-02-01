import Image from "next/image"
import { motion } from "framer-motion";
import { artworks } from "@/constant";
import LayeredText from "./LayeredText";

function Artwork() {
  return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <LayeredText mainWord="ARTWORK" insideWord="Artwork" mainClassName="!text-[200px] -my-4 sm:-my-8 md:-my-16" insideClassName="!text-[64px]" />
        <p className="text-center text-[20px] mb-12">
          Drawings from my sketchbook, shaped by patience and detail.
        </p>

        <div className="columns-2 md:columns-3 gap-6 space-y-6">
          {artworks.map((artwork, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative break-inside-avoid ${artwork.rotate} ${artwork.torn ? "before:absolute before:inset-0 before:bg-white before:z-0 before:shadow-lg" : ""}`}
            >
              <div
                className={`relative overflow-hidden ${artwork.torn ? "p-2 bg-white shadow-xl" : "rounded-sm shadow-md"}`}
              >
                {artwork.torn && (
                  <div className="absolute top-0 left-0 right-0 h-4 bg-[linear-gradient(45deg,transparent_33.333%,#fff_33.333%,#fff_66.667%,transparent_66.667%)] bg-[length:8px_16px] z-10" />
                )}
                <div className="relative aspect-[3/4]">
                  <Image
                    src={artwork.src}
                    alt={`Artwork ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default Artwork