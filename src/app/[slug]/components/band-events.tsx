import { dateFormatter } from "@/helpers/dateFormatter";
import { timeFormatter } from "@/helpers/timeFormatter";
import { Banda } from "../types/band.types";
import bgInfoBand from "@/assets/bg-infoBand.png";

export interface BandEventsProps {
  eventBand: Banda;
}

export const BandEvents = ({ eventBand }: BandEventsProps) => {
  return (
    <div className="w-full min-h-[318px] pt-[54px] pl-[100px] pr-[100px] pb-[100px] text-white mt-3 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgInfoBand.src})` }}>
      <div className="">
        <h1 className="text-title-2 font-extrabold">PRÓXIMOS EVENTOS</h1>
        <div>
          {eventBand.events?.map((bandEvent) => (
            <div className="mt-6 ml-10 flex items-center gap-10 uppercase font-semibold">
              <p style={{ color: `${eventBand.mainColor}` }}>{dateFormatter(bandEvent.date)} - {timeFormatter(bandEvent.time)}</p>
              <p><a href={bandEvent.googleLocation} target="_blank">{bandEvent.place}</a></p>
              <p>{bandEvent.municipality}, {bandEvent.state}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}