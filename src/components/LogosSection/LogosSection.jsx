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
      <img className="w-5/12" src={imgSrc} alt="In Good Hands" />
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
    <div class="max-w-10xl mx-auto mt-24  mb-12 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <p class="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
        {title}
      </p>
      <div
        style={
          {
            // gridTemplateColumns: matches
            //   ? `${_3cols ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr 1fr"}`
            //   : "1fr 1fr 1fr",
          }
        }
        class={`mt-12 w-10/12 px-12 mx-auto grid grid-cols-4 sm:grid-cols-3 gap-12 md:grid-cols-5`}
      >
        {LogosData.map((item, index) => {
          console.log("idx", index);
          if (index === 4) {
            return (
              <img
                key={index}
                className=" w-8/12"
                src={item}
                alt="In Good Hands"
              />
            );
          }
          return (
            <img
              key={index}
              className="w-12/12"
              src={item}
              alt="In Good Hands"
            />
          );
        })}
      </div>
    </div>
  );
}

export default LogosSection;
