import React, { useState } from "react";
import shell from "../../assets/tabbedImages/shell.png";
import python from "../../assets/tabbedImages/python.png";
import js from "../../assets/tabbedImages/js.png";
import ruby from "../../assets/tabbedImages/ruby.png";
import UpdatedNavTabs from "../UpdatedNavTabs/UpdatedNavTabs";

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
        backgroundColor: "#11243e",
        color: "white",
        // position: "relative",
        // top: "0px",
      }}
    >
      <div className="flex flex-col md:flex-row py-32 w-8/12 my-32 ml-12 md:ml-56 gap-12">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-gray-100">
            Build-in minutes <br /> launch in weeks
          </h1>
          <h3 className="text-2xl my-4 font-bold text-gray-100">
            Designed by developers, for developers
          </h3>
          <p className="my-8">
            With modern APIs and webhooks, you can build financial features
            using our clear, instructive guides in all the languages you use and
            love, from Node to Shell to Python
          </p>
        </div>
        <div>
          <UpdatedNavTabs />
          {/* <HomeNavedSection className="w-12/12" /> */}
        </div>
      </div>
    </div>
  );
}

export default HomePageTab;
