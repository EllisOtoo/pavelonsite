import React, { useEffect, useState } from "react";

import Section from "../../components/HeaderSection/HeaderSection";
import jireh from "../../assets/jireh_logo.png";
import credify from "../../assets/credify.png";
import vroom from "../../assets/vroom.png";
import bosea from "../../assets/bosea.png";
import aymicrocredit from "../../assets/ay_2.png";
import tffinancialservices from "../../assets/tf.jpg";
import teachersfund from "../../assets/tf_logo.png";
import { FeatureSection, Footer, Logos } from "../../components";
import customers from "../../assets/customers.webp";
import { chipClasses } from "@mui/material";
// import LogosSection from "../../components/LogosSection/ LogosSection";

function Features({ features }) {
  return (
    <div className="py-12 my-24 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 ">
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex flex-col gap-8">
                  {/* <img className="w-2/12" src={feature.img} alt="" /> */}
                  <p className=" text-3xl leading-8 font-bold text-gray-900">
                    {feature.name}
                  </p>
                  <p>{feature.description}</p>
                </div>

                {/* <ul className=" my-8 ml-4 list-disc">
                  {feature.list.map((listItem) => (
                    <li
                      className="text-base leading-7 text-gray-500"
                      key={listItem}
                    >
                      {" "}
                      {listItem}
                    </li>
                  ))}
                </ul> */}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const BreakingHeader = ({ breakingCaption, children }) => {
  console.log("--------------");
  return (
    <div className="w-8/12 mx-auto  mt-24 grid grid-cols-1 ">
      <div className="mb-24">
        <h2 className="text-5xl mb-8 font-bold"> {breakingCaption}</h2>
        <hr />
        <div className="text-xl pt-8">{children}</div>
      </div>
    </div>
  );
};

const sectionOptions = {
  reverse: true,
  noHeader: true,
  smallerHeader: true,
  makeMenuDark: true,
  isDarkHeaderText: true,
};

function DigitalLending() {
  return (
    <>
      <Section
        smallerHeader
        makeMenuDark
        isDarkHeaderText
        animateClasses="animate__fadeIn animate__slow"
        showSingleButton
        buttonText="Join the waitlist"
        Caption={`The Next-Gen Platform
For Automated Digital Lending.

        `}
        noButton={false}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={
          <>
            Utilize Pavelon’s channel partners—like payment apps, payroll
            services, financial comparison websites, CRM solutions, or tax
            apps—for effective distribution at lower costs. Get pre-verified
            leads and offer complete or partial loan application journeys.
          </>
        }
        headerImages={[]}
        logoBlack
      />
      <div className="w-8/12 mx-auto  mt-24 grid grid-cols-1 ">
        <div>
          <div className="mb-2 text-4xl font-bold">
            The easiest way to offer consumer loans in your own branding
          </div>
          <hr />
        </div>
      </div>
      <LogosSection LogosData={[jireh, credify, aymicrocredit, vroom]} />
      <Section
        reverse
        noHeader
        smallerHeader
        makeMenuDark
        noButton={false}
        isDarkHeaderText
        animateClasses="animate__fadeIn animate__slow"
        showSingleButton
        buttonText="Join the waitlist"
        // introLogo={introLogo}
        Caption={`Originate Loans Your
        Way With The Most
        Flexible LOS Ever Built
        
        `}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={
          <>
            Streamline loan origination with modern user interfaces, an open API
            and built-in underwriting, process automation, document management
            and CRM features. You’re in control, with the ability to set up your
            exact data structure, lending products and origination workflow.
          </>
        }
        headerImages={[]}
        logoBlack
      />
      <BreakingHeader breakingCaption={"Better Loan Origination"}>
        <p>
          Every lender is unique and needs a loan origination system that meets
          their origination process - not the other way around. In contrast to
          cookie-cutter legacy systems, Pavelon’s LOS was built to support the
          unique needs of innovative lenders, with modular capabilities and a
          modern design that streamlines work and increases productivity.
        </p>
        <br />
        <p>
          Pavelon includes everything that’s required to operate a best-in-class
          lending business, from digital and automation features to credit and
          regulatory tools. Our platform’s unparalleled flexibility lets you
          customize the data structure, application views, underwriting
          processes and borrower communications to optimize your origination
          workflow.
        </p>
      </BreakingHeader>
      <>
        {/*  */}
        {/* <BreakingHeader /> */}
        {/* New Section Divider */}

        {/* <h1>How it Works</h1> */}

        {/* <div className="w-8/12 mx-auto  mt-24 grid grid-cols-1 ">
        <div>
          <div className="mb-2 text-4xl font-bold">You're in good hands</div>
          <hr />
        </div>
      </div>
      <Logos
        _3cols
        LogosData={[
          stanbic,
          gcb,
          bosea,
          aymicrocredit,
          tffinancialservices,
          teachersfund,
        ]}
      /> */}

        {/* <FeatureSection /> */}
      </>

      <Section
        noHeader
        smallerHeader
        makeMenuDark
        isDarkHeaderText
        animateClasses="animate__fadeIn animate__slow"
        showSingleButton
        noButton={false}
        buttonText="Join the waitlist"
        // introLogo={introLogo}
        Caption={`Automate, Control And
        Optimize Complex
        Lending Decisions
        `}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={
          <>
            Digitize your underwriting, verification and other lending decisions
            to improve credit performance, ensure compliance and increase
            efficiency. Pavelon’s Decision Engine makes it easy to integrate
            data sources and build decision workflows – without writing any
            code.
          </>
        }
        headerImages={[]}
        logoBlack
      />
      <BreakingHeader
        breakingCaption={
          "Completely Automated Decisioning For Underwriting, Verification And More"
        }
      >
        <p>
          Delivering a streamlined lending experience to your borrowers requires
          digitizing complex underwriting and verification decisions – going
          from manual to automated and from in-person to online. Pavelon’s
          Decision Engine was built to simplify and accelerate this effort.
        </p>
        <br />
        <p>
          Unlike legacy systems that are rigid due to hard-coded logic, our
          Decision Engine enables decision automation with a powerful no-code
          user interface for implementing complex decision logic and a flexible
          open-API architecture for near-instant decision processing.
        </p>
      </BreakingHeader>

      <Section
        {...sectionOptions}
        animateClasses="animate__fadeIn animate__slow"
        // showSingleButton
        noButton={false}
        buttonText="Join the waitlist"
        // introLogo={introLogo}
        Caption={`Launch A Best-In-Class
        Digital Channel And
        Fund More Loans, Faster
        
        `}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={
          <>
            Create a self-service online application process for your borrowers
            with Pavelon’s flexible, multi-product digital lending portals. Our
            platform enables automated processing and we white-label your portal
            with a unique design and the ideal workflow for your customers.
          </>
        }
        headerImages={[]}
        logoBlack
      />

      <BreakingHeader
        breakingCaption={
          "The Future Of Lending Is Digital Pavelon Helps You Get There"
        }
      >
        <p>
          We’re changing how lenders launch digital products. In contrast to
          traditional lending platforms that limit innovation, Pavelon’s
          platform was built to enable it and our flexible technical
          architecture lets you quickly launch a best-in-class online
          application experience.{" "}
        </p>
        <br />
        <p>
          Our lending portals are customized for you by a team that understands
          the challenges of digital lending. We previously built and sold our
          own lending platform and now combine deep lending and technical
          expertise to help our customers launch amazing products.{" "}
        </p>
      </BreakingHeader>

      <Footer />
    </>
  );
}

function LogosSection({
  _3cols = false,
  title = "",
  LogosData = ["#", "#", "#", "#"],
}) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setMatches(e.matches);
    });
  }, [matches]);

  return (
    <div class="max-w-10xl mx-auto py-12 px-4  lg:px-8">
      <p class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
        {title}
      </p>
      <div
        style={
          {
            // gridTemplateColumns: matches
            //   ? `${_3cols ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr 1fr"}`
            //   : "1fr 1fr 1fr",
          }
        }
        class={` w-8/12 mx-auto grid grid-cols-2 gap-2 md:grid-cols-4`}
      >
        {LogosData.map((item, index) => {
          if (index === 4) {
            return (
              <img
                key={index}
                className=" w-8/12"
                src={item}
                alt="In Good Hands"
              />
            );
          }
          return (
            <img
              key={index}
              className="w-10/12"
              src={item}
              alt="In Good Hands"
            />
          );
        })}
      </div>
    </div>
  );
}

export default DigitalLending;
