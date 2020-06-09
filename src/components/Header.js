import React from "react";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";
import AnimLogo from "./AnimLogo";
import RRSSBox from "./RRSSBox";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <AnimLogo />
        <RRSSBox />
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
