import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scoreAverage(scores: number[]) {
  return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
}
