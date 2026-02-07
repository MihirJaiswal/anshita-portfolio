// BrushStroke.tsx - Alternative
import React, { ReactNode, ElementType } from "react";

interface BrushStrokeProps {
  children: ReactNode;
  className?: string;
  color?: string;
  opacity?: number;
  seed?: number;
  baseFrequency?: number;
  scale?: number;
  rounded?: boolean;
  as?: ElementType;
  [key: string]: unknown;
}

const BrushStroke: React.FC<BrushStrokeProps> = ({
  children,
  className = "",
  color = "#A5C9D1",
  opacity = 0.8,
  seed = 5312,
  baseFrequency = 0.333,
  scale = 8,
  rounded = true,
  as: Component = "div",
  ...rest
}) => {
  const filterId = `brush-filter-${seed}`;

  return (
    <div className="relative inline-block">
      {/* SVG Filter Definition */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <filter
            id={filterId}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${baseFrequency} ${baseFrequency}`}
              numOctaves={3}
              seed={seed}
            />
            <feDisplacementMap
              in="shape"
              scale={scale}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedImage"
              width="100%"
              height="100%"
            />
            <feMerge result="effect1_texture">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Background with filter */}
      <div
        className={`absolute inset-0 ${rounded ? "rounded-[10px]" : ""}`}
        style={{
          backgroundColor: color,
          opacity: opacity,
          filter: `url(#${filterId})`,
        }}
      />

      {/* Content */}
      <Component className={`relative ${className}`} {...rest}>
        {children}
      </Component>
    </div>
  );
};

export default BrushStroke;
