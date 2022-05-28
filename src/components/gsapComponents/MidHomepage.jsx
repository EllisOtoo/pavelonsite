import React, { useEffect } from "react";
import top from "../../assets/middleSection/middleImage_2_top.png";
import below from "../../assets/middleSection/middleImage_2_below.png";
import rightImage from "../../assets/middleSection/middleImage_2_right.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MidHomepage() {
  let topImage, belowImage, rightImageRef, containerNodeRef;

  const scrollOptions = {
    trigger: topImage,
    scrub: 0.2,
    // toggleActions: "play pause resume pause",
    // toggleActions: "play none resume pause",
    // toggleActions: "play none none none",

    // markers: true,
  };

  useEffect(() => {
    gsap.from(topImage, {
      scrollTrigger: scrollOptions,
      x: "-10vw",
    });
    gsap.from(belowImage, {
      scrollTrigger: scrollOptions,
      y: "10vw",
    });
    gsap.from(rightImageRef, {
      scrollTrigger: scrollOptions,
      x: "10vw",
    });
  }, []);

  return (
    <div
      ref={(containerNode) => (containerNodeRef = containerNode)}
      class="flex w-10/12 mx-auto aniContainer"
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
