import React, { useEffect, useState, useRef } from "react";
import { useAlert } from "react-alert";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import logo from "../../assets/logo.png";
import darklogo from "../../assets/pav_logo_mob.png";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import "./headersection.css";
import loansImage from "../../assets/lending _Image.png";
import loans_dashboard from "../../assets/dashboard_lenders.png";
import ResponsiveNav from "../ResponsiveNav/ResponsiveNav";
/* This example requires Tailwind CSS v2.0+ */

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function HeaderSection({
  makeMenuDark = false,
  isDarkHeaderText = false,
  introLogo = null,
  headerGradientClass,
  BelowCaptionText = "lorem ",
  Caption = "Pavelon Page Caption",
  oneImageHeader = false,
  SubCaption = "",
  LeadIn = "Lead In Text Sample",
  bg_colorClass = "bg_default",
  smallerBgGradient,
  logoBlack = false,
  showImage = true,
  noGradient = false,
  headerImages = [loansImage, loans_dashboard],
}) {
  const [showMenu, setMenu] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const alert = useAlert();
  const element = useRef();

  useEffect(() => {
    /*   element.current.addEventListener("click", () => {
      alert.show("Hello Package!");
    }); */
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setMatches(e.matches);
    });
  }, [matches]);

  return (
    <div className="parentDiv relative">
      <div style={{ position: "relative", zIndex: "2" }} className="relative">
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Nav goes here */}
            <ResponsiveNav makeMenuDark={makeMenuDark} />
          </div>

          <div
            className={`${
              showMenu ? "" : "hidden"
            } absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Link to={"/"}>
                    <img
                      width="100"
                      className="h-5 w-auto logo-mb"
                      src={darklogo}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => setMenu(!showMenu)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>

                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  Product
                </a>

                <Link
                  to="/use_cases"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  Use Cases
                </Link>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700  hover:bg-gray-50"
                >
                  Marketplace
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <a
                href="#"
                className="hidden block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>

      {noGradient ? "" : <div className="gradientBackground"></div>}
      {/*  <div className={`headerSlider ${smallerBgGradient && "smallerClipPath"}`}>
        <div class={`bg ${bg_colorClass}`}></div>
        <div class={`bg ${bg_colorClass} bg2 `}></div>
        <div class={`bg ${bg_colorClass} bg3`}></div>
      </div>
      */}
      <div className={`relative  headerContainer`}>
        <div className="max-w-7xl mx-auto py-32 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div
            className="flex"
            style={{
              justifyContent: "space-around",
              alignItems: "flex-end",
              padding: "25px",
            }}
          >
            <div
              className="w-6/12"
              // style={{
              //   width: "55vw",
              // }}
            >
              {introLogo && (
                <img src={introLogo} className="w-4/12" alt="Intro Logo" />
              )}
              <p
                style={{
                  fontSize: !matches ? "2rem" : "5rem ",
                  alignSelf: "center",
                }}
                className="py-6 mt-1 text-7xl font-extrabold text-gray-900   sm:text-5xl sm:tracking-tight lg:text-6xl"
              >
                {Caption}
              </p>
              <p style={{ flex: 1 }}>{BelowCaptionText}</p>

              <div style={{ flex: 1 }} className="py-6">
                <button className="p-2 mt-4 rounded-full bg-black text-white">
                  Start Now
                </button>
                <button
                  style={{ marginLeft: "5px" }}
                  className="p-2 pl-4 mt-4 rounded-full bg-black text-white"
                >
                  Contact Sales
                </button>
              </div>
            </div>
            {showImage ? (
              <div style={{ alignItems: "flex-end" }} className="flex w-6/12">
                {headerImages
                  ? headerImages.map((eachImgSrc, idx, array) => {
                      if (idx > 0) {
                        return (
                          <img
                            src={eachImgSrc}
                            className="w-6/12 animate__animated animate__slideInRight  animate__slow"
                            style={{
                              marginTop: "3rem",
                            }}
                            alt=""
                          />
                        );
                      }
                      return (
                        <img
                          src={eachImgSrc}
                          className={`${
                            oneImageHeader ? "w-full" : "w-4/12"
                          } animate__animated animate__slideInRight`}
                          style={{
                            marginTop: "3rem",
                            // width: "25vw",
                            // position: "relative",
                            // right: "100px",
                          }}
                          alt=""
                        />
                      );
                    })
                  : ""}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
