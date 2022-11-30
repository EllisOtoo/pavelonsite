import React, { useState } from "react";
import logo from "../../assets/logo.png";
import darklogo from "../../assets/pav_logo_mob.png";
import LogosSection from "../../components/LogosSection/LogosSection";
import landingImage from "../../assets/landing_Image.png";
import api_Image from "../../assets/ReadyStart/api_Image.png";
import pavApi from "../../assets/home/paveApi.png";

import {
  Header,
  Footer,
  HomeHeroBanner,
  Navbar,
  MiddleSection,
  Logos,
  GenericSection,
  AnimatedSection,
  ImageBoxandList,
} from "../../components/index";
import FooterSection from "../../components/FooterSection/FooterSection";
// import MiddleSection from "../../components/MiddleSection/MiddleSection";

/** Images Import for React*/
import creditmall from "../../assets/creditmall.png";
import credify from "../../assets/credify.png";
import stanbic from "../../assets/stanbic.png";
import gcb from "../../assets/gcb_logo.png";
import yango from "../../assets/yango.png";
import { useEffect, useCallback, useMemo } from "react";

/**   */

import NewHeader from "../../components/NewHeader/NewHeader";
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav";
import HomePageTab from "../../components/HomePageTab/HomePageTab";
import UpdatedNavTabs from "../../components/UpdatedNavTabs/UpdatedNavTabs";
// import { Button } from "@mui/material";
// import { useMemo } from "react/cjs/react.production.min";
import Buttons from "../../components/Buttons/Buttons";
import BoldSection from "../../components/BoldSection/BoldSection";
//* List Component
const List = ({ getItems, listSize }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("List component Updated");
    setItems(getItems(5));
  }, [getItems, listSize]);

  return items.map((number) => (
    <p key={number}>
      {number} and list size after computation is{listSize}
    </p>
  ));
};

//* Home Component
function Home() {
  const [number, setNumber] = useState(1);
  const [isDark, setColor] = useState(false);

  useEffect(() => console.log(`Theme state updated`), [isDark]);

  const listSize = useMemo(() => 5000 / number, [number]);

  const getItems = useCallback(
    (increaseBy) => [number, number + increaseBy, number + increaseBy * 2],
    [number]
  );

  return (
    <>
      <HomeHeroBanner
        Caption="Lending Infrastructure for Africa."
        headerGradientClass={"gradient__bg__blue"}
        SubCaption="Tap into our lenders’ pool and bring finance to your users"
        LeadIn="Join our Pool of lenders and access a merchant base that will drive retail finance revenues, without the need for complex program management."
        headerImages={[landingImage]}
        BelowCaptionText={
          <p className="mt-8 text-lg">
            Technology and infrastructure to launch and scale your fintech in
            Africa. Use Pavelon’s APIs to embed a full range of credit services
            on your platform to increase revenue streams.
          </p>
        }
      />
      <Logos LogosData={[creditmall, credify, stanbic, gcb, yango]} />
      <MiddleSection />
      <BoldSection
        motionUI
        increaseMargin={24}
        hrPresent={true}
        mainCaption={"Build-in minutes launch in weeks"}
        leadingCaption={"Built for developers"}
        buttonTitle={"Read the Docs"}
        description="With modern APIs and webhooks, you can build financial features using our clear, instructive guides in all the languages you use and love, from Node to Shell to Python"
        features={[
          {
            title: "Embeddable components",
            details:
              "Integrate our pre-built application widgets in under five minutes",
          },
          {
            title: "Extensive API",
            details:
              "Create a deeply immersive and seamless experience within your core product.",
          },
          {
            title: "Webhooks",
            details:
              " Get advanced, real-time notifications of offers, terms and more.",
          },
          {
            title: "Security",
            details:
              "Breathe easy knowing data security and protection is at the core of what we do.",
          },
        ]}
      />
      <ImageBoxandList
        flexCol={true}
        listItems={[
          {
            title: "Enhanced KYC & Digital Accounts",
            description:
              "See how Pavelon can help you build, embed or enhance your credit products so you can acquire more customers, increase revenue and accelerate growth.",
          },
          {
            title: "Digital Lending & Capital By API",
            description:
              "See how Pavelon can help you build, embed or enhance your credit products so you can acquire more customers, increase revenue and accelerate growth.",
          },
          {
            title: "Card Issuance & Disbursement API",
            description:
              "See how Pavelon can help you build, embed or enhance your credit products so you can acquire more customers, increase revenue and accelerate growth.",
          },
          {
            title: "Financial Data & Embedded Commerce",
            description:
              "See how Pavelon can help you build, embed or enhance your credit products so you can acquire more customers, increase revenue and accelerate growth.",
          },
        ]}
        image={pavApi}
      />
      <BoldSection
        api_Image={api_Image}
        hrPresent={false}
        reduceheight={true}
        altColor={"#f3f3f3"}
        buttonTitle={"Get Started"}
        mainCaption={"Ready to get Started?"}
        leadingCaption={"BUILDING CREDIT PRODUCTS HAS NEVER BEEN EASIER"}
        description="See how Pavelon can help you build, embed or enhance your credit products so you can acquire more customers, increase revenue and accelerate growth."
      />
      <Footer />
    </>
  );

  /* */
}

export default Home;
