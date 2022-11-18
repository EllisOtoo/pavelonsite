import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Avatar } from "@mui/material";
import InvestmentImage01 from "../../assets/Investment/3.png";
import InvestmentImage02 from "../../assets/Investment/2.png";
import { Fade } from "@mui/material";

// import anime from "animejs/lib/anime.es.js";
// import styles from "./investment sStyles.module.css";
// const targetObject = { x: 0 };
const MyAvatar = React.forwardRef((props, ref) => {
  return (
    <div {...props} ref={ref}>
      X
    </div>
    // <Avatar {...props} ref={ref}>
    //   X
    // </Avatar>
  );
});

const PavelonAtomic = () => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [switched, setSwitch] = useState(false);
  const [choice, setChoice] = useState(true);

  const switchDiv = useRef(null);
  const container = useRef(null);
  const withoutPav = useRef(null);
  const rightBox = useRef(null);
  const leftBox = useRef(null);
  const svgPath = useRef(null);

  let containerProps;
  let motionRectProps;
  let withoutPavProps;

  const intro = () => {
    var tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.to(switchDiv.current, {
      x: containerProps.width - withoutPavProps.width,
    })
      .to(
        rightBox.current,
        {
          x: "5rem",
        },
        "<"
      )
      .to(leftBox.current, { x: "-5rem" }, "<");

    return tl;
  };

  const conclusion = () => {
    var tl = gsap.timeline();
    tl.to(switchDiv.current, { x: 0, duration: 1 })
      .to(
        rightBox.current,
        {
          x: 0,
        },
        "<"
      )
      .to(leftBox.current, { x: 0 }, "<");

    return tl;
  };

  const switchLength = () => {
    setSliderWidth((prev) => withoutPavProps.width + prev);
  };

  const moveRight = () => {
    setSwitch(true);
    intro();
  };

  const moveLeft = () => {
    conclusion();
    setSwitch(false);
  };

  useLayoutEffect(() => {
    withoutPavProps = withoutPav.current.getBoundingClientRect();
    containerProps = container.current.getBoundingClientRect();
    motionRectProps = switchDiv.current.getBoundingClientRect();
  });

  useEffect(() => {
    // intro();
    setTimeout(() => {
      setSliderWidth(withoutPavProps.width);
    });
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-56  justify-center items-center">
        <h2 className="text-5xl px-10 py-2">
          {"We’ve done the heavy lifting for you"}
        </h2>
        {/* <div ref={container} className=" w-10/12 relative bg-blue-800 "> */}
        <div ref={container} className=" w-10/12 md:w-2/12 relative ">
          <div
            ref={switchDiv}
            // className="rounded-full bg-blue-300 h-6 w-32"
            className="rounded-full bg-blue-300 h-6 "
            style={{ width: sliderWidth + 10 }}
          ></div>
          <div className="absolute flex top-0 justify-between w-full">
            <div ref={withoutPav} onClick={moveLeft}>
              Without Pavelon
            </div>
            <div onClick={moveRight}>With Pavelon</div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-around pb-12"> */}
      <div className="flex justify-around  px-4  items-center mb-24">
        <div ref={rightBox} className="h-20 w-20 ">
          <img width={"50%"} src={InvestmentImage01} alt="" />
        </div>

        <div className="w-8/12 flex justify-center gap-12 md:justify-around items-center">
          {switched ? (
            <>
              <div className="flex  flex-col items-center">
                <Fade in={true} timeout={4000}>
                  <Avatar
                    // className=" bg-blue-300"
                    sx={{ bgcolor: "#9dc4f8" }}
                  >
                    x
                  </Avatar>
                </Fade>
                <p>Pavelon</p>
              </div>

              {/*  <div>
                  <Avatar sx={{ bgcolor: "red" }}>x</Avatar>
                </div>
                <div>1</div> */}
            </>
          ) : (
            <>
              <div className="flex flex-col items-center">
                {/*  <Fade>{<MyAvatar />}</Fade>
                <div>1</div> */}
                <Fade in={switched === false} timeout={4000}>
                  <Avatar sx={{ bgcolor: "red" }}>x</Avatar>
                </Fade>
              </div>
              <div className="flex  flex-col items-center">
                <Avatar sx={{ bgcolor: "red" }}>x</Avatar> <div>2</div>
              </div>
              <div className="flex  flex-col items-center">
                <Avatar sx={{ bgcolor: "red" }}>x</Avatar> <div>3</div>
              </div>
              <div className="flex  flex-col items-center">
                <Avatar sx={{ bgcolor: "red" }}>x</Avatar> <div>4</div>
              </div>
            </>
          )}
        </div>

        <div ref={leftBox} className="h-20 w-20">
          <img width={"70%"} src={InvestmentImage02} alt="" />
        </div>
      </div>
      <div className="bg-blue-300 w-12/12 "></div>
    </>
  );
};

export default PavelonAtomic;
