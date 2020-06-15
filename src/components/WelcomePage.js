import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useLayoutEffect } from "react";

const WelcomPage = () => {
  const [nodePosition, setNodePos] = useState({
    top: Math.random() * 100,
    left: Math.random() * 100,
  });

  useEffect(() => {}, []);

  function getViewport() {
    var viewPortWidth;
    var viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != "undefined") {
      (viewPortWidth = window.innerWidth),
        (viewPortHeight = window.innerHeight);
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (
      typeof document.documentElement != "undefined" &&
      typeof document.documentElement.clientWidth != "undefined" &&
      document.documentElement.clientWidth != 0
    ) {
      (viewPortWidth = document.documentElement.clientWidth),
        (viewPortHeight = document.documentElement.clientHeight);
    }

    // older versions of IE
    else {
      (viewPortWidth = document.getElementsByTagName("body")[0].clientWidth),
        (viewPortHeight = document.getElementsByTagName("body")[0]
          .clientHeight);
    }
    return [viewPortWidth, viewPortHeight];
  }
  return (
    <div className="welcomePage">
      <Loader />
      <button className="welcomePage__inButton">BIENVENIDO</button>
      <div
        className="welcomePage__rollIcon"
        style={{ top: `${nodePosition.top}%`, left: `${nodePosition.left}%` }}
      >
        <i class="fab fa-html5"></i>
      </div>
      <div className="welcomePage__rollIcon">
        <i class="fab fa-node-js"></i>
      </div>
    </div>
  );
};

export default WelcomPage;
