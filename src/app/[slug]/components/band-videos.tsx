import { Banda } from "../types/band.types";
import bgInfoBand from "@/assets/bg-infoBand.png";

export interface BandVideosProps {
  videos: Banda;
}

export const BandVideos = ({ videos }: BandVideosProps) => {
  if (!videos.videos || videos.videos.length === 0) return null;

  return (
    <section
      className="w-full px-6 md:px-[100px] py-14 text-white mt-3 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgInfoBand.src})` }}
    >
      <h2 className="text-title-2 font-extrabold mb-10">
        NUESTRAS VIBRAS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.videos.map((video, index) => (
          <div
            key={index}
            className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <iframe
              className="w-full h-full"
              src={video}
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
};