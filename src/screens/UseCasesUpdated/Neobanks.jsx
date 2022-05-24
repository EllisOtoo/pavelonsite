import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Section from "../../components/HeaderSection/HeaderSection";

function Neobanks() {
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
      <hr />
      <LogosSection />
      <hr />

      <div className="bg-gray-100 py-12 w-full">
        <div div className="flex w-8/12 my-12  mx-auto flex-col gap-24">
          <div className="flex">
            <h2 className="w-4/12">The Problem</h2>
            <p className="w-8/12">
              Successful neobanks identify underserved customer segments and
              tailor offerings to meet their needs. You need a banking partner
              who can help navigate the complexities of money transfer, mitigate
              risk, and provide access to the infrastructure of a chartered
              bank. Additionally, you need a banking as a service partner that
              handles integrations into the banks’ infrastructure and do it
              quickly.
            </p>
          </div>
          <div className="flex">
            <h2 className="w-4/12">The Solution</h2>
            <p className="w-8/12">
              Use Pavelon APIs to embed a full range of banking services from
              account opening to payments to cards. Our usage-based pricing
              ensures our incentives are aligned with yours.
            </p>
          </div>
        </div>
      </div>

      <div className="py-24 text-gray-900 w-full">
        <div className="mx-auto w-8/12">
          <h3 className="my-4">Products</h3>
          <h2 className="text-5xl my-2">Everything you need to get started</h2>
          <p className="text-3xl my-2">
            Using Pavelon is 5x faster and cheaper than doing your own
            integration
          </p>
          <Link class="underline" to="">
            Read the API Docs{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>

          <div className="flex my-12 gap-12">
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
              <li key={eachFeature}>
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

export default Neobanks;
