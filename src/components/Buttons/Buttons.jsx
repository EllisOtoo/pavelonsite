import React from "react";
// border-2 border-blue-200
function Buttons({ buttonTitle, btnBGColor = "primary" }) {
  return (
    <>
      {Array.isArray(buttonTitle) ? (
        <div className="flex gap-2">
          {buttonTitle.map((perTitle, index) => (
            <button
              class={`inline-block px-6 py-2.5  ${
                index
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
          class={`my-4 w-6/12 inline-block text-base px-6 py-2.5 bg-${btnBGColor} text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out`}
        >
          {buttonTitle}
        </button>
      )}
    </>
  );
}

export default Buttons;
