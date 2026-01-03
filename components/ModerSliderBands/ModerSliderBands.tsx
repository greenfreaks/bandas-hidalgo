"use client";

import React, { useEffect } from "react";
import { bandCatalog } from "@/mocks/bandas";
import './ModerSliderBands.css'
import Link from "next/link";

export default function Slider() {

  useEffect(() => {
    const nextBtn = document.querySelector(".next") as HTMLElement;
    const prevBtn = document.querySelector(".prev") as HTMLElement;
    const carousel = document.querySelector(".carousel") as HTMLElement;
    const list = document.querySelector(".list") as HTMLElement;
    const runningTime = document.querySelector(
      ".carousel .timeRunning"
    ) as HTMLElement;

    let timeRunning = 3000;
    let timeAutoNext = 7000;

    let runTimeOut: NodeJS.Timeout;
    let runNextAuto: NodeJS.Timeout;

    function resetTimeAnimation() {
      if (!runningTime) return;

      runningTime.style.animation = "none";
      runningTime.offsetHeight; // reflow
      runningTime.style.animation = "";
      runningTime.style.animation = "runningTime 7s linear 1 forwards";
    }

    function showSlider(type: "next" | "prev" | "selected") {
      const sliderItemsDom = list.querySelectorAll(".item");

      if (type === "next") {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add("next");
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);

      resetTimeAnimation();
    }

    nextBtn.onclick = () => showSlider("next");
    prevBtn.onclick = () => showSlider("prev");

    runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();
  }, []);

  return (
    <div className="carousel">
      <div className="list">
        {bandCatalog.map((band, i) => (
          <div
            key={i}
            className="item"
            style={{ backgroundImage: `url(${band.img})` }}
          >
            <div className="content">
              <div className="title">{band.name}</div>
              <div className="genre">{band.genero.join(" / ")}</div>
              <div className="des">{band.desc}</div>
              <div className="btn">
                <Link href={band.url}>
                  <button>Ver más</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button className="prev">{"<"}</button>
        <button className="next">{">"}</button>
      </div>

      <div className="timeRunning"></div>
    </div>
  );
}
