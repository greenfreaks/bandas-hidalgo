export const timeFormatter = (time: Date): string => {
  return time.toLocaleTimeString("es-Mx", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
}