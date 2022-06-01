import React from "react";
// import PropTypes from "prop-types";

function ImageBoxandList({ image, listItems }) {
  return (
    <div className="flex w-8/12 gap-12 sm:ml-12 md:ml-56 py-12">
      <img className="w-6/12 object-contain" src={image} alt="" />
      <div className="self-center w-6/12">
        <ul className="grid my-auto grid-cols-1 divide-y gap-12 divide-gray-100">
          {listItems.map(({ title, description }) => (
            <li>
              <h3 className="font-bold text-lg">{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ImageBoxandList.propType = {
//   image: PropTypes.string,
//   listItems: PropTypes.array,
// };

export default ImageBoxandList;
