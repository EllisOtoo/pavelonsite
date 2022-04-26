import React, { useEffect, useState } from "react";

import Section from "../../components/HeaderSection/HeaderSection";
import CardProgram from "../../assets/cardProgram.png";
import stanbic from "../../assets/stanbic.png";
import gcb from "../../assets/gcb_logo.png";
import bosea from "../../assets/bosea.png";
import aymicrocredit from "../../assets/ay_logo.png";
import tffinancialservices from "../../assets/tf.jpg";
import teachersfund from "../../assets/tf_logo.png";
import { FeatureSection, Footer } from "../../components";
import customers from "../../assets/customers.webp";
import LogosSection from "../../components/LogosSection/LogosSection";

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

const BreakingHeader = () => {
  console.log("--------------");
  return (
    <div className="w-8/12 mx-auto  mt-24 grid grid-cols-1 ">
      <div className="mb-24">
        <div className="mb-8 text-5xl font-bold">Lending, simplified</div>
        <hr />
        <div className="text-3xl pt-8">
          Acquire borrowers via their favorite apps—Whatsapp, Telegram and more.
          Enable partial or complete loan application journeys. Pavelon builds
          on top of your existing APIs to support any loan construct—Personal
          Loans, Buy Now, Pay Later Unsecured or Secured against Payroll, or
          Tier 3 Pensions Contributions.
        </div>
      </div>

      <div className="mb-24">
        <div className="mb-8 text-5xl font-bold">Use Cases</div>
        <div className="mb-8 text-4xl font-bold">
          Fully Digitized Controller Loans.
        </div>
        <hr />
        <div className="text-3xl pt-8">
          Offer end-to-end, from loan application to disbursement, fully digital
          loans for over 1.5M Government Workers on the Controller and
          Accountant General Platform. Features
        </div>

        <ul className="text-2xl flex flex-col gap-2 pl-8">
          <li> Lend on your Own Controller Code, or Use our Controller Code</li>
          <li>
            Enhanced KYC to prevent Fraud - ID Verification, Address
            Verification, etc.
          </li>
          <li>
            {" "}
            Lend to more than 1.5 M Workers on the CAGD Platform Support for Buy
          </li>
          <li>
            Now, Pay Later, and Personal Loans Automatic Connection to Credit
            Bureau for Credit Reports on Applicants
          </li>
        </ul>
      </div>
      {/* ********* */}
      <div className="mb-24">
        <div className="mb-8 text-4xl font-bold">
          Fully Digitized Tier-3 Pensions Backed Loans.
        </div>
        <hr />
        <div className="text-3xl pt-8">
          Pavelon enables Lenders to offer loans to Tier 3 Pensions contributors
          fully secured by the contributions of the borrower. Pavelon works with
          NPRA-licensed service providers. Features
        </div>

        <ul className="text-2xl flex flex-col gap-2 pl-8">
          <li> Lend up to 85% of the Borrower's total contributions</li>
          <li>
            Enhanced KYC to prevent Fraud - ID Verification, Address
            Verification, etc.
          </li>
          <li>
            Lend to more than 1.5 million Tier-3 Contributors Support for Buy
            Now
          </li>
          <li>Support for Buy Now, Pay Later, and Personal Loans</li>
          <li>
            Automatic Connection to Credit Bureau for Credit Reports on Loan
            Applicants
          </li>
        </ul>
      </div>

      <div>
        <div className="mb-8 text-4xl font-bold">
          Digital Scheme Loans Loans enabled on multiple platforms
        </div>
        <hr />
        <div className="text-3xl pt-8">
          Pavelon does the hard work of integrating with your existing lending
          APIs and building easy-to-use loan application flows. You can simply
          redirect borrowers to ready-made loan journeys.
        </div>
        <Features
          features={[
            {
              name: "Convert more customers",
              description:
                "Pavelon does seamless integrations, with real-time actions and notifications to improve conversions for your borrowers.",
              list: [
                "One-stop-shop for acquisition, underwriting, origination, and onboarding",
                " Specialized lender marketplace across multiple industries",
                "Expert funding advisors",
                "Flexible platform to enhance, build, embed financial products",
              ],
              // img: placeholderFeatureImage,
            },
            {
              name: "Evolve your lending platform              ",
              description:
                "Offer loans via custom-branded web URLs, Whatsapp chatbots, or any of Pavelon’s channel partners.",
              list: [
                "One-stop-shop for acquisition, underwriting, origination, and onboarding",
                " Specialized lender marketplace across multiple industries",
                "Expert funding advisors",
                "Flexible platform to enhance, build, embed financial products",
              ],
            },
          ]}
        />
        {/* ------ */}
      </div>

      {/* ----- */}
      <div>
        <div className="mb-8 text-4xl font-bold">
          Verified leads from digital channels
        </div>
        <hr />
        <div className="text-3xl pt-8">
          Utilise Pavelon’s pre-qualification engine and network of loan
          providers to source leads from various digital channels. Or run your
          own digital loan campaigns for preferred, trusted customers who are
          already banking with you. ys.
        </div>
        <Features
          features={[
            {
              name: "Benefit from lower Customer Acquisition Costs",
              description:
                "Pavelon’s digital channel partners offer a lower acquisition cost and high traffic, with millions of Indians already using their products.",
            },
            {
              name: "Evolve your lending platform              ",
              description:
                "Our pre-qualification engine ingests customer data, applies your underwriting rules and sends the prepared lead directly to your LOS.",
            },
          ]}
        />
        {/* ------ */}
        <div>
          <div className="mb-8 text-4xl font-bold">
            Verified leads from digital channels
          </div>
          <hr />
          <div className="text-3xl pt-8">
            Tap into the first and only consumer credit marketplace. Get instant
            access to thousands of customers shopping in real-time, leveraging
            our infrastructure.
          </div>
        </div>
      </div>
    </div>
  );
};

function CapitalByApi() {
  const [testValue, setTestValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTestValue("Hello");
    }, 3000);
  }, []);

  return (
    <>
      <Section
        smallerHeader
        makeMenuDark
        isDarkHeaderText
        animateClasses="animate__fadeIn animate__slow"
        showSingleButton
        buttonText="Join the waitlist"
        // introLogo={introLogo}
        Caption={`Reach more customers, 
        make better lending decisions
        `}
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
        headerImages={[customers]}
        logoBlack
      />
      {/*  */}
      <BreakingHeader />
      {/* New Section Divider */}

      {/* <h1>How it Works</h1> */}

      <div className="w-8/12 mx-auto  mt-24 grid grid-cols-1 ">
        <div>
          <div className="mb-2 text-4xl font-bold">You're in good hands</div>
          <hr />
        </div>
      </div>
      <LogosSection
        _3cols
        LogosData={[
          stanbic,
          gcb,
          bosea,
          aymicrocredit,
          tffinancialservices,
          teachersfund,
        ]}
      />
      {/* <FeatureSection /> */}
      <Footer />
    </>
  );
}

export default CapitalByApi;
