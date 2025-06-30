import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Buffer utilities for handling large data efficiently
export function stringToBuffer(str: string): Buffer {
  return Buffer.from(str, 'utf8')
}

export function bufferToString(buffer: Buffer): string {
  return buffer.toString('utf8')
}

export function base64ToBuffer(base64: string): Buffer {
  return Buffer.from(base64, 'base64')
}

export function bufferToBase64(buffer: Buffer): string {
  return buffer.toString('base64')
}

// Efficient data URL handling with Buffer
export const dataUrl = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="

export function createOptimizedDataUrl(imageData: string): string {
  // Use Buffer for large image data processing
  const buffer = stringToBuffer(imageData)
  const compressedData = buffer.toString('base64')
  return `data:image/svg+xml;base64,${compressedData}`
}

// Debounce utility
export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(null, args), delay)
  }
}

// Download utility
export const download = (url: string, filename: string) => {
  if (!url) {
    throw new Error("Resource URL not provided! You need to provide one")
  }

  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = blobURL
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(blobURL)
    })
    .catch((error) => console.error("Download failed:", error))
}

// Image size utility
export const getImageSize = (
  type: string,
  image: any,
  dimension: "width" | "height"
): number => {
  if (type === "fill") {
    return (
      dimension === "width"
        ? image?.width
        : image?.height
    ) || 1000
  }
  return 1000
}
