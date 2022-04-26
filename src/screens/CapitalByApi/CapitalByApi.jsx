import React from "react";

import Section from "../../components/HeaderSection/HeaderSection";
import CardProgram from "../../assets/cardProgram.png";

const BreakingHeader = () => {
  return (
    <div className="w-9/12 mx-auto  grid grid-cols-1 ">
      <div className="mb-8 text-5xl font-bold">How it Works</div>
      <hr />
      <div className="text-2xl pt-8">
        Pavelon provides platforms with an end-to-end lending API that enables
        you to offer access to fast and flexible financing to help your
        customers grow their businesses.
      </div>
      <div className="text-3xl w-6/12 pt-8 mb-8">
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
        Caption={`Become a source of capital for your customers`}
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
    </>
  );
}

export default CapitalByApi;
