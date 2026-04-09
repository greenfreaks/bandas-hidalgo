import { dateFormatter } from "@/helpers/dateFormatter";
import { timeFormatter } from "@/helpers/timeFormatter";
import { BandEvent } from "../types/band.types";
import { BackgroundSection } from "./background-section";

export interface BandEventsProps {
  eventsBand: BandEvent[];
  mainColorBand: string;
}

export const BandEvents = ({ eventsBand, mainColorBand }: BandEventsProps) => {
  return (
    <BackgroundSection>
      <div className="">
        <h1 className="text-title-2 font-extrabold">PRÓXIMOS EVENTOS</h1>
        <div>
          {eventsBand.map((event, index) => (
            <div key={index} className="mt-6 ml-10 flex items-center gap-10 uppercase font-semibold">
              <p style={{ color: `${mainColorBand}` }}>{dateFormatter(event.date)} - {timeFormatter(event.time)}</p>
              <p><a href={event.googleLocation} target="_blank">{event.place}</a></p>
              <p>{event.municipality}, {event.state}</p>
            </div>
          ))}
        </div>
      </div>
    </BackgroundSection>

  )
}