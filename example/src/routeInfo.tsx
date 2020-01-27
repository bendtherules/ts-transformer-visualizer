import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./App";

export default () => (
  <Router>
    <Switch>
      <Route path="/1">
        <App moduleName="swap-expression" />,
      </Route>
      <Route>
        <Link to="/1">Swap expression</Link>
      </Route>
    </Switch>
  </Router>
);
