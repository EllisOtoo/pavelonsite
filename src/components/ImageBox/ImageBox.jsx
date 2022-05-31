import React from "react";
import CodeImage from "../../assets/BuildInMinutes/Screenshot 2022-05-31 at 3.20.27 PM.png";

function ImageBox() {
  return (
    <div className="static">
      <div className="bg-custom-blue w-96 h-4/5 relative">
        <img src={CodeImage} alt="" />
      </div>
      <div className="bg-gray-600 rounded-md w-56 h-4/5 relative bottom-48 left-72 "></div>
    </div>
  );
}

export default ImageBox;
