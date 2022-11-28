import React from "react";
import { BoldSection, Footer, Navbar } from "../../components";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import customerHoldingId from "../../assets/custHoldingId.png";
import codeSnippet from "../../assets/codeSnippet.png";
// import idVerification from "../../assets/Id Verification.png";
import idVerification from "../../assets/Id_Verification.png";
import kycImage from "../../assets/EnhancedKyc/verified-1.webp";
import gps from "../../assets/gps.png";
// import consentVerification from "../../assets/consent.png";
import phoneNumberVerification from "../../assets/EnhancedKyc/Screenshot 2022-06-02 at 2.24.14 PM.png";
import IDVerification from "../../assets/EnhancedKyc/Screenshot 2022-06-02 at 2.37.05 PM.png";
import consentVerification from "../../assets/EnhancedKyc/consentVerification.jpg";
import verified from "../../assets/EnhancedKyc/verified-1.webp";
import holdingID from "../../assets/EnhancedKyc/HoldingIDtaking picture.png";
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav";
import NavedSection from "../../components/NavedSection/NavedSection";
import SectionGrandHeader from "../../components/HeroKYCHeader/SectionGrandHeader";
// import { SingleImage } from "../ImageBox/ImageBox";
// import ImageBox from "../ImageBox/ImageBox";
// import Features from "../../Features/Features";
// import Buttons from "../../components/Buttons/Buttons";

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
      <ResponsiveNav makeMenuDark />
      <SectionGrandHeader
        mainCaption={"Easiest way to Verify and Onboard users."}
        description={
          "Verify Phone Numbers, ID Cards, and Addresses. Verify user’s consent in real-time with consent verification. Know that people are who they say they are, Faster."
        }
        image={kycImage}
        showButton={true}
        buttonTitle={"Explore Docs"}
      />

      {/* <KYCSection /> */}
      <HeaderSection
        smallerHeader
        makeMenuDark
        reverse
        isDarkHeaderText
        buttonText="Read the Docs"
        noHeader
        // introLogo={introLogo}
        Caption={"Phone Number Verification"}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={captionsJSX[0]}
        headerImages={[phoneNumberVerification]}
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
      <BoldSection
        imageWidth={300}
        singleImage={true}
        image={holdingID}
        mainCaption={"ID Verification"}
        description={
          "Validate users by allowing users to upload a picture of their national ID. Details and the photograph on the ID must match that of the details provided by a new user as well as a live photograph of the new user to prevent fraudsters and impersonators from gaining access to the platform.  "
        }
        altColor={"#f3f3f3"}
      />
      <HeaderSection
        reverse
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
      <Footer />
    </div>
  );
}

function KYCSection({
  description,
  increaseMargin,
  header,
  leadingCaption,
  mainCaption,
  children,
  image,
  features,
  darkButton,
  showButton = false,
  buttonTitle,
  btnBGColor,
  singleImage = true,
  api_Image,
  hrPresent = false,
}) {
  return (
    <div
      className={`w-full h-screen bg-gray-100 mt-${
        increaseMargin ? increaseMargin : "0"
      }`}
    >
      <div className={`${"text-black"} w-12/12 ml-12 md:ml-56`}>
        <div
          className={`flex flex items-center gap-4 md:gap-12 flex-wrap md:flex-nowrap`}
        >
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-bold uppercase ">{leadingCaption}</h3>
            <h1 className="text-6xl font-bold">{mainCaption}</h1>
            <p className="my-8">{description}</p>
            {children && children}
            {showButton ? (
              <button
                class={`my-4 w-6/12 inline-block text-base px-6 py-2.5 bg-${btnBGColor} text-${
                  darkButton ? "black" : "white"
                } font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
              >
                {buttonTitle}
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="">
            <img className="h-screen object-contain" src={image} alt="" />
          </div>
        </div>
        {hrPresent && <hr className="my-12" />}
        {/*  <div className="grid grid-cols-4 py-8 gap-24">
          {features && <Features features={features} />}
        </div> */}
      </div>
    </div>
  );
}

export default KYC;
