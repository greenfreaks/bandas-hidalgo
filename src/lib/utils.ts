import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//Crear una utilidad para unir clases de Tailwind CSS de manera condicional
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
