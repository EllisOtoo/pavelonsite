import React from "react";
import CodeImage from "../../assets/BuildInMinutes/Screenshot 2022-05-31 at 3.20.27 PM.png";

function ImageBox({ api_Image }) {
  return (
    <div className="static">
      <div className=" w-96 h-4/5 relative">
        <img src={api_Image ? api_Image : CodeImage} alt="" />
      </div>
      {api_Image ? (
        ""
      ) : (
        <div className="bg-gray-600 rounded-md w-56 h-4/5 relative bottom-48 left-72 "></div>
      )}
    </div>
  );
}

export default ImageBox;
