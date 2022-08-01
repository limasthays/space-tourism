import { Route, Switch } from "react-router-dom";
import { Crew } from "../pages/Crew";
import { Destination } from "../pages/Destination";
import { Home } from "../pages/Home";

import { Technology } from "../pages/Technology";

export function Routes() {
  return (
    <Switch>
      <Route path="/technology">
        <Technology />
      </Route>
      <Route path="/destination">
        <Destination />
      </Route>
      <Route path="/crew">
        <Crew />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
