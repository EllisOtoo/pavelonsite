import React from "react";
import { BoldSection, Footer } from "../../components";
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav";
// import GDPC from "../../assets/DigitalAccounts/digitalAccounts.png";
import InvestmentImage from "../../assets/Investment/Screenshot 2022-11-14 at 12.36.30 PM.png";
import InvestmentPhone from "../../assets/Investment/4.png";
import UserApi from "../../assets/Investment/userAPi.png";
import currentBal from "../../assets/EnhancedKyc/CurrrentBal.png";
import myTransactions from "../../assets/EnhancedKyc/myTransactions.png";
import mnthExpenses from "../../assets/EnhancedKyc/MnthlyExpenses.png";
import PavelonAtomic from "../../components/pavelonAtomic/pavelonAtomic";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MUICard from "../../components/a_molecules/card";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import FooterSection from "../../components/FooterSection/FooterSection";

const InvestmentAsAService = () => (
  <>
    <ResponsiveNav makeMenuDark />
    <BoldSection
      altColor={"#f7fafe"}
      singleImage={true}
      image={InvestmentImage}
      showButton
      description={
        "Improve your value proposition, increase customer loyalty, and increase profitability while allowing your clients to create wealth with you."
      }
      buttonTitle="Request Access"
      mainCaption={"Investment as a Service"}
    />
    <PavelonAtomic />
    <BoldSection
      altColor={"#f7fafe"}
      singleImage={true}
      image={InvestmentPhone}
      reverse
      description={
        "Support your customers’ investment journeys without building your UI from scratch. We offer fully customizable front-end experiences that can be tailored to match your design system."
      }
      mainCaption={"Turnkey Experiences"}
    >
      <ul className="ml-4 leading-10">
        <li>
          <CheckCircleIcon /> Fully customizable{" "}
        </li>
        <li>
          <CheckCircleIcon /> Suitable for engagement{" "}
        </li>
        <li>
          <CheckCircleIcon /> Access for new investors
        </li>
      </ul>
    </BoldSection>
    <BoldSection
      altColor={"#f7fafe"}
      singleImage={true}
      image={UserApi}
      description={
        "For even more control over the user experience, implement using our API. Implementation is quick and simple thanks to our intuitive APIs and thorough documentation."
      }
      mainCaption={"Developer first APIs"}
    >
      <ul className="ml-4 leading-10">
        <li>
          <CheckCircleIcon />
          Developer Friendly
        </li>
        <li>
          <CheckCircleIcon /> Easy to Setup
        </li>
        <li>
          <CheckCircleIcon /> Secure and Complaint
        </li>
      </ul>
    </BoldSection>

    <div className="my-32">
      <div className="flex flex-col w-full h-56 gap-12 justify-center items-center">
        <h2 className="text-5xl px-10 py-2">
          {"Cutting-edge investing capabilities"}
        </h2>

        <div className="flex w-8/12 gap-8">
          <MUICard
            caption={"Direct Indexing"}
            MUIIconComp={
              <CheckCircleIcon color="primary" sx={{ fontSize: 40 }} />
            }
            description={
              "Satisfy the growing investor appetite for individual stock ownership while providing meaningful diversification to your customers."
            }
          />
          <MUICard
            caption={"ESG Investing"}
            MUIIconComp={
              <CheckCircleIcon color="primary" sx={{ fontSize: 40 }} />
            }
            description={
              "Satisfy the growing investor appetite for individual stock ownership while providing meaningful diversification to your customers."
            }
          />
          <MUICard
            caption={"Tax-Loss Harvesting"}
            MUIIconComp={
              <CheckCircleIcon color="primary" sx={{ fontSize: 40 }} />
            }
            description={
              "Satisfy the growing investor appetite for individual stock ownership while providing meaningful diversification to your customers."
            }
          />
        </div>
      </div>
    </div>
    <div className="h-screen flex flex-col justify-center gap-12 items-center bg-blue-50">
      <h2 className="text-5xl px-10 py-2">{"Want to launch investing?"}</h2>
      <Button variant="contained">
        <Typography>Request Access</Typography>
        <OpenInNewIcon />
      </Button>
    </div>
    <FooterSection />
  </>
);

export default InvestmentAsAService;
