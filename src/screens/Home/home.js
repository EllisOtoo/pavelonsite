import React, { useState } from "react";
import "./home.css";
import logo from "../../assets/logo.png";
import darklogo from "../../assets/pav_logo_mob.png";
import LogosSection from "../../components/LogosSection/LogosSection";

import landingImage from "../../assets/landing_Image.png";
import {
  Header,
  Footer,
  HomeHeroBanner,
  Navbar,
  MiddleSection,
  Logos,
  GenericSection,
  AnimatedSection,
} from "../../components/index";
import FooterSection from "../../components/FooterSection/FooterSection";
// import MiddleSection from "../../components/MiddleSection/MiddleSection";

/*Images Import for React*/
import creditmall from "../../assets/creditmall.png";
import credify from "../../assets/credify.png";
import stanbic from "../../assets/stanbic.png";
import gcb from "../../assets/gcb_logo.png";
import bosea from "../../assets/bosea.png";
import tf from "../../assets/teachers_fund.png";
import vodafone from "../../assets/vodafone.png";
import yango from "../../assets/yango.png";
import { useEffect, useCallback, useMemo } from "react";
import NewHeader from "../../components/NewHeader/NewHeader";
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav";
import HomePageTab from "../../components/HomePageTab/HomePageTab";
import UpdatedNavTabs from "../../components/UpdatedNavTabs/UpdatedNavTabs";
// import { useMemo } from "react/cjs/react.production.min";

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
      {/* <NewHeader /> */}
      {/* <ResponsiveNav /> */}
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

      <div>
        {/* <UpdatedNavTabs /> */}
        <HomePageTab />
        {/* <GenericSection /> */}
        {false && (
          <GenericSection
            backgroundColor="#eee"
            marginTop={-250}
            captionColor={"black"}
            callApi
            caption="Launch and scale faster"
          />
        )}
        <AnimatedSection darker customColor={"#fff"} caption="Why Pavelon?">
          <div>
            <p
              className="mb-4"
              style={{
                borderLeft: "2px solid #60d1fa",
                paddingLeft: "10px",
                fontSize: "1.3rem",
              }}
            >
              Get to market faster, no fintech experience required
            </p>
            From credit cards to Buy-Now-Pay-Later and bill payments, Pavelon
            can help you build and launch credit products in minutes, not
            months. One single API, one contract and you’re ready to go live
            with a full credit operation.
          </div>
          <div>
            <p
              className="mb-4"
              style={{
                borderLeft: "2px solid #60d1fa",
                paddingLeft: "10px",
                fontSize: "1.3rem",
              }}
            >
              Modern, Modular, reliable, and
              <br /> well-documented API
            </p>
            Get a good developer experience with our well-documented and
            easy-to-use API. Modular API design. All our products are API-first,
            pick and choose just the parts you need.
          </div>
          <div>
            <p
              className="mb-4"
              style={{
                borderLeft: "2px solid #60d1fa",
                paddingLeft: "10px",
                fontSize: "1.3rem",
              }}
            >
              Technology and banking experts—at your service{" "}
            </p>
            We work side-by-side with each of our partners, from concept to
            integration to launch—and beyond—to create an experience that is
            right for their customers and their brand. Our experienced team
            guides partners through the technical aspects of embedding lending
            in their app, but we go farther, helping them navigate the
            complexities of a highly regulated market.
          </div>
          <div>
            <p
              className="mb-4"
              style={{
                borderLeft: "2px solid #60d1fa",
                paddingLeft: "10px",
                fontSize: "1.3rem",
              }}
            >
              Unparalleled Customization
            </p>
            Pavelon’s multi-bank approach creates options so you can find the
            right banking partner to maximize your profitability and optionality
            down the road.
          </div>
        </AnimatedSection>
        <AnimatedSection
          // marginTop="-285px"
          // darker
          customColor={"#11243e"}
          caption="Ready to Get Started?"
        >
          <div>
            See how Pavelon can help you build, embed or enhance your credit
            products so you can acquire more customers, increase revenue and
            accelerate growth.
          </div>
          <br />
          <div>
            <button className="p-2 text-2xl px-4 mt-4 rounded-full bg-black text-white">
              {"Contact Sales"}
            </button>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </>
  );

  /* */
}

export default Home;
