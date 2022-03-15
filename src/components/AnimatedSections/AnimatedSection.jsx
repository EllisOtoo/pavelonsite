import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./animatedSection.css";

function AnimatedSection() {
  return (
    <div className="lastSection">
      <div className="m-auto py-16 xl:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          {/* New Section */}
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Global Scale
              </h2>
              <p
                className={`mt-2 text-3xl leading-8 font-extrabold text-white tracking-tight sm:text-4xl`}
              >
                The backbone for internet business{" "}
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
                    maecenas risus nulla ultrices congue nunc tortor. For
                    ambitious companies around the world, Stripe makes moving
                    money as simple, borderless and programmable as the rest of
                    the internet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* New Section */}
          <div
            style={{ justifyContent: "space-around" }}
            className="flex px-8 text-gray-500"
          >
            {[
              "Sub Caption ",
              "Sub Caption 2",
              "Sub Caption 3",
              " Sub Caption 4",
            ].map((subCaption) => (
              <IconsTextCol subCaption={subCaption} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const IconsTextCol = ({ subCaption = "Sample Text" }) => (
  <div
    style={{ color: "white", display: "flex", flexDirection: "column" }}
    className=""
  >
    {/* <div className="" style={{ flex: 1 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    </div> */}
    <p
      style={{
        borderLeft: "2px solid #60d1fa",
        paddingLeft: "10px",
        fontSize: "1.3rem",
      }}
    >
      Sub Caption
    </p>
    <div style={{ display: "flex" }}>
      <Link to="/AKAK">
        <p
          style={{ color: "#ccc", marginTop: "20px" }}
          className="text-gray-500"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          accusamus facere soluta sequi.
        </p>
      </Link>
    </div>
  </div>
);

export default AnimatedSection;
