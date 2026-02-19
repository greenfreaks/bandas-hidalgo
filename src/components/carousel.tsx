"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from "embla-carousel-auto-height";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  autoplayEnabled?: boolean;
  dots?: boolean;
  dotColor?: string;
  delay?: number;
  className?: string;
  slideSize?: "100%" | "90%" | "85%" | "80%" | "60%";
  gap?: string;
  align?: "start" | "center" | "end";
  contentPadding?: string;
}

export const Carousel = ({
  children,
  dots = true,
  dotColor,
  delay = 12000,
  autoplayEnabled = true,
  className = "",
  slideSize = "100%",
  gap = "0px",
  align = "center",
  contentPadding = "py-0",
}: CarouselProps) => {
  const plugins = [AutoHeight()];

  if (autoplayEnabled) {
    plugins.push(Autoplay({ delay, stopOnInteraction: true }));
  }

  // Si hay peek, quitamos el 'loop' o ajustamos alineación
  // 'start' suele ser mejor para que el espacio sobrante siempre quede a la derecha
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: slideSize === "100%",
      align: align,
      containScroll: "trimSnaps",
    },
    plugins
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={`relative ${className}`}>
      {/* Viewport: La ventana visible del carrusel */}
      <div className={cn("overflow-hidden", contentPadding)} ref={emblaRef}>
        <div className="flex touch-pan-y " style={{ marginLeft: `calc(${gap} * -1)` }}>
          {React.Children.map(children, (child) => (
            <div
              className="flex-[0_0_100%] min-w-0 relative transition-[height] duration-200"
              style={{
                flex: `0 0 ${slideSize}`,
                paddingLeft: gap, // Aplicamos el gap aquí
              }}
              // pl-4 crea un pequeño gap entre slides
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {dots && (
        <div className="flex justify-center gap-2 mt-2 px-4">
          {React.Children.map(children, (_, index) => (
            <button
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer `}
              style={{
                backgroundColor: index === selectedIndex ? dotColor || "#3b82f6" : "#9ca3af",
              }}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              aria-label={`Ir a item ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
