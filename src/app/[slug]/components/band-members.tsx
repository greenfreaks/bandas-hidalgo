"use client"

import Image from "next/image";
import bgInfoBand from "@/assets/bg-infoBand.png";
import Mario from "@/assets/slugDeBandas/fantasmas-mario.png";
import marioCartoon from "@/assets/slugDeBandas/fantasmas-mario-cartoon.png";
import { useEffect, useState } from "react";

export const BandMembers = () => {
  const [cartoonImageActive, setCartoonImageActive] = useState<Boolean>(false);

  const handleChangeCartoonMode = () => {
    setCartoonImageActive(prev => !prev);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleChangeCartoonMode();
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="w-full pl-[100px] pr-[100px] py-14 text-white mt-3 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bgInfoBand.src})` }}>
      <h1 className="text-title-2 font-extrabold mb-8">INTEGRANTES</h1>
      <div className=" flex items-center">
        <div className="flex mr-8 min-w-1/4 perspective-origin-bottom-left">
          <div
            className={`w-[600px] h-[400px] transition-transform duration-700 transform-3d ${cartoonImageActive ? "rotate-y-180" : ""
              }`}
          >
            <Image
              src={Mario}
              alt="Normal"
              fill
              className="object-contain backface-hidden"
            />

            <Image
              src={marioCartoon}
              alt="Cartoon"
              fill
              className="object-contain rotate-y-180 backface-hidden"
            />
          </div>
        </div>

        <div>
          <h2 className="text-title-3 font-extrabold">MARIO</h2>
          <h3 className="font-semibold">Vocalista / Bajista</h3> <br />
          <ul className="text-title-6 font-semibold flex flex-wrap list-disc pl-6 gap-x-10 gap-y-3">
            <li className="whitespace-nowrap">Ama a los perros</li>
            <li className="whitespace-nowrap">Le encantan las cumbias</li>
            <li className="whitespace-nowrap">Su color favorito es el verde</li>
            <li className="whitespace-nowrap">Su comida favorita es el pollo en mole verde</li>
            <li className="whitespace-nowrap">Bajista por necesidad</li>
          </ul>
          <br />

          <hr className="text-gray-400" /> <br />
          <h4 className="text-title-6 font-extrabold">ARTISTAS FAVORITOS</h4>
          <ul className="text-title-6 mt-2 flex flex-wrap list-disc pl-6 gap-x-10">
            <li>Rebel Cats</li>
            <li>Ice Nine Kills</li>
            <li>Celso Piña</li>
          </ul>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}