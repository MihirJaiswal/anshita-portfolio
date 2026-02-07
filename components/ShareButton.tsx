"use client";

import { useState } from "react";
import { Share2, Link2, Twitter, Linkedin } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
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
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const shareText = `Check out "${title}" by Anshita Rathore`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setToast({ show: true, message: "Link copied to clipboard!" });
      setOpen(false);
    } catch (err) {
      console.log(err);
      setToast({ show: true, message: "Failed to copy link" });
    }
  };

  const handleShareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
    setOpen(false);
  };

  const handleShareLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedInUrl, "_blank", "width=600,height=400");
    setOpen(false);
  };

  return (
    <>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <div className={`${className}`}>
            <BrushStroke>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#A5C9D1]/20 hover:bg-[#A5C9D1]/40 border border-[#A5C9D1]/30 rounded-lg transition-all duration-300 text-sm font-medium font-[poppins] text-gray-800 hover:text-black">
                <Share2 size={16} />
                Share
              </button>
            </BrushStroke>
          </div>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            side="bottom"
            align="end"
            sideOffset={8}
            className="z-50 bg-[#E8E8E6] rounded-lg shadow-lg border border-[#A5C9D1]/20 p-2 min-w-54 overflow-hidden outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
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

            <Popover.Arrow className="fill-[#A5C9D1]/20" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <Toast
        message={toast.message}
        isVisible={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
        type="success"
      />
    </>
  );
}
