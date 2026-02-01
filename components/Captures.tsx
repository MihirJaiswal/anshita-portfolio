import { motion } from "motion/react"
import Image from "next/image"
import LayeredText from "./LayeredText"
import { BentoGrid } from "./BentoGrid"
import { captures } from "@/constant"

function Captures() {
  // Specific layout for each image to match the bento grid style
  const getLayoutClass = (index: number) => {
    const pattern = index % 9;
    switch(pattern) {
      case 0: return "col-span-1 row-span-1"; // butterfly
      case 1: return "col-span-2 row-span-1"; // bike/door
      case 2: return "col-span-1 row-span-1"; // dark tree
      case 3: return "col-span-1 row-span-1"; // circular sculpture
      case 5: return "col-span-1 row-span-1"; // stairs
      case 6: return "col-span-1 row-span-1"; // statue
      case 7: return "col-span-2 row-span-1"; // sunset lamps
      case 8: return "col-span-1 row-span-1"; // butterfly on flower
      default: return "col-span-2 row-span-1";
    }
  }

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <LayeredText 
        mainWord="CAPTURES" 
        insideWord="Captures" 
        mainClassName="!text-[200px] -my-4 sm:-my-8 md:-my-16" 
        insideClassName="!text-[64px]"  
      />
      <p className="text-center text-[20px] mb-16 font-[poppins] mx-auto">
        Photographs I&apos;ve captured by noticing light, spaces, and moments
        worth pausing for.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-x-7 gap-y-8">
        {captures.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={getLayoutClass(index)}
          >
            <BentoGrid
            height="h-[300px]"
              component={
                <div className="relative w-full h-full group cursor-pointer">
                  <Image
                    src={src}
                    alt={`Capture ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              }
              enableTitle={false}
              enableDescription={false}
              isFull={true}
              padding="p-0"
              className="h-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Captures