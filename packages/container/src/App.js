import {
  createGenerateClassName,
  StylesProvider
} from "@material-ui/core/styles";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Suspense fallback={null}>
              <Route
                path="/auth"
                component={lazy(() => import("./components/AuthApp"))}
              />

              <Route
                path="/dashboard"
                component={lazy(() => import("./components/DashboardApp"))}
              />
              <Route
                path="/"
                component={lazy(() => import("./components/MarketingApp"))}
              />
            </Suspense>
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
