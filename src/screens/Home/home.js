import React, { useState } from "react";
import "./home.css";
import logo from "../../assets/logo.png";
import darklogo from "../../assets/pav_logo_mob.png";
import LogosSection from "../../components/LogosSection/LogosSection";
import {
  Header,
  Footer,
  Navbar,
  MiddleSection,
  Logos,
  GenericSection,
  AnimatedSection,
} from "../../components/index";
import FooterSection from "../../components/FooterSection/FooterSection";
// import MiddleSection from "../../components/MiddleSection/MiddleSection";

/*Images Import for React*/
import creditmall from "../../assets/cml.png";
import credify from "../../assets/credify.png";
import stanbic from "../../assets/stanbic.png";
import gcb from "../../assets/gcb_logo.png";
import bosea from "../../assets/bosea.png";
import tf from "../../assets/tf.png";
import vodafone from "../../assets/vodafone.png";
import yango from "../../assets/yango.png";
import { useEffect, useCallback, useMemo } from "react";
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
      <Header
        Caption="Lending Infrastructure for Africa."
        headerGradientClass={"gradient__bg__blue"}
        SubCaption="Tap into our lenders’ pool and bring finance to your users"
        LeadIn="Join our Pool of lenders and access a merchant base that will drive retail finance revenues, without the need for complex program management.
        "
      />
      <Logos
        LogosData={[
          creditmall,
          credify,
          stanbic,
          gcb,
          tf,
          bosea,
          yango,
          vodafone,
        ]}
      />
      <MiddleSection />
      <GenericSection />
      <GenericSection
        backgroundColor="#eee"
        marginTop={-350}
        captionColor={"black"}
        callApi
        caption="A technology-first approach to payments and finance"
        features={[
          {
            icon: "Feature Icon 1",
            caption: "Caption One",
            featureText: "Lorem Ipsum",
          },
          {
            icon: "Feature Icon 2",
            caption: "Caption Two",
            featureText: "Lorem Ipsum",
          },
        ]}
      />
      <AnimatedSection />
      <Footer />
    </>
  );

  /* */
}

export default Home;
