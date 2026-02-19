import { Button } from "@/components/Button";
import { SocialLinks } from "@/components/social-links";
import { Banda } from "@/mocks/bandas"
import Link from "next/link";

export interface BannerBandProps{
  banda: Banda;
}
export const BannerBand = ({banda}: BannerBandProps ) => {
  return (
    <div>
      <div className="absolute">
        {banda.bandSocials && (
          <SocialLinks socials={banda.bandSocials} iconSize={30} className="flex flex-col gap-5.5 relative top-19 left-9.5 z-20" />
        )}
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
    </div>

  )
}