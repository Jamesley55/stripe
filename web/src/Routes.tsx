import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loginView } from "./modules/user/loginView";
import { registerView } from "./modules/user/registerView";
import { Account } from "./modules/user/account/account";

export class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={loginView} />
          <Route path="/register" component={registerView} />
          <Route path="/account" component={Account} />
        </Switch>
      </BrowserRouter>
    );
  }
}
