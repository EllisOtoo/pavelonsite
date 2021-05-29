import React, { Suspense, Fragment } from "react";
import { TopBarLoader } from "../../components/Loaders";
import PrivateRoute from "../../navigation/PrivateRoute";
import routes from "../../navigation/routes";
import AppHeader from "./AppHeader";

export default function Layout() {
  return (
    <Fragment>
        <AppHeader />
      <div
        className={
          "min-h-screen max-h-full overscroll-y-auto max-w-full bg-gray-100"
        }
      >
        <main>
          <Suspense fallback={TopBarLoader()}>
            {routes.map((screen, i) => (
              <PrivateRoute
                name={screen.name}
                component={screen.component}
                exact={screen.exact}
                path={screen.path}
                key={i}
              />
            ))}
          </Suspense>
        </main>
      </div>
    </Fragment>
  );
}
