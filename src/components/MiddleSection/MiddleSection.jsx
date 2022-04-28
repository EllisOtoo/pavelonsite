import React, { useState, useEffect, useRef } from "react";
import "./middleSection.css";
import LoanAppImage from "../../assets/lending _Image.png";
import gifAni from "../../assets/gif_ani.gif";
import dashboard from "../../assets/dashboard.png";
import visa from "../../assets/visa.jpg";
import { Link } from "react-router-dom";

function MiddleSection() {
  // * Use Query to change flex to column for smaller screens
  const [showMenu, setMenu] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const refContainer = useRef();

  useEffect(() => {
    console.log(matches);
    console.log(refContainer.current);
    window.matchMedia("(max-width: 768px)").addEventListener("change", (e) => {
      setMatches(e.matches);
    });
  }, []);

  // console.log(matches);
  return (
    <div ref={refContainer} className="max-w-5xl ml-56  ">
      {/* BLOCKS STARTS HERE */}
      <h3 className="tracking-tight  font-semibold w-6/12 text-gray-600 sm:text-5xl md:text-4xl">
        A fully integrated suite of Lending, eCommerce, and Payment products.
      </h3>
      <div className="flex gap-24 my-6">
        <p className="text-md text-gray-500">
          We bring together everything that’s required to build lending into any
          product - from End User Application using our{" "}
          <Link style={{ color: "blue" }} class="" to={"#"}>
            Digital Lending APIs{" "}
          </Link>
          to Disbursement or Payout. We also offer{" "}
          <Link style={{ color: "blue" }} class="" to={"#"}>
            Card Issuing API for both
          </Link>{" "}
          virtual and physical and cards.
          <br />
          <button
            style={{
              padding: "10px 15px",
              margin: "20px 0",
              fontSize: "15pt",
            }}
            className="text-semibold rounded-full rounded-3xl seemore"
          >
            Learn About
          </button>
        </p>
        <p className="text-gray-500">
          Pavelon’s products also power “Buy Now, Pay Later” Services using our
          Commerce API. We also help companies onboard their users, process
          loans, collect loans, access financial data, and much more.
        </p>
      </div>
      {!matches ? (
        <div className="mobile-only-loan-section">
          <div className="mobile-only-loan-img">
            <img
              style={{ display: "none" }}
              width={200}
              src={LoanAppImage}
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="superGrid">
          <div className="subPartition_1">
            <div className="subPartition_1_Item"></div>
            <div className="subPartition_1_Item">
              <img src={gifAni} alt="" />
            </div>
          </div>
          <div className="subPartition_2">
            <div className="subPartition-item">
              <img width={420} src={dashboard} alt="" />
            </div>
            <div className="subPartition-item subPartition-item-2">
              <img className="LoanAppImage" src={LoanAppImage} alt="" />
            </div>
            <div className="subPartition-item"></div>
            <div className="subPartition-item subPartition-item-4">
              <img className="visa" src={visa} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MiddleSection;
