"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type?: "success" | "error";
}

export default function Toast({
  message,
  isVisible,
  onClose,
  type = "success",
}: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 left-1/2 z-[70] flex items-center gap-3 px-5 py-3.5 bg-[#E8E8E6] text-gray-800 rounded-lg shadow-lg border border-[#A5C9D1]/30 font-[poppins]"
        >
          {type === "success" ? (
            <div className="w-6 h-6 rounded-full bg-[#A5C9D1]/20 flex items-center justify-center">
              <Check size={14} className="text-[#A5C9D1]" strokeWidth={3} />
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
              <X size={14} className="text-red-500" strokeWidth={3} />
            </div>
          )}
          <span className="text-sm font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-1 p-1.5 hover:bg-black/5 rounded-md transition-colors"
          >
            <X size={14} className="text-gray-500" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
