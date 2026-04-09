import { bandCatalog } from "@/mocks/bandas";
import { notFound } from "next/navigation";
import { BannerBand } from "./components/banner-band";
import { SpotifyTracksBand } from "./components/spotify-tracks-band";
import { BandEvents } from "./components/band-events";
import { BandMembers } from "./components/band-members";
import { BandVideos } from "./components/band-videos";

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
      {banda.tracksOnSpotify && (<SpotifyTracksBand bandaTracks={banda.tracksOnSpotify} />)}
      {banda.events && (<BandEvents eventsBand={banda.events} mainColorBand={banda.mainColor} />)}
      {banda.members && ( <BandMembers bandMembers={banda.members} mainColorBand={banda.mainColor}/>)}
      {banda.videos && (<BandVideos videos={banda.videos} />)}

    </section>
  );
}
