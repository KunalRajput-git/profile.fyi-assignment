import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function mergeClassNames(...inputs) {
  return twMerge(clsx(...inputs)); // Combine and resolve class names, handling conflicts.
}
