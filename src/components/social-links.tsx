import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

import facebookLogo from "@/assets/icons/facebook.png";
import instagramLogo from "@/assets/icons/instagram.png";
import spotifyLogo from "@/assets/icons/spotify.png";
import tiktokLogo from "@/assets/icons/tik-tok.png";

import type { BandSocials } from "@/app/[slug]/types/band.types";

export interface SocialLinksProps {
  socials?: BandSocials;
  className?: string;
  iconSize: number;
}

const SOCIAL_CONFIG: Record<keyof BandSocials, StaticImageData> = {
  facebook: facebookLogo,
  instagram: instagramLogo,
  spotify: spotifyLogo,
  tiktok: tiktokLogo,
};

export const SocialLinks = ({ socials, iconSize, className }: SocialLinksProps) => {
  // Evita render innecesario
  if (!socials) return null;

  /**
   * Conserva el tipado.
   * Evita Object.entries (pierde tipos).
   */
  const activeSocials = (Object.keys(socials) as Array<keyof BandSocials>)
    .filter((key) => typeof socials[key] === "string");

  // Si no hay redes → no renderices el contenedor
  if (activeSocials.length === 0) return null;

  return (
    <div className={cn(className)}>
      {activeSocials.map((key) => {
        const url = socials[key]!;

        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ir a ${key}`}
            className="
              transition-transform
              hover:scale-110
              hover:-translate-y-0.5
              duration-200
            "
          >
            <Image
              src={SOCIAL_CONFIG[key]}
              alt={key}
              width={iconSize}
              height={iconSize}
              className={`select-none w`}
            />
          </a>
        );
      })}
    </div>
  );
};
