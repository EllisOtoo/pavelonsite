import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TopBarLoader } from "../components/Loaders";
import Home from "../screens/Home/home.jsx";
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
import Neobanks from "../screens/UseCasesUpdated/Neobanks";
import CommercialFintechs from "../screens/CommercialFintechs/CommercialFintechs";
import RetailFintechs from "../screens/RetailFintechs/RetailFintechs";
import Banks from "../screens/Banks/Bank";
import EmbeddedBanking from "../screens/EmbeddedBanking/EmbeddedBanking.jsx";
import InvestmentAsAService from "../screens/InvestmentAsAService/InvestmentAsAService";
import BAAS from "../screens/BankAsAService/BAAS";
import contact_form from "../screens/contact_form/contact_form";
import contactSalesAgent from "../screens/ContactSalesAgent/contactSalesAgent";
// import DigitalAccounts from "../screens/DigitalAccounts/DigitalAccounts";

function RootNavigator() {
  return (
    <BrowserRouter basename="/#">
      <Suspense fallback={TopBarLoader()}>
        <Switch>
          <Route component={Home} path={"/"} exact={true} />
          <Route
            component={contactSalesAgent}
            path={"/contactSalesAgent"}
            exact={true}
          />
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
            component={InvestmentAsAService}
            path={"/investmentAsAService"}
            exact={true}
          />
          <Route component={contact_form} path={"/contactForm"} exact={true} />
          <Route component={Neobanks} path={"/neobanks"} exact={true} />
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

          <Route
            path="/pavelonApi"
            component={() => {
              window.location.href =
                "https://pavelon.readme.io/reference/getting-started-with-your-api";
              return null;
            }}
          />
          <Route
            component={CommercialFintechs}
            path={"/commercialFintechs"}
            exact={true}
          />
          <Route component={BAAS} path={"/BAAS"} exact={true} />
          <Route
            component={RetailFintechs}
            path={"/retailFintechs"}
            exact={true}
          />
          <Route
            component={EmbeddedBanking}
            path={"/embeddedBanking"}
            exact={true}
          />
          <Route component={Banks} path={"/banks"} exact={true} />
          <Route component={CaseStudy} path={"/caseStudy"} exact={true} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default function AppNavigator() {
  return <RootNavigator />;
}
