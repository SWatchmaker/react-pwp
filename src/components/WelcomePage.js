import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import Loader from "../components/Loader";

const WelcomPage = (props) => {
  const rotDif = 220 / 5;
  const initialState = {
    top: 50,
    left: 50,
    speed: 0.3,
    rotation: 0,
  };
  const [enableButton, setEnableButton] = useState(false);
  const [circleAnim, setCircleAnim] = useState(true);
  const [outAnim, setOutAnim] = useState(false);
  const [nodePosition, setNodePos] = useState({});
  const [htmlPosition, setHtmlPos] = useState({});
  const [reactPosition, setReactPos] = useState({});
  const [cssPosition, setCssPos] = useState({});

  useEffect(() => {
    stopBounce();
    var img = new Image();
    img.onload = function () {
      const body = document.getElementById("body");
      body.style.background = `url("/images/4450358-dark-backgrounds.jpg")`;
      body.style.backgroundAttachment = `fixed`;
      body.style.backgroundSize = `cover`;
      var img2 = new Image();
      img2.onload = function () {
        setEnableButton(true);
      };
      img2.src = "/images/78ec3e1d-d68f-455b-a9d0-bfdbadc14aa8.jpg";
    };
    img.src = "/images/4450358-dark-backgrounds.jpg";
  }, []);

  function startBounce() {
    if (!outAnim) {
      setNodePos(createPos(nodePosition));
      setHtmlPos(createPos(htmlPosition));
      setReactPos(createPos(reactPosition));
      setCssPos(createPos(cssPosition));
      setCircleAnim(false);
    }
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

  function animOut() {
    if (enableButton) {
      setOutAnim(true);
    }
  }

  function toHome() {
    props.setPost();
    props.history.push("/home");
  }

  return (
    <div
      className={`welcomePage ${!circleAnim && "loader--inactive"} ${
        outAnim && "animate__animated animate__delay-1s animate__fadeOut"
      }`}
      style={{
        "--animate-delay": "0.8s",
      }}
    >
      <div className="welcomePage__bounceContainer" id="bounceContainer">
        <div
          className={`animate__animated animate__delay-1s ${
            outAnim ? "animate__fadeOutUp" : "animate__fadeIn"
          } ${
            circleAnim
              ? "welcomePage__rollIcon--circle"
              : "welcomePage__rollIcon"
          }`}
          style={{
            top: `${nodePosition.top}%`,
            left: `${nodePosition.left}%`,
            transitionDuration: `${nodePosition.speed}s`,
            "--animate-delay": outAnim ? "0s" : `0.3s`,
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
          className={`animate__animated animate__delay-1s ${
            outAnim ? "animate__fadeOutUp" : "animate__fadeIn"
          } ${
            circleAnim
              ? "welcomePage__rollIcon--circle"
              : "welcomePage__rollIcon"
          }`}
          style={{
            top: `${htmlPosition.top}%`,
            left: `${htmlPosition.left}%`,
            transition: `all ${htmlPosition.speed}s linear`,
            "--animate-delay": outAnim ? "0.1s" : `0.9s`,
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
          className={`animate__animated animate__delay-1s ${
            outAnim ? "animate__fadeOutUp" : "animate__fadeIn"
          } ${
            circleAnim
              ? "welcomePage__rollIcon--circle"
              : "welcomePage__rollIcon"
          }`}
          style={{
            top: `${reactPosition.top}%`,
            left: `${reactPosition.left}%`,
            transition: `all ${reactPosition.speed}s linear`,
            "--animate-delay": outAnim ? "0.2s" : `1.5s`,
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
          className={`animate__animated animate__delay-1s ${
            outAnim ? "animate__fadeOutUp" : "animate__fadeIn"
          }  ${
            circleAnim
              ? "welcomePage__rollIcon--circle"
              : "welcomePage__rollIcon"
          }`}
          style={{
            top: `${cssPosition.top}%`,
            left: `${cssPosition.left}%`,
            transition: `all ${cssPosition.speed}s linear`,
            "--animate-delay": outAnim ? "0.3s" : "2.1s",
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
        className={`welcomePage__inButton animate__animated animate__delay-1s ${
          outAnim && "animate__fadeOutDown"
        } ${!enableButton && "disabled"}`}
        style={{
          "--animate-delay": "0.6s",
        }}
        onMouseEnter={() => {
          stopBounce();
        }}
        onMouseLeave={() => {
          startBounce();
        }}
        onClick={() => {
          animOut();
        }}
        onAnimationEnd={() => {
          toHome();
        }}
      >
        <span>Bienvenid@</span>
      </div>
    </div>
  );
};

export default WelcomPage;
