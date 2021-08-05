import {
  createGenerateClassName,
  StylesProvider
} from "@material-ui/core/styles";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

export default ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "au",
  });
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={SignIn} />
            <Route path="/auth/signup" component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
