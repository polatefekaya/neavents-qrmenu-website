export interface GradientBlobProps {
  color: string;
  animationSpeed: number;
  isAnimated: boolean;
  index: number;
  seed?: string | number;
}


export interface IridescentGradientProps {
  /** An array of color strings (e.g., ['#ff00ff', 'rgba(0, 255, 255, 0.8)']). */
  colors: string[];
  /** The intensity of the blur effect. Higher numbers mean more blur. */
  blur?: number;
  /** The CSS mix-blend-mode property to blend the colors. 'screen' or 'overlay' work well. */
  blendMode?: React.CSSProperties['mixBlendMode'];
  /** The overall opacity of the gradient container. */
  opacity?: number;
  /** Controls the speed of the animation. Higher numbers mean slower movement. */
  speed?: number;
  /** NEW: Determines if the gradient blobs should animate. Defaults to true. */
  isAnimated?: boolean;
  seed?: string | number;
  /** Optional className to apply to the container for custom styling. */
  className?: string;
}
