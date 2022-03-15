import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TopBarLoader } from "../components/Loaders";
import Home from "../screens/Home/home";
import Lenders from "../screens/ForLenders/Lenders";
import UseCases from "../screens/UseCases/UseCases";

function RootNavigator() {
  return (
    <BrowserRouter basename="/#">
      <Suspense fallback={TopBarLoader()}>
        <Switch>
          <Route component={Home} path={"/"} exact={true} />
          <Route component={Lenders} path={"/forLenders"} exact={true} />
          <Route component={UseCases} path={"/use_cases"} exact={true} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default function AppNavigator() {
  return <RootNavigator />;
}
