import { motion } from "motion/react"

function Navbar() {
  return (
    <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-6 bg-[#E8E8E6]/80 backdrop-blur-sm"
      >
        <div className="flex gap-12 text-sm tracking-widest uppercase font-medium text-gray-800">
          {["Home", "About", "Work", "Connect"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative group ${index === 0 ? "text-black" : "text-gray-600 hover:text-black"} transition-colors`}
              whileHover={{ scale: 1.05 }}
            >
              {item}
              {index === 0 && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-black" />
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </motion.nav>
  )
}

export default Navbar