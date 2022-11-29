import React from "react";
import { useHistory } from "react-router-dom";

// border-2 border-blue-200
function Buttons({ buttonTitle, btnBGColor = "primary", darkButton }) {
  const history = useHistory();

  const handleClick = (idx) => {
    if (idx === 0) {
      history.push("/contactForm");
    } else {
      history.push("/contactSalesAgent");
    }
  };

  return (
    <>
      {Array.isArray(buttonTitle) ? (
        <div className="flex gap-2">
          {buttonTitle.map((perTitle, idx) => (
            <button
              onClick={() => handleClick(idx)}
              class={`inline-block px-6 py-2.5 ${
                idx
                  ? "border-2 border-custom-dark-blue text-gray-900"
                  : "bg-primary"
              } text-white font-medium text-base leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
            >
              {perTitle}
            </button>
          ))}
        </div>
      ) : (
        <button
          class={`my-4 w-6/12 inline-block text-base px-6 py-2.5 bg-${btnBGColor} text-${
            darkButton ? "black" : "white"
          } font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
        >
          {buttonTitle}
        </button>
      )}
    </>
  );
}

export default Buttons;
