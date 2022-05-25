import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "../../components";
import Section from "../../components/HeaderSection/HeaderSection";

function Neobanks() {
  return (
    <>
      <Section
        title="For Retail Fintechs"
        smallerHeader
        makeMenuDark
        isDarkHeaderText
        animateClasses="animate__fadeIn animate__slow"
        showSingleButton
        buttonText="Join the waitlist"
        Caption={`Open accounts, issue cards, and facilitate payments`}
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
      <hr />
      <LogosSection />
      <hr />

      <div className="bg-gray-100 py-12 w-full">
        <div div className="flex w-8/12 my-12  mx-auto flex-col gap-24">
          <div className="flex">
            <h2 className="w-4/12">Problem</h2>
            <p className="w-8/12">
              Fintechs serving retail customers need to be able to track
              deposits and payments at scale. A fintech creating a new HSA needs
              to take deposits for multiple individuals at multiple companies
              and be able to disburse payments to a wide variety of businesses
              and healthcare organizations. A fintech serving companies with
              hourly workers needs to pay wages at the end of every shift by
              making account deposits or sending earnings to a worker’s debit
              card.
            </p>
          </div>
          <div className="flex">
            <h2 className="w-4/12">Solution</h2>
            <p className="w-8/12">
              Working with Pavelon and a banking partner, a fintech can open
              either an FBO or multiple FDIC insured bank accounts, issue cards,
              and facilitate payments using wires, ACH, or bill pay.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 text-gray-900 w-full">
        <div className="mx-auto w-8/12">
          <h3 className="my-4 text-lg font-bold">Products</h3>
          <h2 className="text-5xl my-2">Everything you need to get started</h2>
          <p className="text-3xl my-2">And lots of room to grow</p>
          <Link class="underline" to="">
            Read the API Docs{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>

          <div className="grid md:grid-cols-4 grid-cols-1 my-12 gap-12">
            <FeatureSet
              features={[
                {
                  faClass: "fa fa-money",
                  featureName: "Payment",
                  subText: "Connect with any payment rails",
                  featureSet: [
                    "ACH",
                    "Wire",
                    "Book Transfer",
                    "Bill Pay",
                    "Mobile Deposit Capture",
                  ],
                },
                {
                  faClass: "fa fa-credit-card-alt",
                  featureName: "Card Issuing",
                  subText: "Create a tailored card experience",
                  featureSet: [
                    "Debit Cards",
                    "Card Controls",
                    "Branded plastic",
                    "Virtual & tokenized cards",
                  ],
                },
                {
                  faClass: "fa fa-user-o",
                  featureName: "Onboarding",
                  subText: "Open FDIC insured accounts",
                  featureSet: [
                    "Commercial",
                    "Retail",
                    "On Core Accounts",
                    "FBO + virtual accounts",
                  ],
                },
                {
                  faClass: "fa fa-cogs",
                  featureName: "Service Accounts",
                  subText: "Manage account info & status",
                  featureSet: [
                    "Check balances",
                    "Balance history",
                    "Transaction history",
                    "Bank statements",
                    "Lock and unlock",
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
      <OfferSection
        bgColor="bg-gray-100"
        caption="Benefits"
        subheader="Building your neobank with Pavelon"
        featureSubheader={[
          "Start building now",
          "Flexibility",
          "Full suite of banking services",
        ]}
        explainers={[
          "Get quick sandbox access to the easiest to use and best documented API",
          "Open an FBO, multiple FBOs, or individual virtual accounts; you choose the model that works for your business",
          "Access to the full array banking services plus the custom reporting you need for your business",
        ]}
      />
      <OfferSection
        caption="Why Pavelon?"
        subheader="Get to market fast—with a pricing model that works for you"
        featureSubheader={[
          "Great developer experience",
          "Use any banking service",
          "A partner with commercial fintech experience",
          "Direct banking relationship",
        ]}
        explainers={[
          "Best documented and easiest to use API",
          "Access to a complete range of banking services",
          "We know bank systems and we understand what it takes to build and scale a fintech business",
          "If you’re building your business on banking services this is the most important relationship you have",
        ]}
      />
      <AnimatedSection customColor={"#11243e"} caption="Ready to Get Started?">
        <div>
          See how Pavelon can help you build, embed or enhance your credit
          products so you can acquire more customers, increase revenue and
          accelerate growth.
        </div>
        <br />
        <div>
          <button className="p-2 text-2xl px-4 mt-4 rounded-full bg-black text-white">
            {"Contact Sales"}
          </button>
        </div>
      </AnimatedSection>
    </>
  );
}

function FeatureSet({ features }) {
  return (
    <>
      {features.map((perFeature) => (
        <div className="flex flex-col gap-2">
          <i className={`${perFeature.faClass} fa-2x`} aria-hidden="true"></i>
          <p className="text-3xl">{perFeature.featureName}</p>
          <p className="text-base"> {perFeature.subText}</p>
          <ul className="flex mt-8 flex-col gap-2">
            {perFeature.featureSet.map((eachFeature) => (
              <li class="flex items-center gap-4" key={eachFeature}>
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                {eachFeature}
              </li>
            ))}
          </ul>
        </div>
      ))}
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

const OfferSection = ({
  bgColor = "",
  caption = "Caption Text",
  subheader = "Sub Header",
  featureSubheader = [
    "Feature Subheader",
    "Feature Subheader",
    "Feature Subheader",
    "Feature Subheader",
  ],
  explainers = ["Explain Product", "Explain Product", "Explain Product"],
}) => {
  return (
    <div className={`py-24 text-gray-900 w-full ${bgColor}`}>
      <div className=" w-8/12 mx-auto">
        <h3 className="my-4 text-lg font-bold">{caption}</h3>
        <h2 className="text-5xl my-2">{subheader}</h2>

        <div className="grid sm:grid-col-1 md:grid-cols-2  gap-12 my-16">
          <div>
            <i></i>
            <p className="text-2xl font-semi-bold">{featureSubheader[0]}</p>
            <p>
              {explainers[0]}
              {/*  Easiest to use and best documented API so you can get your
              offering in market fast */}
            </p>
          </div>
          <div>
            <i></i>
            <p className="text-2xl font-semi-bold">{featureSubheader[1]}</p>
            <p>
              {explainers[1]}
              {/*   Pavelon's deep integration with commercial banking systems makes
              it simple to add new services like bill pay, cards, or remote
              deposit capture */}
            </p>
          </div>
          <div>
            <i></i>
            <p className="text-2xl font-semi-bold">{featureSubheader[2]}</p>
            <p>
              {explainers[2]}
              {/* Our usage-based pricing ensures our incentives are aligned with
              yours */}
            </p>
          </div>
          <div>
            <i></i>
            <p className="text-2xl font-semi-bold">{featureSubheader[3]}</p>
            <p>
              {explainers[3]}
              {/* Our usage-based pricing ensures our incentives are aligned with
              yours */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neobanks;
