import React from "react";
import { BoldSection, Footer } from "../../components";
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav";
import GDPC from "../../assets/DigitalAccounts/digitalAccounts.png";
import currentBal from "../../assets/EnhancedKyc/CurrrentBal.png";
import myTransactions from "../../assets/EnhancedKyc/myTransactions.png";
import mnthExpenses from "../../assets/EnhancedKyc/MnthlyExpenses.png";

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
        mainCaption={"Offer GDPC-Insured accounts with a few lines of code"}
        altColor={"#f3f3f3"}
      />
      <BoldSection
        singleImage={true}
        image={currentBal}
        reverse={true}
        description={
          "Bond Banking powers financial products for B2B and B2C companies across many verticals. Use our accounts center as the control deck for your financial offering•"
        }
        mainCaption={"Your multi-purpose accounts center"}
        altColor={"#fff"}
        // api_Image = {}
      >
        <>
          <h3 className="font-bold ">Deposit Accounts</h3>
          <p className="mb-12">
            Issue a deposit account and then easily create or modify that
            account. Create multiple accounts for a customer or business,
            whatever you need, quaranteed up to $250,000 FDIC insurance on each
            account. Use the Bond Banking API to build financial products for
            your clients that store funds, such as bank accounts, credit
            accounts, and/or balance accounts.
          </p>

          <h3 className="font-bold">Oversight & Control</h3>
          <p>
            Transfer a balance to and from an Account. Debit or Credit card -
            each account has its own unique number for easy transfers. Charge or
            waive monthly maintenance, overdraft, or transfer fees - at your
            discretion. Use our Banking API to quickly activate and deactivate
            accounts, as you see fit.
          </p>
        </>
      </BoldSection>
      <BoldSection
        singleImage={true}
        image={myTransactions}
        description={""}
        mainCaption={"Money access, your way"}
        altColor={"#f3f3f3"}
      >
        <>
          <h3 className="font-bold ">Debit Cards</h3>
          <p className="mb-12">
            Easily issue debit cards, physical or virtual, to move money from
            and to Bond deposit accounts. Use them in Apple Pay or Android Pay,
            or in any store.
          </p>

          <h3 className="font-bold">Cash Access</h3>
          <p className="mb-12">
            Enable your customers to deposit or access cash in their deposit
            accounts via ATMs and popular convenience stores like 7-Eleven and
            Walgreens.
          </p>

          <h3 className="font-bold">Early payroll access</h3>
          <p>
            Enable early pay days by making the money available as soon as the
            payor notifies us of the intended deposit - which is often up to 2
            das before most banks make the funds available
          </p>
        </>
      </BoldSection>
      <BoldSection
        singleImage={true}
        image={mnthExpenses}
        mainCaption={"Pavelon Ledger"}
        altColor={"#fff"}
        reverse
      >
        <>
          <p className="mb-12">
            Our Banking and account APIs are supported by Bond Ledger, a
            world-class, universal ledger system where you can capture any
            information related to account balance, upcoming transactions,
            transaction history and statuses. Receive notifications every time
            the account has a transaction. Quickly build your own statements by
            pulling data based on payment frequency using our Accounts API and
            best practice guides. Monitor and categorize expenses for budgeting.
            View your account balance, upcoming transactions, and transaction
            history in our a visual dashboard within Bond Portal. Ledger's
            accounting engine offers double entry accounting for all
            sub-accounts, including end of month and end of day transaction
            clearing. Additionally, Ledger's internal transaction engine was
            built with the ISO 8583 specification.
          </p>
        </>
      </BoldSection>
      <Footer />
    </div>
  );
}

export default DigitalAccounts;
