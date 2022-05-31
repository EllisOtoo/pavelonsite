import React, { useState } from "react";
import shell from "../../assets/tabbedImages/shell.png";
import python from "../../assets/tabbedImages/python.png";
import js from "../../assets/tabbedImages/js.png";
import ruby from "../../assets/tabbedImages/ruby.png";
import UpdatedNavTabs from "../UpdatedNavTabs/UpdatedNavTabs";
import ImageBox from "../ImageBox/ImageBox.jsx";
import { FeatureSection } from "..";
import Features from "../Features/Features";

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

function BoldSection() {
  return (
    <div
      style={{
        backgroundColor: "#11243e",
        color: "white",
      }}
      className="w-full"
    >
      <div className="py-32 w-8/12 my-32 ml-12 md:ml-56">
        <div className="flex flex-col md:flex-row  gap-4 md:gap-12 ">
          <div className="w-full md:w-6/12 ">
            <h3 className="text-2xl my-4 font-bold text-gray-100">
              Built for developers
            </h3>
            <h1 className="text-4xl font-bold text-gray-100">
              Build-in minutes <br /> launch in weeks
            </h1>
            <p className="my-8">
              With modern APIs and webhooks, you can build financial features
              using our clear, instructive guides in all the languages you use
              and love, from Node to Shell to Python
            </p>
          </div>
          <ImageBox />
        </div>
        <hr className="my-12" />
        <div className="grid grid-cols-4 py-8 ">
          <Features
            features={[
              {
                title: "Embeddable components",
                details:
                  "Integrate our pre-built application widgets in under five minutes",
              },
              {
                title: "Extensive API",
                details:
                  "Create a deeply immersive and seamless experience within your core product.",
              },
              {
                title: "Webhooks",
                details:
                  " Get advanced, real-time notifications of offers, terms and more.",
              },
              {
                title: "Security",
                details:
                  "Breathe easy knowing data security and protection is at the core of what we do.",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default BoldSection;
