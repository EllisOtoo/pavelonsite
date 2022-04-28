import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function CaseStudySection({
  leadIn,
  title,
  children,
  bgColorClass,
  hideCaseStudy,
}) {
  useEffect(() => {
    return function () {
      console.log("Component Unmounted");
    };
  }, [hideCaseStudy]);

  return (
    <div className={`h-screen ${bgColorClass ? bgColorClass : ""}`}>
      <div className={`mx-auto py-48  h-screen my-auto w-6/12 `}>
        <h3 className="text-2xl">{leadIn}</h3>
        <h2 className="text-3xl mt-12">
          <svg data-testid="DeleteIcon"></svg>
          {title}
        </h2>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default CaseStudySection;
