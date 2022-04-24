import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import FirstSection from "./First/First";
import SecondSection from "./Second/Second";
import ThirdSection from "./Third/Third.jsx";

function NavedSection() {
  const [currentSection, setCurrentSection] = useState(<FirstSection />);

  const firstButton = "First Button";
  const SecondButton = "Second Button";
  const ThirdButton = "Third Button";

  const filterToShowText = (currentButton) => {
    switch (currentButton) {
      case SecondButton:
        setCurrentSection(SecondSection);
        break;
      case ThirdButton:
        setCurrentSection(ThirdSection);
        break;
      default:
        setCurrentSection(FirstSection);
        return;
    }
  };

  return (
    <div
      className="px-16 py-12 bg-slate-300 my-32 mx-auto w-10/12 drop-shadow-sm"
      style={{
        position: "relative",
        top: "200px",
        backgroundColor: "#eee",
      }}
    >
      <div className="flex justify-start gap-32 divide-x">
        <p
          className="cursor-pointer  hover:underline"
          onClick={() => filterToShowText(firstButton)}
        >
          {firstButton}
        </p>
        <p
          className="cursor-pointer"
          onClick={() => filterToShowText(SecondButton)}
        >
          {SecondButton}
        </p>
        <p
          className="cursor-pointer"
          onClick={() => filterToShowText(ThirdButton)}
        >
          {ThirdButton}
        </p>
      </div>
      <div style={{ minHeight: "400px" }} className="min-h-[500px]">
        {currentSection}
      </div>
    </div>
  );
}

export default NavedSection;
