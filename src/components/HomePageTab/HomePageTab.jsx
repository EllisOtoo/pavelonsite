import React, { useState } from "react";
import shell from "../../assets/tabbedImages/shell.png";
import python from "../../assets/tabbedImages/python.png";
import js from "../../assets/tabbedImages/js.png";
import ruby from "../../assets/tabbedImages/ruby.png";

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

function HomePageTab() {
  return (
    <div
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 79%, 0% 100%)",
        position: "relative",
        top: "450px",
      }}
      className="bg-gray-200"
    >
      <div className="flex py-52 w-8/12 my-32 pt-52 pb-96 ml-56 gap-24">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-gray-600">
            Build-in minutes, launch in weeks Designed by developers, for
            developers
          </h1>
          <p className="my-8">
            With modern APIs and webhooks, you can build financial features
            using our clear, instructive guides in all the languages you use and
            love, from Node to Shell to Python
          </p>
        </div>
        <div>
          <HomeNavedSection className="w-12/12" />
        </div>
      </div>
    </div>
  );
}

export default HomePageTab;
