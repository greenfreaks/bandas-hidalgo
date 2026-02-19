"use client"

import Image from "next/image";
import bgInfoBand from "@/assets/bg-infoBand.png";
import { useEffect, useState } from "react";
import { Banda } from "../types/band.types";
import { Carousel } from "@/components/carousel";

export interface BandMembersProps {
  bandMembers: Banda;
}

export const BandMembers = ({ bandMembers }: BandMembersProps) => {
  const [cartoonImageActive, setCartoonImageActive] = useState<Boolean>(false);

  const handleChangeCartoonMode = () => {
    setCartoonImageActive(prev => !prev);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleChangeCartoonMode();
      console.log(bandMembers)
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="w-full pl-[100px] pr-[100px] py-14 text-white mt-3 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgInfoBand.src})` }}>
      <h1 className="text-title-2 font-extrabold mb-8">INTEGRANTES</h1>
      <Carousel dotColor={bandMembers.mainColor}>
        {bandMembers.members?.map((member) => (
          <div className=" flex items-center">
            <div className="flex mr-8 min-w-1/4 perspective-origin-bottom-left">
              {member.photo && member.animathedPhoto && (
                <div
                  className={`w-[600px] h-[400px] transition-transform duration-700 transform-3d ${cartoonImageActive ? "rotate-y-180" : ""
                    }`}
                >
                  <Image
                    src={member.photo}
                    alt="Normal"
                    fill
                    className="object-contain backface-hidden"
                  />

                  <Image
                    src={member.animathedPhoto}
                    alt="Cartoon"
                    fill
                    className="object-contain rotate-y-180 backface-hidden"
                  />
                </div>
              )}
            </div>

            <div>
              <h2 className="text-title-3 font-extrabold">{member.name.toUpperCase()}</h2>
              <h3 className="font-semibold">{member.role.join(" / ")}</h3> <br />
              <ul className="text-title-6 font-semibold flex flex-wrap list-disc pl-6 gap-x-10 gap-y-3">
                {bandMembers.members && member.description.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
              <br />

              <hr className="text-gray-400" /> <br />
              <h4 className="text-title-6 font-extrabold">ARTISTAS FAVORITOS</h4>
              <ul className="text-title-6 mt-2 flex flex-wrap list-disc pl-6 gap-x-10">
                {bandMembers.members && member.favoriteArtists.map((artist) => (
                  <li key={artist}>{artist}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}