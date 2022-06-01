import React from "react";
import { BoldSection, Footer } from "../../components";
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav";
import GDPC from "../../assets/DigitalAccounts/digitalAccounts.png";

function BelowCaptionText() {
  return (
    <>
      Bond Banking powers financial products for B2B and B2C companies across
      many verticals. Use our accounts center as the control deck for your
      financial offering whether you're building a neobank, launching easier
      expense management, or offering early pay access to your customers.
    </>
  );
}

function DigitalAccounts() {
  return (
    <div>
      <ResponsiveNav makeMenuDark />
      <BoldSection
        singleImage={true}
        image={GDPC}
        description={""}
        mainCaption={"Offer GDPC-Insuredaccounts with a fewlines of code"}
        altColor={"#f3f3f3"}
      />
      <BoldSection
        singleImage={true}
        image={GDPC}
        reverse={true}
        mainCaption={"Offer GDPC-Insuredaccounts with a fewlines of code"}
        altColor={"#fff"}
        // api_Image = {}
      />

      <Footer />
    </div>
  );
}

export default DigitalAccounts;
