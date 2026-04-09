import { BackgroundSection } from "./background-section";
export interface BandVideosProps {
  videos: string[];
}

export const BandVideos = ({ videos }: BandVideosProps) => {
  return (
    <BackgroundSection>
      <h2 className="text-title-2 font-extrabold mb-10">
        NUESTRAS VIBRAS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video, index) => (
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
    </BackgroundSection>

  );
};