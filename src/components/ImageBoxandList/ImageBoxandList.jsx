import React from "react";
// import PropTypes from "prop-types";

function ImageBoxandList({ image, listItems }) {
  return (
    <div className="flex w-10/12  ml-12 md:ml-36 gap-12 py-12">
      <img className="w-6/12 object-contain" src={image} alt="" />
      <div className="self-center w-4/12">
        <ul className="grid grid-cols-1  divide-y divide-gray-500">
          {listItems.map(({ title, description }) => (
            <li className="py-4">
              <h3 className="font-bold text-lg">{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImageBoxandList;
