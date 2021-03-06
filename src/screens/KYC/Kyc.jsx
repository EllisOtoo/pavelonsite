import React from "react";
import { Navbar } from "../../components";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import customerHoldingId from "../../assets/custHoldingId.png";
import codeSnippet from "../../assets/codeSnippet.png";
// import idVerification from "../../assets/Id Verification.png";
import idVerification from "../../assets/Id_Verification.png";
import gps from "../../assets/gps.png";
import consentVerification from "../../assets/consent.png";
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav";
import NavedSection from "../../components/NavedSection/NavedSection";

let captionsJSX = [
  "",
  <>
    ID Verification Pavelon enables real-time automated ID verification,
    safeguarding customer data and ensuring compliance.
  </>,
  <>
    An innovative way to get the customer’s approval. Verify user’s consent in
    real-time with consent verification. Authenticate customers with just a live
    selfie with the user holding their ID Card. Fraud and Identity theft are
    rising and simple ‘I agree’ checkboxes are not enough to take the user’s
    consent. They don’t provide any adequate evidence on who checked that box.
    Integrate Pavelon state-of-the-art Consent Verification Service to take the
    digital consent of your customers before proceeding.
    <br />
    With anti-spoofing measures and advanced AI technology, Pavelon verifies and
    authenticates the user’s identity and consent note in real-time.
  </>,

  <>
    Verify and validate addresses with local and global databases to stay ahead
    of fraudsters. The Address Verification Services allows you to verify a
    Ghana GPS digital address. Bolster identity verification with Proof of
    Address Capture Know that people are who they say they are — and where they
    live — by adding Pavelon's Proof of Address Capture to your business'
    real-time identity verification flow. Verify honest customers in seconds.
  </>,
];

function LeadInText({ JSXArray }) {
  return JSXArray;
}

function KYC() {
  return (
    <div>
      {/* <ResponsiveNav makeMenuDark /> */}
      <HeaderSection
        smallerHeader
        makeMenuDark
        isDarkHeaderText
        buttonText="Read the Docs"
        // introLogo={introLogo}
        Caption={"Phone Number Verification"}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={captionsJSX[0]}
        headerImages={[codeSnippet]}
        logoBlack
      >
        <>
          Validate users with SMS, voice, WhatsApp, and time-based one-time
          passwords. We use two API endpoints to seamlessly check that a user is
          the owner of the phone number they provide.
          <div>
            <br />
            <h3 className="font-bold">The start API endpoint</h3>
            <p>
              When the user is validating their phone number, Verify sends the
              user a 4 -10 digit verification code via SMS, WhatsApp, or voice,
              and waits for their response.
            </p>
          </div>
          <br />
          <div>
            <h3 className="font-bold">The check API endpoint</h3>
            <p>
              Verify checks the user’s input matches the code. If they match, we
              register the phone number as approved.
            </p>
          </div>
        </>
      </HeaderSection>
      <HeaderSection
        reverse
        controlSectionImage
        noHeader
        smallerHeader
        makeMenuDark
        isDarkHeaderText
        buttonText="Read the Docs"
        Caption={"ID Verification"}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={captionsJSX[1]}
        headerImages={[idVerification]}
        logoBlack
      />
      <HeaderSection
        controlSectionImage
        noHeader
        smallerHeader
        makeMenuDark
        isDarkHeaderText
        buttonText="Read the Docs"
        // introLogo={introLogo}
        Caption={"Consent Verification"}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={captionsJSX[2]}
        headerImages={[consentVerification]}
        logoBlack
      />
      <HeaderSection
        controlSectionImage
        reverse
        noHeader
        smallerHeader
        makeMenuDark
        isDarkHeaderText
        buttonText="Read the Docs"
        // introLogo={introLogo}
        Caption={"Address Verification"}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={captionsJSX[3]}
        // BelowCaptionText={<BelowCaptionText />}
        headerImages={[gps]}
        logoBlack
      />
    </div>
  );
}

export default KYC;
