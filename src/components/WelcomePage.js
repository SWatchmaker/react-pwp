import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const WelcomPage = () => {
  const rotDif = 220 / 5;
  const initialState = {
    top: 50,
    left: 50,
    speed: 1
  };
  const [circleAnim, setCircleAnim] = useState(true);
  const [nodePosition, setNodePos] = useState({
    ...initialState,
    rotation: 250 + rotDif
  });
  const [htmlPosition, setHtmlPos] = useState({
    ...initialState,
    rotation: 250 + rotDif * 2
  });
  const [reactPosition, setReactPos] = useState({
    ...initialState,
    rotation: 250 + rotDif * 3
  });
  const [cssPosition, setCssPos] = useState({
    ...initialState,
    rotation: 250 + rotDif * 4
  });

  useEffect(() => {}, []);

  function startBounce() {
    setCircleAnim(false);
    setNodePos(createPos(nodePosition));
    setHtmlPos(createPos(htmlPosition));
    setReactPos(createPos(reactPosition));
    setCssPos(createPos(cssPosition));
  }

  function createPos(oldpos) {
    let pos = {};
    let moves = [
      { top: 0, left: Math.random() * 100 },
      { top: 100, left: Math.random() * 100 },
      { left: 0, top: Math.random() * 100 },
      { left: 100, top: Math.random() * 100 }
    ];

    if (
      oldpos.top != 0 &&
      oldpos.left != 0 &&
      oldpos.top != 100 &&
      oldpos.left != 100
    ) {
      const ran = Math.floor(Math.random() * 4);
      pos = moves[ran];
    } else {
      const ran = Math.floor(Math.random() * 3);
      if (oldpos.top == 0) {
        moves.shift();
      } else if (oldpos.top == 100) {
        moves.splice(1, 1);
      } else if (oldpos.left == 0) {
        moves.splice(2, 1);
      } else if (oldpos.left == 100) {
        moves.pop();
      }
      console.log(moves);
      pos = moves[ran];
    }

    const container = document.getElementById("bounceContainer");
    const contHeight = container.offsetHeight;
    const contWidth = container.offsetWidth;
    const movement = Math.sqrt(
      (Math.abs(oldpos.left - pos.left) * (contWidth / 100)) ** 2 +
        (Math.abs(oldpos.top - pos.top) * (contHeight / 100)) ** 2
    );
    const speed = movement / 300;
    pos.speed = speed;
    return pos;
  }

  return (
    <div className="welcomePage">
      <Loader />
      <button className="welcomePage__inButton">BIENVENIDO</button>
      <div className="welcomePage__bounceContainer" id="bounceContainer">
        <div
          className={`animate__animated animate__fadeIn animate__delay-1s ${
            circleAnim
              ? "welcomePage__rollIcon--circle"
              : "welcomePage__rollIcon"
          }`}
          style={{
            top: `${nodePosition.top}%`,
            left: `${nodePosition.left}%`,
            transition: `all ${nodePosition.speed}s linear`,
            "--animate-delay": `0s`,
            transform: circleAnim
              ? `rotate(${nodePosition.rotation}deg)`
              : "none"
          }}
          onTransitionEnd={e => {
            if (e.propertyName == "top" && !circleAnim) {
              const oldpos = nodePosition;
              setNodePos(createPos(oldpos));
            }
          }}
        >
          <i className="fab fa-node-js fa-3x" style={{ color: "#68A063" }}></i>
        </div>
        <div
          className={`animate__animated animate__fadeIn animate__delay-1s ${
            circleAnim
              ? "welcomePage__rollIcon--circle"
              : "welcomePage__rollIcon"
          }`}
          style={{
            top: `${htmlPosition.top}%`,
            left: `${htmlPosition.left}%`,
            transition: `all ${htmlPosition.speed}s linear`,
            "--animate-delay": `0.6s`,
            transform: circleAnim
              ? `rotate(${htmlPosition.rotation}deg)`
              : "none"
          }}
          onTransitionEnd={e => {
            if (e.propertyName == "top" && !circleAnim) {
              const oldpos = htmlPosition;
              setHtmlPos(createPos(oldpos));
            }
          }}
        >
          <i className="fab fa-html5 fa-3x" style={{ color: "#E44D26" }}></i>
        </div>
        <div
          className={`animate__animated animate__fadeIn animate__delay-1s ${
            circleAnim
              ? "welcomePage__rollIcon--circle"
              : "welcomePage__rollIcon"
          }`}
          style={{
            top: `${reactPosition.top}%`,
            left: `${reactPosition.left}%`,
            transition: `all ${reactPosition.speed}s linear`,
            "--animate-delay": `1.2s`,
            transform: circleAnim
              ? `rotate(${reactPosition.rotation}deg)`
              : "none"
          }}
          onTransitionEnd={e => {
            if (e.propertyName == "top" && !circleAnim) {
              const oldpos = reactPosition;
              setReactPos(createPos(oldpos));
            }
          }}
        >
          <i className="fab fa-react fa-3x" style={{ color: "#61dafb" }}></i>
        </div>
        <div
          className={`animate__animated animate__fadeIn animate__delay-1s ${
            circleAnim
              ? "welcomePage__rollIcon--circle"
              : "welcomePage__rollIcon"
          }`}
          style={{
            top: `${cssPosition.top}%`,
            left: `${cssPosition.left}%`,
            transition: `all ${cssPosition.speed}s linear`,
            "--animate-delay": `1.8s`,
            transform: circleAnim
              ? `rotate(${cssPosition.rotation}deg)`
              : "none"
          }}
          onTransitionEnd={e => {
            if (e.propertyName == "top" && !circleAnim) {
              const oldpos = cssPosition;
              setCssPos(createPos(oldpos));
            }
          }}
          onAnimationEnd={() => {
            setTimeout(() => {
              startBounce();
            }, 600);
          }}
        >
          <i className="fab fa-css3-alt fa-3x" style={{ color: "#2965f1" }}></i>
        </div>
      </div>
    </div>
  );
};

export default WelcomPage;
