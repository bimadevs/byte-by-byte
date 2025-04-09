import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export function getRandomGradient(): string {
  const gradients = [
    "from-blue-500 to-purple-500",
    "from-green-400 to-blue-500",
    "from-purple-500 to-pink-500",
    "from-yellow-400 to-orange-500",
    "from-pink-500 to-rose-500",
    "from-indigo-500 to-blue-500",
    "from-emerald-500 to-teal-500",
    "from-orange-500 to-yellow-500",
  ];

  return gradients[Math.floor(Math.random() * gradients.length)];
} 