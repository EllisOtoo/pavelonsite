import React from "react";
import "./logossection.css";
import stanbic from "../../assets/stanbic.png";
import { useEffect, useState } from "react";

const LogoItem = ({ imgSrc }) => {
  const setLogoHeight = () => {
    if (
      imgSrc === "/static/media/cml.ec3387f3.png" ||
      imgSrc === "/static/media/credify.710a0246.jpeg"
    ) {
      console.log("condition true");
      return 50;
    } else {
      return 100;
    }
  };

  return (
    <div class="flex justify-center py-8 px-8">
      <img className="w-6/12" src={imgSrc} alt="In Good Hands" />
    </div>
  );
};

function LogosSection({
  _3cols = false,
  title = "",
  LogosData = ["#", "#", "#", "#", "#", "#"],
}) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setMatches(e.matches);
    });
  }, [matches]);

  return (
    <div style={{ position: "relative", marginTop: "50px" }} class="bg-white">
      <div class="max-w-10xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          {title}
        </p>
        <div
          style={{
            gridTemplateColumns: matches
              ? `${_3cols ? "1fr 1fr 1f" : "1fr 1fr 1fr 1fr"}`
              : "1fr 1fr 1fr",
            width: "80vw",
            margin: "0 auto",
          }}
          class={`mt-6 grid grid-cols-4 gap-0.5 md:grid-cols-3 lg:mt-8`}
        >
          {LogosData.map((item, index) => (
            <LogoItem key={index} imgSrc={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogosSection;
