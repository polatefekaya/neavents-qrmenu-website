"use client"

import { IridescentGradientProps } from "@/types/gradient";
import { AnimatePresence } from "framer-motion";
import GradientBlob from "./GradientBlob";

const IridescentGradient: React.FC<IridescentGradientProps> = ({
  colors,
  blur = 80,
  blendMode = 'overlay',
  opacity = 1,
  speed = 20,
  isAnimated = true,
  seed,
  className = '',
}) => {
  if (!colors || colors.length === 0) {
    console.error("IridescentGradient: The 'colors' prop is required and cannot be an empty array.");
    return null;
  }

  const containerClasses = `relative w-full h-full overflow-hidden ${className}`;

  return (
    <div
      className={containerClasses}
      style={{
        transform: 'scale(1.5)',
        filter: `blur(${blur}px)`,
        opacity: opacity,
        isolation: 'isolate',
      }}
    >
      <AnimatePresence>
        {colors.map((color, index) => (
          <GradientBlob key={index} color={color} animationSpeed={speed} isAnimated={isAnimated} index={index} seed={seed} />
        ))}
      </AnimatePresence>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          mixBlendMode: blendMode,
        }}
      />
    </div>
  );
};

export default IridescentGradient;