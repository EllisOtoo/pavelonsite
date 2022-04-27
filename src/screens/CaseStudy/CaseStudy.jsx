import React from "react";
import creditmall from "../../assets/cml_logo.png";
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav";
import CaseStudySection from "./CaseStudySection.jsx/CaseStudySection";

function CaseStudy() {
  return (
    <>
      <ResponsiveNav makeMenuDark />
      <div>
        <div class="purple"></div>
        <div class="medium-blue"></div>
        <div class="light-blue"></div>
        <div class="red"></div>
        <div class="orange"></div>
        <div class="yellow"></div>
        <div class="cyan"></div>
        <div class="light-green"></div>
        <div class="lime"></div>
        <div class="magenta"></div>
        <div class="lightish-red"></div>
        <div class="pink"></div>
      </div>
      <div className="h-screen bg-gray-100">
        <div className="flex mx-auto pt-32 w-10/12 gap-24 flex-row  bg-slate-100">
          <ul className="text-2xl leading-10">
            <li className="font-bold">Creditmall</li>
            <li>Case Two</li>
            <li>Case Three</li>
            <li>Case Four</li>
            <li>Case Five</li>
          </ul>

          <div className="flex flex-col gap-4 ">
            <h2 className="text-5xl my-12 mt-0 font-bold">
              Creditmall Case Study
            </h2>
            <p className="text-lg font-bold">Creditmall BNPL App</p>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis
              sapiente necessitatibus nulla magni vitae nihil magnam minus in
              fuga cupiditate, dolor ab ex placeat quis esse modi quas
              perferendis!
            </p>
            <img className="mt-12 w-2/12" src={creditmall} alt="" />
          </div>
        </div>
      </div>
      <CaseStudySection
        leadIn={
          "How MoneyLion used DriveWealth to launch the leading financial membership app for empowering the US middle-class and underbanked to take control of their finances"
        }
        title={"The Problem"}
      >
        <p className="my-12">
          MoneyLion’s goal was to create a financial ecosystem that would help
          its underserved US customers improve their credit and access a broad
          range of customized financial products, save money on banking fees,
          and learn more how to manage their finances.
        </p>

        <p className="my-12">
          MoneyLion’s core lending product helped members access credit in times
          of need but didn’t necessarily lend itself to creating an engaged
          long-term customer or allow customers to develop good financial habits
          and build savings during periods where they had the capacity to put
          money away. In order to do that, they needed a particularly engaging
          and sticky financial product—investing. They wanted to offer automated
          managed investing to a demographic where most were newer or first time
          investors.
        </p>
      </CaseStudySection>

      <CaseStudySection
        bgColorClass="bg-gray-200"
        leadIn={
          "How MoneyLion used DriveWealth to launch the leading financial membership app for empowering the US middle-class and underbanked to take control of their finances"
        }
        title={"The Solution"}
      >
        <p className="my-12">
          MoneyLion’s goal was to create a financial ecosystem that would help
          its underserved US customers improve their credit and access a broad
          range of customized financial products, save money on banking fees,
          and learn more how to manage their finances.
        </p>

        <p className="my-12">
          MoneyLion’s core lending product helped members access credit in times
          of need but didn’t necessarily lend itself to creating an engaged
          long-term customer or allow customers to develop good financial habits
          and build savings during periods where they had the capacity to put
          money away. In order to do that, they needed a particularly engaging
          and sticky financial product—investing. They wanted to offer automated
          managed investing to a demographic where most were newer or first time
          investors.
        </p>
      </CaseStudySection>
    </>
  );
}

export default CaseStudy;
