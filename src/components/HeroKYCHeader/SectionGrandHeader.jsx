import React from "react";
import Buttons from "../Buttons/Buttons";
import { SingleImage } from "../ImageBox/ImageBox";
import ImageBox from "../ImageBox/ImageBox";
import Features from "../Features/Features";

function SectionGrandHeader({
  description,
  increaseMargin,
  header,
  leadingCaption,
  mainCaption,
  children,
  image,
  features,
  showButton = false,
  buttonTitle,
  singleImage = true,
  api_Image,
  hrPresent = false,
}) {
  return (
    <div
      className={`w-full h-screen bg-gray-100 mt-${
        increaseMargin ? increaseMargin : "0"
      }`}
    >
      <div className={`${"text-black"} w-12/12 ml-12 md:ml-56`}>
        <div
          className={`flex flex items-center gap-4 md:gap-12 flex-wrap md:flex-nowrap`}
        >
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-bold uppercase ">{leadingCaption}</h3>
            <h1 className="text-6xl font-bold">{mainCaption}</h1>
            <p className="my-8">{description}</p>
            {children && children}
            {showButton ? (
              <Buttons
                btnBGColor="primary"
                buttonTitle={buttonTitle}
                darkButton={false}
              />
            ) : (
              ""
            )}
          </div>
          <div className="">
            <img className="h-screen object-contain" src={image} alt="" />
          </div>
        </div>
        {hrPresent && <hr className="my-12" />}
        <div className="grid grid-cols-4 py-8 gap-24">
          {features && <Features features={features} />}
        </div>
      </div>
    </div>
  );
}

export default SectionGrandHeader;
