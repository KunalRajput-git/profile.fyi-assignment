import { clsx } from "clsx"; // Import clsx to handle conditional class names.
import { twMerge } from "tailwind-merge"; // Import twMerge to merge Tailwind CSS classes.

export function mergeClassNames(...inputs) {
  return twMerge(clsx(...inputs)); // Combine and resolve class names, handling conflicts.
}
