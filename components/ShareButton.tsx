"use client";

import { useState } from "react";
import { Share2, Link2, Twitter, Linkedin, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Toast from "./Toast";
import BrushStroke from "./BrushStroke";

interface ShareButtonProps {
  title: string;
  url?: string;
  className?: string;
}

export default function ShareButton({
  title,
  url,
  className = "",
}: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const shareText = `Check out "${title}" by Anshita Rathore`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setToast({ show: true, message: "Link copied to clipboard!" });
      setIsOpen(false);
    } catch (err) {
      setToast({ show: true, message: "Failed to copy link" });
    }
  };

  const handleShareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
    setIsOpen(false);
  };

  const handleShareLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedInUrl, "_blank", "width=600,height=400");
    setIsOpen(false);
  };

  return (
    <>
      <div className={`relative ${className}`}>
        <BrushStroke>
         <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#A5C9D1]/20 hover:bg-[#A5C9D1]/40 border border-[#A5C9D1]/30 rounded-lg transition-all duration-300 text-sm font-medium font-[poppins] text-gray-800 hover:text-black"
        >
          <Share2 size={16} />
          Share
        </button>
        </BrushStroke>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 z-50 bg-[#E8E8E6] rounded-lg shadow-lg border border-[#A5C9D1]/20 p-2 min-w-54 overflow-hidden"
              >
                {/* Subtle brush stroke background decoration */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#A5C9D1]/10 rounded-full blur-2xl pointer-events-none" />

                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-[#A5C9D1]/20 rounded-md transition-all duration-200 text-sm font-[poppins] text-gray-700 hover:text-black group"
                >
                  <Link2 size={16} className="group-hover:scale-110 transition-transform" />
                  Copy link
                </button>
                <button
                  onClick={handleShareTwitter}
                  className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-[#A5C9D1]/20 rounded-md transition-all duration-200 text-sm font-[poppins] text-gray-700 hover:text-black group"
                >
                  <Twitter size={16} className="group-hover:scale-110 transition-transform" />
                  Share on X
                </button>
                <button
                  onClick={handleShareLinkedIn}
                  className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-[#A5C9D1]/20 rounded-md transition-all duration-200 text-sm font-[poppins] text-gray-700 hover:text-black group"
                >
                  <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                  Share on LinkedIn
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      <Toast
        message={toast.message}
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
        type="success"
      />
    </>
  );
}
