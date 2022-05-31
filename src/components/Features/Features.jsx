import React from "react";

function Features({ features }) {
  return (
    <>
      {features.map((perFeature) => {
        return (
          <div>
            <h3 className="font-bold">{perFeature.title}</h3>
            <p>{perFeature.details}</p>
          </div>
        );
      })}
    </>
  );
}

export default Features;
