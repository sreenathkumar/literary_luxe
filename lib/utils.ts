import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//Function which shortens text
export function shortenText(text: string | undefined, length: number) {
  if (!text) return
  return text.length > length ? text.slice(0, length - 3) + '...' : text
}
