"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiCode() {
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [isActivated, setIsActivated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const createConfetti = useCallback(() => {
    const colors = ["#A5C9D1", "#FFD700", "#FF6B6B", "#4ECDC4", "#95E1D3"];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}vw;
        top: -10px;
        border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
        z-index: 9999;
        pointer-events: none;
      `;
      document.body.appendChild(confetti);

      const duration = 2000 + Math.random() * 3000;
      const delay = Math.random() * 1000;

      confetti.animate(
        [
          { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
          {
            transform: `translateY(${window.innerHeight + 20}px) rotate(${720 + Math.random() * 720}deg)`,
            opacity: 0,
          },
        ],
        {
          duration,
          delay,
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }
      ).onfinish = () => confetti.remove();
    }
  }, []);

  const triggerEasterEgg = useCallback(() => {
    // Create confetti effect
    createConfetti();

    // Auto-hide message after 5 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  }, [createConfetti]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isActivated) return;

      const newSequence = [...keySequence, e.key];
      if (newSequence.length > KONAMI_CODE.length) {
        newSequence.shift();
      }

      setKeySequence(newSequence);

      if (newSequence.join(",") === KONAMI_CODE.join(",")) {
        setIsActivated(true);
        setShowMessage(true);
        triggerEasterEgg();
      }
    },
    [keySequence, isActivated, triggerEasterEgg]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: -30, x: "-50%", scale: 0.95 }}
          animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
          exit={{ opacity: 0, y: -20, x: "-50%", scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-8 left-1/2 z-100 bg-[#E8E8E6] text-gray-800 px-6 py-5 rounded-xl shadow-xl border border-[#A5C9D1]/30 font-[poppins] min-w-75"
        >
          {/* Decorative brush stroke background */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#A5C9D1]/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#A5C9D1]/10 rounded-full blur-xl pointer-events-none" />

          <button
            onClick={() => setShowMessage(false)}
            className="absolute top-3 right-3 p-1.5 hover:bg-[#A5C9D1]/20 rounded-md transition-colors"
          >
            <X size={16} className="text-gray-500" />
          </button>
          <div className="flex items-center gap-4 relative">
            <div className="w-12 h-12 rounded-full bg-[#A5C9D1]/20 flex items-center justify-center shrink-0">
              <Sparkles size={22} className="text-[#A5C9D1]" />
            </div>
            <div>
              <p className="font-semibold text-base text-gray-900">🎉 Konami Code Activated!</p>
              <p className="text-sm text-gray-600 mt-0.5">
                You found the secret! Enjoy the show!
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
