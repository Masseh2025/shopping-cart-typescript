import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}

export { cn };
