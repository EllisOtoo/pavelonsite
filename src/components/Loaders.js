import React, { Fragment } from "react";
import TopBarProgress from "react-topbar-progress-indicator";
import { Grid } from "react-spinners-css";

TopBarProgress.config({
  barColors: {
    0: "green",
    "1.0": "red",
  },
  shadowBlur: 5,
});

export function TopBarLoader() {
  return (
    <React.Fragment>
      <TopBarProgress />
    </React.Fragment>
  );
}

export function PageLoader() {
  return (
    <Fragment>
      <div className={"w-screen h-screen flex justify-center items-center"}>
        <Grid size={100} />
      </div>
    </Fragment>
  );
}
