import { Button } from "@/components/Button";
import { bandCatalog } from "@/mocks/bandas";
import { notFound } from "next/navigation";
import Image from "next/image";
import facebookLogo from "@/assets/icons/facebook.png";
import instagramLogo from "@/assets/icons/instagram.png";
import spotifyLogo from "@/assets/icons/spotify.png"
import playerImg from "@/assets/player.png"
import bgInfoBand from "@/assets/bg-infoBand.png"
import { url } from "inspector";

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
        <div className="ml-[66px] font-semibold relative z-10 w-[341px] flex flex-col items-center">
          <Button textButton="CONTACTANOS" bgColor={banda.mainColor} />
          <p className="mt-5">CONTRATACIONES:</p>
          <p className="">{banda.phone}</p>
        </div>
      </div>

      <div className="w-full h-[318px] pl-[100px] pr-500px text-white mt-3 bg-center bg-no-repeat bg-cover flex items-center" style={{ backgroundImage: `url(${bgInfoBand.src})` }}>
        <div className="w-full max-w-[70%] flex justify-between">
          <h1 className="text-title-2 font-extrabold">ESCUCHA <br /> NUESTRA MÚSICA</h1>
          <Image src={playerImg} alt="player" />
        </div>
      </div>

      <div className="w-full min-h-[318px] pt-[54px] pl-[100px] pr-[100px] pb-[100px] text-white mt-3 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgInfoBand.src})` }}>
        <div className="">
          <h1 className="text-title-2 font-extrabold">PRÓXIMOS EVENTOS</h1>
          <div>
            {banda.events?.map((bandEvent) => (
              <div className="mt-6 ml-10 flex items-center gap-10 uppercase font-semibold">
                <p style={{ color: `${banda.mainColor}` }}>17 Ene, 2026</p>
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
