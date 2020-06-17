import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
// import Login from "../components/Login";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WelcomePage from "../components/WelcomePage";
import HomePage from "../components/HomePage";
// import NotFoundPage from "../components/NotFoundPage";
// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

class AppRouter extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
      postWelcome: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      if (Math.abs(scroll - this.state.scrollY) >= 20) {
        this.setState(() => {
          return {
            scrollY: scroll,
          };
        });
      }
    });
  }

  setPostWelcome = () => {
    this.setState(() => {
      return {
        postWelcome: true,
      };
    });
  };

  render() {
    return (
      <Router history={history}>
        <div>
          {this.state.postWelcome && <Header scrollY={this.state.scrollY} />}
          <Switch>
            <Route
              path="/welcome"
              render={(props) => (
                <WelcomePage {...props} setPost={this.setPostWelcome} />
              )}
              exact={true}
            />
            {this.state.postWelcome && (
              <Route
                path="/home"
                render={(props) => (
                  <HomePage {...props} scrollY={this.state.scrollY} />
                )}
                exact={true}
              />
            )}
            <Redirect from="*" to="/welcome" />
          </Switch>
          {this.state.postWelcome && (
            <Footer scrollY={this.state.scrollY}></Footer>
          )}
        </div>
      </Router>
    );
  }
}

export default AppRouter;
