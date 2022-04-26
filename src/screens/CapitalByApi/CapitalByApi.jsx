import React, { useEffect, useState } from "react";

import Section from "../../components/HeaderSection/HeaderSection";
import CardProgram from "../../assets/cardProgram.png";
import { FeatureSection, Footer } from "../../components";

const BreakingHeader = () => {
  console.log("--------------");
  return (
    <div className="w-8/12 mx-auto  grid grid-cols-1 ">
      <div className="mb-8 text-5xl font-bold">How it Works</div>
      <hr />
      <div className="text-3xl pt-8">
        Pavelon provides platforms with an end-to-end lending API that enables
        you to offer access to fast and flexible financing to help your
        customers grow their businesses.
      </div>
      <div className="text-2xl w-6/12 pt-8 mb-8">
        Instant, Embedded Lending designed for fintech, neobanks, and gig
        platforms.
      </div>
      <ul className="text-2xl flex flex-col gap-2 pl-8">
        <li>Scales in real-time</li>
        <li>Instant eligibility</li>
        <li>Seamless for your users</li>
        <li>One-click payout</li>
        <li>Fully embedded</li>
        <li>Transparent pricing</li>
      </ul>
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
        animateClasses="animate__zoomInDown"
        showSingleButton
        buttonText="Join the waitlist"
        // introLogo={introLogo}
        Caption={`Lend Money to your users at scale`}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={
          <>
            Easily embed credit products within your core experience and give
            your customers seamless access to the capital they need to grow.
          </>
        }
        headerImages={[CardProgram]}
        logoBlack
      />
      {/*  */}
      <BreakingHeader />
      {/* New Section Divider */}
      <Section
        noHeader
        smallerHeader
        reverse
        makeMenuDark
        isDarkHeaderText
        showSingleButton
        buttonText="Join the waitlist"
        // introLogo={introLogo}
        Caption={`Become a source of capital for your customers
        `}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={
          <>
            Pavelon provides platforms with an end-to-end lending API that
            enables you to offer access to fast and flexible financing to help
            your customers grow their businesses.
          </>
        }
        headerImages={[CardProgram]}
        logoBlack
      />

      {/* <h1>How it Works</h1> */}
      <Section
        noHeader
        smallerHeader
        makeMenuDark
        isDarkHeaderText
        showSingleButton
        buttonText="Join the waitlist"
        // introLogo={introLogo}
        Caption={`Building credit products has never been easier`}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={
          <>
            Only Pavelon’s embedded credit platform gives companies everything
            they need to build, embed or enhance credit products.
          </>
        }
        headerImages={[CardProgram]}
        logoBlack
      />
      <Section
        noHeader
        smallerHeader
        makeMenuDark
        isDarkHeaderText
        showSingleButton
        reverse
        buttonText="Join the waitlist"
        // introLogo={introLogo}
        Caption={`Get to market faster, no fintech experience required`}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={
          <>
            From credit cards to Buy-Now-Pay-Later and B2B payments, Pavelon can
            help you build and launch credit products in minutes, not months.
            One single API, one contract and you’re ready to go live with a full
            credit operation.
          </>
        }
        headerImages={[CardProgram]}
        logoBlack
      />
      <FeatureSection />
      <Footer />
    </>
  );
}

export default CapitalByApi;
