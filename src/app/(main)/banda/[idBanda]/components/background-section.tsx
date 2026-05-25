import bgInfoBand from "@/assets/bg-infoBand.png";
import { ReactNode } from "react";

export interface BackgroundSection {
  children: ReactNode;
}
export const BackgroundSection = ({ children }: BackgroundSection) => {
  return (
    <div className="w-full min-h-[318px] pt-[54px] pl-[100px] pr-[100px] pb-[100px] text-white mt-3 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgInfoBand.src})` }}>

      {children}

    </div>
  )
}
