import React from "react";
import { Navbar } from "../../components";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import introLogo from "../../assets/treasury.png";
import codeSnippet from "../../assets/codeSnippet.png";
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav";
import NavedSection from "../../components/NavedSection/NavedSection";

function BelowCaptionText() {
  return (
    <>
      Build deposit accounts for your customers to securely store, spend, and
      send money. Accessible, reliable accounts infrastructure for businesses
      Custody balances, facilitate transfers, transact globally. Build without
      the complexity with our flexible Digital Accounts API.
    </>
  );
}

function DigitalAccounts() {
  return (
    <div>
      {/* <ResponsiveNav makeMenuDark /> */}
      <HeaderSection
        smallerHeader
        makeMenuDark
        isDarkHeaderText
        introLogo={introLogo}
        Caption={"Offer GDPC- Insured accounts with a few lines of code"}
        showImage={true}
        noGradient
        oneImageHeader={true}
        BelowCaptionText={<BelowCaptionText />}
        headerImages={[codeSnippet]}
        logoBlack
      />
      <NavedSection />
    </div>
  );
}

export default DigitalAccounts;
