import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from '../utils/cookies.config';


const PrivateRoute = ({
  component: Component,
  path,
  name,
  exact,
}) => {
  return (
    <Fragment>
      <Redirect from={"/"} to={"/dashboard"} />
      <Route
        path={path}
        exact={exact}
        // name={name}
        render={(props) => {
          let token = Auth.getCipher();
          if (!token) {
            return <Redirect to={{ pathname: "/login" }} />;
          }
          return <Component />;
        }}
      />
    </Fragment>
  );
};

export default PrivateRoute;
