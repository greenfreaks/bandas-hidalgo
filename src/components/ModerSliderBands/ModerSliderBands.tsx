"use client";

import React, { useEffect, useRef } from "react";
import { bandCatalog } from "@/mocks/bandas";
import Link from "next/link";
import styles from "./ModerSliderBands.module.css";

export default function Slider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Ahora el JS encontrará los elementos perfectamente porque mantienen su nombre clásico
    const nextBtn = container.querySelector(".next") as HTMLElement;
    const prevBtn = container.querySelector(".prev") as HTMLElement;
    const carousel = container.querySelector(".carousel") as HTMLElement;
    const list = container.querySelector(".list") as HTMLElement;
    const runningTime = container.querySelector(".timeRunning") as HTMLElement;

    if (!nextBtn || !prevBtn || !carousel || !list) return;

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    let runTimeOut: NodeJS.Timeout;
    let runNextAuto: NodeJS.Timeout;

    function resetTimeAnimation() {
      if (!runningTime) return;
      runningTime.style.animation = "none";
      runningTime.offsetHeight; // Reflow trigger
      runningTime.style.animation = "";
      runningTime.style.animation = "runningTimeSlider 7s linear 1 forwards";
    }

    function showSlider(type: "next" | "prev") {
      const sliderItemsDom = list.querySelectorAll(".item");
      if (sliderItemsDom.length === 0) return;

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
        if (document.body.contains(nextBtn)) {
          nextBtn.click();
        }
      }, timeAutoNext);

      resetTimeAnimation();
    }

    const handleNext = () => showSlider("next");
    const handlePrev = () => showSlider("prev");

    nextBtn.addEventListener("click", handleNext);
    prevBtn.addEventListener("click", handlePrev);

    runNextAuto = setTimeout(() => {
      if (document.body.contains(nextBtn)) {
        nextBtn.click();
      }
    }, timeAutoNext);

    resetTimeAnimation();

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
      if (nextBtn) nextBtn.removeEventListener("click", handleNext);
      if (prevBtn) prevBtn.removeEventListener("click", handlePrev);
    };
  }, []);

  return (
    // sliderContainer actúa como escudo aislante
    <div ref={containerRef} className={styles.sliderContainer}>
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
                  <Link href={`/banda/${band.url}`}>
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
    </div>
  );
}