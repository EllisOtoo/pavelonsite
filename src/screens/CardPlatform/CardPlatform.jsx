import React from "react";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import CardProgram from "../../assets/cardProgram.png";

function CardPlatform() {
  return (
    <>
      <HeaderSection
        smallerHeader
        makeMenuDark
        isDarkHeaderText
        showSingleButton
        buttonText="Join the waitlist"
        // introLogo={introLogo}
        Caption={`Build a card program
        tailored to your unique 
        business needs`}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={
          <>
            Build a card program and issue virtual or physical cards that
            exactly matches your use case.
          </>
        }
        headerImages={[CardProgram]}
        logoBlack
      />
    </>
  );
}

export default CardPlatform;
