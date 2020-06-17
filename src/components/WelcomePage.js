import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const WelcomPage = () => {
  const rotDif = 220 / 5;
  const initialState = {
    top: 50,
    left: 50,
    speed: 0.3,
    rotation: 0,
  };
  const [circleAnim, setCircleAnim] = useState(true);
  const [nodePosition, setNodePos] = useState({});
  const [htmlPosition, setHtmlPos] = useState({});
  const [reactPosition, setReactPos] = useState({});
  const [cssPosition, setCssPos] = useState({});

  useEffect(() => {
    stopBounce();
  }, []);

  function startBounce() {
    setNodePos(createPos(nodePosition));
    setHtmlPos(createPos(htmlPosition));
    setReactPos(createPos(reactPosition));
    setCssPos(createPos(cssPosition));
    setCircleAnim(false);
  }

  function stopBounce() {
    setCircleAnim(true);
    setNodePos({
      ...initialState,
      rotation: 250 + rotDif,
    });
    setHtmlPos({
      ...initialState,
      rotation: 250 + rotDif * 2 - 360,
    });
    setReactPos({
      ...initialState,
      rotation: 250 + rotDif * 3,
    });
    setCssPos({
      ...initialState,
      rotation: 250 + rotDif * 4 - 360,
    });
  }

  function createPos(oldpos) {
    let pos = {};
    let moves = [
      { top: 0, left: Math.random() * 100 },
      { top: 100, left: Math.random() * 100 },
      { left: 0, top: Math.random() * 100 },
      { left: 100, top: Math.random() * 100 },
    ];

    if (
      oldpos.top != 0 &&
      oldpos.left != 0 &&
      oldpos.top != 100 &&
      oldpos.left != 100
    ) {
      const ran = Math.floor(Math.random() * 4);
      pos = moves[ran];
      pos.rotation = oldpos.rotation;
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
      pos = moves[ran];
      pos.rotation = Math.random() * 360;
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
            transitionDuration: `${nodePosition.speed}s`,
            "--animate-delay": `0.3s`,
            transform: `rotate(${nodePosition.rotation}deg)`,
          }}
          onTransitionEnd={(e) => {
            if (e.propertyName == "top" && !circleAnim) {
              const oldpos = nodePosition;
              setNodePos(createPos(oldpos));
            }
          }}
        >
          <i className="fab fa-node-js fa-3x"></i>
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
            "--animate-delay": `0.9s`,
            transform: `rotate(${htmlPosition.rotation}deg)`,
          }}
          onTransitionEnd={(e) => {
            if (e.propertyName == "top" && !circleAnim) {
              const oldpos = htmlPosition;
              setHtmlPos(createPos(oldpos));
            }
          }}
        >
          <i className="fab fa-html5 fa-3x"></i>
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
            "--animate-delay": `1.5s`,
            transform: `rotate(${reactPosition.rotation}deg)`,
          }}
          onTransitionEnd={(e) => {
            if (e.propertyName == "top" && !circleAnim) {
              const oldpos = reactPosition;
              setReactPos(createPos(oldpos));
            }
          }}
        >
          <i className="fab fa-react fa-3x"></i>
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
            "--animate-delay": `2.1s`,
            transform: `rotate(${cssPosition.rotation}deg)`,
          }}
          onTransitionEnd={(e) => {
            if (e.propertyName == "top" && !circleAnim) {
              const oldpos = cssPosition;
              setCssPos(createPos(oldpos));
            }
          }}
          onAnimationEnd={() => {
            setTimeout(() => {
              startBounce();
            }, 300);
          }}
        >
          <i className="fab fa-css3-alt fa-3x"></i>
        </div>
      </div>
      <Loader />
      <div
        className="welcomePage__inButton"
        onMouseEnter={() => {
          stopBounce();
        }}
        onMouseLeave={() => {
          startBounce();
        }}
      >
        <span>Bienvenid@</span>
      </div>
    </div>
  );
};

export default WelcomPage;
