import { Banda } from "../types/band.types";
import { BandEvents } from "./band-events";
import { BandMembers } from "./band-members";
import { BandVideos } from "./band-videos";
import { BannerBand } from "./banner-band";
import { SpotifyTracksBand } from "./spotify-tracks-band";

interface BandProps {
  banda: Banda;
}

export const Band = ({ banda }: BandProps) => {
  return (
    <section>
      <BannerBand banda={banda} />
      {banda.tracksOnSpotify && (
        <SpotifyTracksBand bandaTracks={banda.tracksOnSpotify} />
      )}
      {banda.events && (
        <BandEvents eventsBand={banda.events} mainColorBand={banda.mainColor} />
      )}
      {banda.members && (
        <BandMembers
          bandMembers={banda.members}
          mainColorBand={banda.mainColor}
        />
      )}
      {banda.videos && <BandVideos videos={banda.videos} />}
    </section>
  );
};
