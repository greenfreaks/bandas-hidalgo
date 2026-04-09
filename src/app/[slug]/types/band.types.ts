import { StaticImageData } from "next/image";

export interface BandEvent {
  id: number;
  date: Date;
  place: string;
  time: Date;
  state: string;
  municipality: string;
  googleLocation: string
}

export interface BandMember {
  id: number;
  name: string;
  role: string[];
  description: string[];
  favoriteArtists: string[];
  photo?: string | StaticImageData;
  animathedPhoto?: string | StaticImageData;
}

export interface BandSocials {
  facebook?: string | undefined;
  instagram?: string | undefined;
  spotify?: string | undefined;
  tiktok?: string | undefined;
}
export interface Banda {
  id: number;
  name: string;
  municipio: string;
  estado: string;
  img: string;
  url: string;
  desc: string;
  genero: string[];
  phone?: number;
  bandSocials?: BandSocials;
  mainColor: string;
  events?: BandEvent[];
  tracksOnSpotify?: string[] | null;
  videos?: string[] | null;
  members?: BandMember[] | null;
}