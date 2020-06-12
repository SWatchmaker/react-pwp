import React, { useContext, useEffect, useState } from "react";
import ScrollContext from "../contexts/scrollContext";

let BgAnim = () => {
  const scrollY = useContext(ScrollContext);
  const [bg1Top, setBg1Top] = useState(0);
  const [bg1Height, setBg1Height] = useState(0);
  const [bgElement, setBgElement] = useState("motivationBox");
  useEffect(() => {
    if (scrollY <= 900 && bgElement != "motivationBox") {
      bg1Change("motivationBox");
      setBgElement("motivationBox");
    } else if (scrollY > 900 && bgElement != "findBox") {
      bg1Change("findBox");
      setBgElement("findBox");
    }
  });

  const bg1Change = (elementId) => {
    let top = document.getElementById(elementId).offsetTop - 150;
    if (Math.abs(top - bg1Top) >= 20) {
      let bg1Height = document.getElementById(elementId).offsetHeight + 300;
      setBg1Top(top);
      setBg1Height(bg1Height);
    }
  };

  return (
    <div className="bgContainer">
      <div
        className={`bgAnim1 ${scrollY > 180 ? "bgAnimIn" : "bgAnimOut"} ${
          scrollY > 900 && "bgAnim1-1"
        }`}
        style={{ top: bg1Top, height: bg1Height }}
      ></div>
      <div
        className={`bgAnim2 ${scrollY > 180 ? "bgAnimIn" : "bgAnimOut"} ${
          scrollY > 900 && "bgAnim2-1"
        }`}
        style={{ top: bg1Top, height: bg1Height }}
      ></div>
    </div>
  );
};

export default BgAnim;
