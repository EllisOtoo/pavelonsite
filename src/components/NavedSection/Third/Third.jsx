import React from "react";
import NavSectionImage from "../../../assets/thirdImage.png";

function Third() {
  return (
    <>
      <h2 className="text-3xl my-0">Lorem 3</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-32">
        <div className="w-full md:w-6/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <img className="w-full md:w-6/12" src={NavSectionImage} alt="" />
      </div>
    </>
  );
}

export default Third;
