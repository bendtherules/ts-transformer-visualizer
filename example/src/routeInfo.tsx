import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./App";

export default () => (
  <Router>
    <Switch>
      <Route path="/1">
        <App moduleName="log-identifiers" />,
      </Route>
      <Route path="/2">
        <App moduleName="return-multiple-node" />,
      </Route>
      <Route path="/3">
        <App moduleName="swap-expression" />,
      </Route>
      {/* <Route path="/4">
        <App moduleName="rename-symbol" />,
      </Route> */}
      <Route>
        <Link to="/1">log-identifiers</Link>
        <Link to="/2">return-multiple-node</Link>
        <Link to="/3">swap-expression</Link>
        {/* <Link to="/4">rename-symbol</Link> */}
      </Route>
    </Switch>
  </Router>
);
