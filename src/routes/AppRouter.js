import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Login from "../components/Login";

import Header from "../components/Header";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

class AppRouter extends React.Component {
  // let [scrollY, setScrollY] = useState(0);

  constructor() {
    super();
    this.state = {
      scrollY: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", (event) => {
      const scroll = window.scrollY;
      if (Math.abs(scroll - this.state.scrollY) >= 20) {
        this.setState(() => {
          return {
            scrollY: scroll,
          };
        });
        console.log(scroll);
      }
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <PublicRoute path="/" component={Login} exact={true} />
            <PrivateRoute path="/dashboard" component={HomePage} exact />
            <Route component={NotFoundPage} />
          </Switch>
          <footer id="footer"></footer>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
