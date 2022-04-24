import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import FirstSection from "./First/First";
import SecondSection from "./Second/Second";
import ThirdSection from "./Third/Third.jsx";

function NavedSection() {
  const [currentSection, setCurrentSection] = useState(<FirstSection />);

  const firstButton = "Step One";
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
      className="px-16 py-12 bg-slate-300 my-16 mx-auto w-10/12 drop-shadow-sm"
      style={{
        position: "relative",
        top: "200px",
      }}
    >
      <div className="my-12">
        <h2 className="text-5xl my-12">How it Works</h2>
        <p>
          Digital Accounts are bank accounts maintained by a financial
          institution, in which a customer can deposit and withdraw money.
          Digital accounts can be checking accounts, savings accounts, or any of
          several other types. Digital accounts to develop your fintech
          business. Use our digital account technology so your customers use the
          balance however they want.
        </p>
      </div>
      <div className="p-8" style={{ backgroundColor: "#eee" }}>
        <div className="flex justify-start gap-32 divide-x">
          <p
            className="cursor-pointer font-bold hover:underline"
            onClick={() => filterToShowText(firstButton)}
          >
            {firstButton}
          </p>
          <p
            className="cursor-pointer  font-bold hover:underline"
            onClick={() => filterToShowText(SecondButton)}
          >
            {SecondButton}
          </p>
          <p
            className="cursor-pointer  font-bold hover:underline"
            onClick={() => filterToShowText(ThirdButton)}
          >
            {ThirdButton}
          </p>
        </div>
        <div style={{ minHeight: "400px" }} className="min-h-[500px]">
          {currentSection}
        </div>
      </div>
    </div>
  );
}

export default NavedSection;
