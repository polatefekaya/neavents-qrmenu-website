"use client"

import { useRandomNumber } from "@/hooks/useRandomNumber";
import { GradientBlobProps } from "@/types/gradient";
import { motion, Transition } from "framer-motion";
import { useEffect, useState } from "react";

function mulberry32(a: number) {
  return function() {
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

const GradientBlob: React.FC<GradientBlobProps> = ({ color, animationSpeed, isAnimated, index, seed }) => {
const [blobProps, setBlobProps] = useState<{
    size: number;
    initialX: string;
    initialY: string;
    initialScale: number;
    animateX: string;
    animateY: string;
    animateScale: number;
    animateRotate: number;
  } | null>(null);

  useEffect(() => {
    // Determine the seed for this specific blob.
    // If the parent provides a string seed, we create a simple hash from it.
    const parentSeed = typeof seed === 'string'
        ? seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
        : typeof seed === 'number' ? seed : new Date().getTime();

    // Each blob gets a unique, deterministic seed.
    const finalSeed = parentSeed + index;
    const seededRandom = mulberry32(finalSeed);
    const random = seed !== undefined ? seededRandom : Math.random;
    const randomInRange = (min: number, max: number) => random() * (max - min) + min;

    console.log(`parent seed:${parentSeed}, final seed:${finalSeed}, input seed:${seed}`);

    // Generate all properties using the chosen random function.
    setBlobProps({
      size: randomInRange(500, 900),
      // WIDENED RANGE: The positioning is now much more expansive to cover the whole container.
      initialX: `${randomInRange(-10, 110)}%`,
      initialY: `${randomInRange(-10, 110)}%`,
      initialScale: randomInRange(1.2, 1.8),
      animateX: `${randomInRange(-10, 110)}%`,
      animateY: `${randomInRange(-10, 110)}%`,
      animateScale: randomInRange(1.2, 2.6),
      animateRotate: randomInRange(-180, 180),
    });
  }, [seed, index]); // Re-generate if the seed or index changes.

  if (!blobProps) {
    return null; // Render nothing until client-side mount to prevent hydration mismatch.
  }

  const transitionConfig: Transition = {
    duration: animationSpeed,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  };

  const animationProps = isAnimated
    ? {
        animate: {
          x: blobProps.animateX,
          y: blobProps.animateY,
          scale: blobProps.animateScale,
          rotate: blobProps.animateRotate,
        },
        transition: transitionConfig,
      }
    : {};

  return (
    <motion.div
      initial={{
        x: blobProps.initialX,
        y: blobProps.initialY,
        scale: blobProps.initialScale,
      }}
      {...animationProps}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${blobProps.size}px`,
        height: `${blobProps.size}px`,
        borderRadius: '50%',
        backgroundColor: color,
        willChange: 'transform',
      }}
    />
  );
};

export default GradientBlob;