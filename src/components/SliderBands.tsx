import Image from "next/image";
import { bandCatalog } from "../mocks/bandas";
import { LinkButton } from "./LinkButton";

export const SliderBands = () => {

  return (
    <div className="grid grid-cols-3 gap-6">
      {bandCatalog.map(banda => (
        <div key={banda.id} className={`aspect-square  rounded-[10px] bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${banda.img})` }}>
          <div className="flex flex-col justify-center items-center h-full bg-black/60 rounded-[10px] text-white text-center p-20">
            <h2 className="text-[25px] font-bold">{banda.name}</h2>
            <span className="text-[16px] font-semibold">{banda.genero.join(" / ")}</span>
            {/* <p className="">{banda.desc}</p> */}
            <LinkButton textButton="Visitar" url={banda.url} />
          </div>
        </div>
      ))}</div>
  )
}
