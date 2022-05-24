import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TopBarLoader } from "../components/Loaders";
import Home from "../screens/Home/home";
import Lenders from "../screens/ForLenders/Lenders";
import UseCases from "../screens/UseCases/UseCases";
import DigitalAccounts from "../screens/DigitalAccounts/DigitalAccounts";
import Kyc from "../screens/KYC/Kyc";
import CommerceApi from "../screens/CommerceApi/CommerceApi";
import CardPlatform from "../screens/CardPlatform/CardPlatform";
import CapitalByApi from "../screens/CapitalByApi/CapitalByApi";
import CapitalByApi_Lenders from "../screens/CapitalByApi_Lenders/CapitalByApi_Lenders";
import CaseStudy from "../screens/CaseStudy/CaseStudy";
import DigitalLending from "../screens/DigitalLending/DigitalLending";
// import DigitalAccounts from "../screens/DigitalAccounts/DigitalAccounts";

function RootNavigator() {
  return (
    <BrowserRouter basename="/#">
      <Suspense fallback={TopBarLoader()}>
        <Switch>
          <Route component={Home} path={"/"} exact={true} />
          {/* <Route component={Lenders} path={"/forLenders"} exact={true} /> */}
          <Route component={CaseStudy} path={"/use_cases"} exact={true} />
          <Route
            component={CapitalByApi_Lenders}
            path={"/forLenders"}
            exact={true}
          />
          <Route
            component={DigitalAccounts}
            path={"/digitalAccounts"}
            exact={true}
          />
          <Route
            component={DigitalLending}
            path={"/digitalLending"}
            exact={true}
          />
          <Route component={Kyc} path={"/kyc"} exact={true} />
          <Route component={CommerceApi} path={"/commerceApi"} exact={true} />
          <Route component={CardPlatform} path={"/cardPlatform"} exact={true} />
          <Route component={CapitalByApi} path={"/capitalByApi"} exact={true} />
          <Route
            component={CapitalByApi_Lenders}
            path={"/capitalByApi_Lenders"}
            exact={true}
          />
          <Route component={CaseStudy} path={"/caseStudy"} exact={true} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default function AppNavigator() {
  return <RootNavigator />;
}
