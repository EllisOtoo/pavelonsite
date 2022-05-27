import React, { useEffect } from "react";
import top from "../../assets/middleSection/middleImage_2_top.png";
import below from "../../assets/middleSection/middleImage_2_below.png";
import rightImage from "../../assets/middleSection/middleImage_2_right.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MidHomepage() {
  let topImage, belowImage, rightImageRef, containerNodeRef;

  useEffect(() => {
    gsap.from(topImage, {
      scrollTrigger: containerNodeRef,
      rotation: 0,
      x: -200,
      duration: 1,
    });
    gsap.from(belowImage, {
      scrollTrigger: containerNodeRef,
      rotation: 0,
      y: 200,
      duration: 1,
    });
    gsap.from(rightImageRef, {
      scrollTrigger: containerNodeRef,
      rotation: 0,
      x: 200,
      duration: 1,
    });
  }, []);

  return (
    <div
      ref={(containerNode) => (containerNodeRef = containerNode)}
      class="flex  w-full mx-auto aniContainer"
    >
      <div class="flex flex-col">
        <div ref={(node) => (topImage = node)} className="top">
          <img src={top} alt="" />
        </div>
        <div ref={(node) => (belowImage = node)} class="bottom">
          <img src={below} alt="" />
        </div>
      </div>
      <div ref={(node) => (rightImageRef = node)} class="rightImage">
        <img src={rightImage} alt="" />
      </div>
    </div>
  );
}

export default MidHomepage;
