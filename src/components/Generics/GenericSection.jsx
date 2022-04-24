import React, { useState, useEffect } from "react";
import "./generic.css";
import { Link } from "react-router-dom";
import axios from "axios";

function GenericSection({
  marginTop = 0,
  backgroundColor = "#11243e",
  captionColor = "white",
  caption = "The world’s most powerful and easy-to-use APIs",
  features,
  callApi,
}) {
  const [responseData, setResponseData] = useState("");
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const fetchData = (endpoint) => {
    return axios.get(endpoint).then(({ data }) => {
      console.log("====================================");
      console.log(typeof data);
      console.log("====================================");
      return JSON.stringify(data, null, 2);
      // JSON.stringify(data);//* Stringify called in UseEffect
    });
  };

  useEffect(() => {
    callApi &&
      fetchData("https://randomuser.me/api")
        .then((randomData) => setResponseData(randomData))
        .catch((error) => console.log(error));
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setMatches(e.matches);
    });
  }, []);

  return (
    <div
      style={{ marginTop: `${marginTop}px`, backgroundColor: backgroundColor }}
      className="genContainer md:py-24"
    >
      <div
        style={{ marginTop: "280px" }}
        className="m-auto py-16 xl:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-max lg:max-w-7xl mx-auto">
          {/* New Section */}
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Transactions
              </h2>
              <p
                style={{ color: captionColor }}
                className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${captionColor} sm:text-4xl`}
              >
                {caption}
              </p>
            </div>
          </div>
          {/* New Section */}
          <div className="relative">
            <div className="relative  md:p-6">
              <div className=" lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et
                    eget. Ultricies tellus felis id dignissim eget. Est augue
                    maecenas risus nulla ultrices congue nunc tortor.
                  </p>
                  <div className="mt-8 inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Contact sales
                    </a>
                  </div>

                  <div className="flex">
                    {["Sub Caption ", "Sub Caption 2"].map((subCaption) => (
                      <IconsTextCol subCaption={subCaption} />
                    ))}
                  </div>
                </div>
                <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                  <p>
                    Ultrices ultricies a in odio consequat egestas rutrum. Ut
                    vitae aliquam in ipsum. Duis nullam placerat cursus risus
                  </p>

                  {matches && (
                    <p>
                      Erat pellentesque dictumst ligula porttitor risus eget et
                      eget. Ultricies tellus felis id dignissim eget. Est augue{" "}
                      <a href="#">maecenas</a> risus nulla ultrices congue nunc
                      tortor. Eu leo risus porta integer suspendisse sed sit
                      ligula elit.
                    </p>
                  )}

                  <ol role="list">
                    <li>
                      Integer varius imperdiet sed interdum felis cras in nec
                      nunc.
                    </li>
                  </ol>
                  <p>
                    Amet, eu nulla id molestie quis tortor. Auctor erat justo
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* New Section */}
          {features && (
            <div
              className="px-6"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "30vw",
                rowGap: "100px",
              }}
            >
              {features.map((item) => (
                <div style={{ color: "black" }}>
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="grey"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                        />
                      </svg>
                    </li>
                    <li>
                      <p>{item.caption}</p>{" "}
                    </li>
                    <li>{item.featureText}</li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const IconsTextCol = ({ subCaption = "Sample Text" }) => (
  <div className="">
    <div style={{ width: "200px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    </div>
    <p>{subCaption}</p>
    <div style={{ display: "flex", color: "blue" }}>
      <Link to="/AKAK">
        <p style={{ color: "#60d1fa" }} className="text-sky-400">
          See libraries
        </p>
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
);

export default GenericSection;
