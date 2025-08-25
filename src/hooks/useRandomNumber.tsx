import { useMemo } from "react";

export const useRandomNumber = (min: number, max: number): number => {
  return useMemo(() => Math.random() * (max - min) + min, [min, max]);
};