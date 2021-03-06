import {
  createGenerateClassName,
  StylesProvider
} from "@material-ui/core/styles";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
