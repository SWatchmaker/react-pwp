import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
// import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
// import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
// const store = configureStore();

// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

const jsx = (
  <div>
    <AppRouter />
  </div>
);

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById("app"));
//     hasRendered = true;
//   }
// };

ReactDOM.render(jsx, document.getElementById("app"));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(login(user.uid));
//     renderApp();

//     if (history.location.pathname === "/") {
//       history.push("/home");
//     }
//   } else {
//     store.dispatch(logout());
//     renderApp();
//     history.push("/");
//   }
// });
