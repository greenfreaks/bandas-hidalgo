import { bandCatalog } from "@/mocks/bandas";
import { notFound } from "next/navigation";
import { BannerBand } from "./components/banner-band";
import { SpotifyTracksBand } from "./components/spotify-tracks-band";
import { BandEvents } from "./components/band-events";

type SlugBandProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return bandCatalog.map((band) => ({
    slug: band.url,
  }));
}

export default async function SlugBand({ params }: SlugBandProps) {
  const { slug } = await params;
  const banda = bandCatalog.find(selectedBand => selectedBand.url === slug);
  if (!banda) {
    return notFound();
  }
  return (
    <section>
      <BannerBand banda={banda} />

      {banda.tracksOnSpotify && (
        <SpotifyTracksBand banda={banda} />
      )}

      {banda.events && (
        <BandEvents eventBand={banda} />
      )}
    </section>
  );
}
