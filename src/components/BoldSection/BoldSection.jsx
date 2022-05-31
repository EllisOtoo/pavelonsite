import React, { useState } from "react";
import shell from "../../assets/tabbedImages/shell.png";
import python from "../../assets/tabbedImages/python.png";
import js from "../../assets/tabbedImages/js.png";
import ruby from "../../assets/tabbedImages/ruby.png";
import UpdatedNavTabs from "../UpdatedNavTabs/UpdatedNavTabs";
import ImageBox from "../ImageBox/ImageBox.jsx";
import { FeatureSection } from "..";
import Features from "../Features/Features";
import Buttons from "../Buttons/Buttons";

function Shell() {
  return <img src={shell} alt="" />;
}

function Python() {
  return <img src={python} alt="" />;
}

function Ruby() {
  return <img src={ruby} alt="" />;
}

function JS() {
  return <img src={js} alt="" />;
}

function HomeNavedSection() {
  const [currentSection, setCurrentSection] = useState(<Shell />);

  const filterToShowText = (currentButton) => {
    switch (currentButton) {
      case "Python":
        setCurrentSection(<Python />);
        break;
      case "Ruby":
        setCurrentSection(<Ruby />);
        break;
      case "Js":
        setCurrentSection(<JS />);
        break;
      default:
        setCurrentSection(<Shell />);
        return;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-start gap-4">
        <p
          className="cursor-pointer text-2xl  hover:underline"
          onClick={() => filterToShowText("Shell")}
        >
          {"Shell"}
        </p>
        <p
          className="cursor-pointer text-2xl hover:underline"
          onClick={() => filterToShowText("Python")}
        >
          {"Python"}
        </p>
        <p
          className="cursor-pointer text-2xl  hover:underline"
          onClick={() => filterToShowText("Ruby")}
        >
          {"Ruby"}
        </p>
        <p
          className="cursor-pointer text-2xl hover:underline"
          onClick={() => filterToShowText("Js")}
        >
          {"Js"}
        </p>
      </div>
      {currentSection}
    </div>
  );
}

function BoldSection({
  increaseMargin,
  reduceheight,
  leadingCaption,
  description,
  mainCaption,
  features,
  altColor,
  api_Image,
  hrPresent,
  buttonTitle,
}) {
  console.log("reduce Height", reduceheight);
  return (
    <div
      style={{
        // height: height ? height : "auto",
        backgroundColor: altColor ? altColor : "#11243e",
        color: altColor ? "black" : "white",
      }}
      className={`w-full mt-${increaseMargin ? increaseMargin : "0"}`}
    >
      <div
        className={`py-32 ${
          altColor ? "text-black" : "text-gray-100"
        } w-8/12 ${""} ml-12 md:ml-56`}
      >
        <div className="flex flex-col md:flex-row  gap-4 md:gap-12 ">
          <div className="w-full md:w-6/12 ">
            <h3 className="text-lg my-4 font-bold uppercase ">
              {leadingCaption}
            </h3>
            <h1 className="text-6xl font-bold ">{mainCaption}</h1>
            <p className="my-8">{description}</p>
            <Buttons
              btnBGColor="secondary"
              buttonTitle={buttonTitle}
              darkButton={true}
            />
          </div>
          <ImageBox api_Image={api_Image} />
        </div>
        {hrPresent && <hr className="my-12" />}
        <div className="grid grid-cols-4 py-8 gap-24">
          {features && <Features features={features} />}
        </div>
      </div>
    </div>
  );
}

export default BoldSection;
