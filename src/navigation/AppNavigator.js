import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PageLoader, TopBarLoader } from "../components/Loaders";
import Login from "../screens/Login";
import Layout from "../shared/Layout";

function RootNavigator() {
  return (
    <BrowserRouter basename="/#">
      <Suspense fallback={TopBarLoader()}>
        <Switch >
          <Route component={Login} path={"/login"} exact={true} />
          <Route component={Layout} path={"/"} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default function AppNavigator() {
  return <RootNavigator />;
}
