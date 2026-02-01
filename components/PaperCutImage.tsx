import { useId } from "react";

interface TornPaperWrapperProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string; // Tailwind bg-* class
  textColor?: string;       // Tailwind text-* class
  roughness?: number;       // 0.01 (smooth) to 0.1 (very rough)
  intensity?: number;       // Edge displacement amount (2-10)
  padding?: string;         // Tailwind padding classes
}

export const TornPaperFilter: React.FC<Omit<TornPaperWrapperProps, 'pointCount' | 'severity'> & { roughness?: number }> = ({
  children,
  className = "",
  backgroundColor = "bg-slate-300",
  textColor = "text-black",
  roughness = 0.03,
}) => {
  const id = useId();
  
  return (
    <div className={`${className}`}>
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id={`torn-${id}`} x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency={roughness} numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
        </defs>
      </svg>
      <div 
        className={`${backgroundColor} ${textColor} px-8 py-4 filter`}
        style={{ filter: `url(#torn-${id})` }}
      >
        {children}
      </div>
    </div>
  );
};