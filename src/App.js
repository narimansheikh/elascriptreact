import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";

import Loading from "./pages/Layouts/loading";

// Import css
import "./Apps.scss";

// Import all components

const homeSoftware = React.lazy(() => import("./pages/home-software"));

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Suspense
            fallback={
              <div>
                <Loading />
              </div>
            }
          >
            <Switch>
              <Route path="/home-software" component={homeSoftware} />

              <Route path="/" component={homeSoftware} />
            </Switch>
          </React.Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
