import { Banda } from "@/mocks/bandas";
import bgInfoBand from "@/assets/bg-infoBand.png";

export interface SpotifyTracksBandProps{
  banda: Banda
}

export const SpotifyTracksBand = ({ banda }: SpotifyTracksBandProps) => {
  return (
    <div className="w-full pl-[100px] pr-[100px] py-14 text-white mt-3 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgInfoBand.src})` }}>
      <h1 className="text-title-2 font-extrabold mb-8">ESCUCHA <br /> NUESTRA MÚSICA</h1>
      <div className="flex gap-6">
        {banda.tracksOnSpotify?.map((track) => {
          return (
            <div className="w-full" key={track}>
              <iframe
                data-testid="embed-iframe"
                className="rounded-xl w-full h-[352px] border-0 mt-4 shadow-lg hover:shadow-red-500/50 transition-shadow duration-300" // Agregué un efecto hover opcional
                src={`https://open.spotify.com/embed/track/${track}?utm_source=generator`}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  )
}