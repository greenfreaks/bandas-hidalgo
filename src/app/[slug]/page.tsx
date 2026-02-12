import { Button } from "@/components/Button";
import { bandCatalog } from "@/mocks/bandas";
import { notFound } from "next/navigation";
import Image from "next/image";
import facebookLogo from "@/assets/icons/facebook.png";
import instagramLogo from "@/assets/icons/instagram.png";
import spotifyLogo from "@/assets/icons/spotify.png";
import bgInfoBand from "@/assets/bg-infoBand.png";
import { dateFormatter } from "@/helpers/dateFormatter";
import { timeFormatter } from "@/helpers/timeFormatter";
import Link from "next/link";

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
      <div className="absolute">
        <div className="w-[30px] flex flex-col gap-[22px] relative top-[76px] left-[38px] z-10">
          <Image src={facebookLogo} alt="Logo Facebook" />
          <Image src={instagramLogo} alt="Logo Instagram" />
          <Image src={spotifyLogo} alt="Logo Spotify" />
        </div>
      </div>
      <div className="w-screen h-[706px] pt-[58px] bg-center bg-no-repeat bg-cover text-white" style={{ backgroundImage: `url(${banda.img})` }}>
        {/* Overlay negro */}
        <div className="h-[706px] pt-[58px] absolute top-20  inset-0 bg-black/60" />

        <div className="max-w-[50%] pl-[100px] relative z-10">
          <h1 className="text-super-title font-extrabold max-w-[60%] uppercase">{banda.name}</h1>
          <p className="text-title-4 mt-5">{banda.genero.join(" / ")} /</p>
          <p className="text-title-5 mt-3 font-semibold">{banda.municipio}, {banda.estado}</p>
          <p className="text-p mt-5 mb-[30px]">{banda.desc}</p>
        </div>
        <div className="font-semibold relative z-10 w-[341px] flex flex-col items-center">
          <Link href={`https://wa.me/${banda.phone}?text=Hola, me gustaría solicitar información sobre su banda ${banda.name}`} target="_blank" rel="noopener noreferrer"><Button textButton="CONTACTANOS" bgColor={banda.mainColor} /> </Link>
        </div>
      </div>

      {banda.tracksOnSpotify && (
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
      )}

      <div className="w-full min-h-[318px] pt-[54px] pl-[100px] pr-[100px] pb-[100px] text-white mt-3 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgInfoBand.src})` }}>
        <div className="">
          <h1 className="text-title-2 font-extrabold">PRÓXIMOS EVENTOS</h1>
          <div>
            {banda.events?.map((bandEvent) => (
              <div className="mt-6 ml-10 flex items-center gap-10 uppercase font-semibold">
                <p style={{ color: `${banda.mainColor}` }}>{dateFormatter(bandEvent.date)} - {timeFormatter(bandEvent.time)}</p>
                <p><a href={bandEvent.googleLocation} target="_blank">{bandEvent.place}</a></p>
                <p>{bandEvent.municipality}, {bandEvent.state}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
