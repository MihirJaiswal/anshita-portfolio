"use client";

import { useEffect, useState } from "react";

export default function PaperTexture() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Base paper texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-100 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Canvas texture with subtle grain */}
      <div
        className="fixed inset-0 pointer-events-none z-99 opacity-[0.015] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.8' numOctaves='3' result='noise'/%3E%3CfeDiffuseLighting in='noise' lighting-color='white' surfaceScale='1'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Subtle paper fibers */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-98 opacity-[0.02]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="fibers" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={i}
                x1={Math.random() * 100}
                y1={Math.random() * 100}
                x2={Math.random() * 100}
                y2={Math.random() * 100}
                stroke="currentColor"
                strokeWidth="0.3"
                opacity={0.3 + Math.random() * 0.4}
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fibers)" />
      </svg>
    </>
  );
}
