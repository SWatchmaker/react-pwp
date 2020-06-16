import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const Footer = props => {
  const [loadInit, setLoadInit] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      props.scrollY > 500
    ) {
      setShow(true);
      if (!loadInit) {
        setLoadInit(true);
      }
    } else {
      setShow(false);
    }
  });

  return (
    <footer id="footer" className={`footer ${show && "footerBg"}`}>
      {loadInit && (
        <div className="footer__content content-container">
          <div
            className={`footer__atomContainer animate__animated animate__fast ${
              show ? "animate__fadeInUp" : "animate__fadeOutDown"
            }`}
          >
            <Loader />
          </div>
          <div className="footer__info">
            <div className="footer__contact">
              <span
                className={`footer__contactTitle animate__animated ${
                  show ? "animate__fadeInLeft" : "animate__fadeOutRight"
                }`}
              >
                MIS REDES
              </span>
              <div className="footer__data">
                <a
                  href="https://www.linkedin.com/in/sebaweidmann/"
                  target="_blank"
                  className={`animate__animated animate__delay-1s ${
                    show ? "animate__fadeInLeft" : "animate__fadeOutRight"
                  }`}
                  style={{
                    "--animate-delay": "0.4s"
                  }}
                >
                  <i
                    className="fab fa-linkedin-in"
                    style={{
                      color: "#0077b5"
                    }}
                  ></i>
                  <span>Conoce mi CV</span>
                </a>
              </div>
              <div className="footer__data">
                <a
                  href="https://github.com/SWatchmaker"
                  target="_blank"
                  className={`animate__animated animate__delay-1s ${
                    show ? "animate__fadeInLeft" : "animate__fadeOutRight"
                  }`}
                  style={{
                    "--animate-delay": "0.8s"
                  }}
                >
                  <i
                    className="fab fa-github"
                    style={{
                      color: "#6e5494"
                    }}
                  ></i>
                  <span>Mis experimentos</span>
                </a>
              </div>
              <div className="footer__data">
                <a
                  href="mailto:sebastian.weidmann.l@gmail.com"
                  target="_blank"
                  className={`animate__animated animate__delay-1s ${
                    show ? "animate__fadeInLeft" : "animate__fadeOutRight"
                  }`}
                  style={{
                    "--animate-delay": "1.2s"
                  }}
                >
                  <i
                    className="far fa-envelope"
                    style={{
                      color: "#ea4335"
                    }}
                  ></i>
                  <span>Escríbeme!</span>
                </a>
              </div>
              <div className="footer__data">
                <a
                  href="https://wa.link/io5hce"
                  target="_blank"
                  className={`animate__animated animate__delay-1s ${
                    show ? "animate__fadeInLeft" : "animate__fadeOutRight"
                  }`}
                  style={{
                    "--animate-delay": "1.4s"
                  }}
                >
                  <i
                    className="fab fa-whatsapp"
                    style={{
                      color: "#25d366"
                    }}
                  ></i>
                  <span>Whatsapéame!</span>
                </a>
              </div>
            </div>
            <div className="footer__contact--right">
              <span
                className={`footer__contactTitle animate__animated ${
                  show ? "animate__fadeInRight" : "animate__fadeOutLeft"
                }`}
              >
                REDES INFORMALES
              </span>
              <div className="footer__data">
                <a
                  href="https://www.instagram.com/xoclomaster/"
                  target="_blank"
                  className={`animate__animated animate__delay-1s ${
                    show ? "animate__fadeInRight" : "animate__fadeOutLeft"
                  }`}
                  style={{
                    "--animate-delay": "0.4s"
                  }}
                >
                  <i
                    className="fab fa-instagram-square"
                    style={{
                      color: "#c13584"
                    }}
                  ></i>
                  <span>Instagram</span>
                </a>
              </div>
              <div className="footer__data">
                <a
                  href="https://www.facebook.com/SW.Watchmaker/"
                  target="_blank"
                  className={`animate__animated animate__delay-1s ${
                    show ? "animate__fadeInRight" : "animate__fadeOutLeft"
                  }`}
                  style={{
                    "--animate-delay": "0.8s"
                  }}
                >
                  <i
                    className="fab fa-facebook"
                    style={{
                      color: "#3b5998"
                    }}
                  ></i>
                  <span>Facebook</span>
                </a>
              </div>
              <div className="footer__data">
                <a
                  href="https://twitter.com/sawlrock"
                  target="_blank"
                  className={`animate__animated animate__delay-1s ${
                    show ? "animate__fadeInRight" : "animate__fadeOutLeft"
                  }`}
                  style={{
                    "--animate-delay": "1.2s"
                  }}
                >
                  <i
                    className="fab fa-twitter"
                    style={{
                      color: "#1da1f2"
                    }}
                  ></i>
                  <span>Twitter</span>
                </a>
              </div>

              <div className="footer__data">
                <a
                  href="https://steamcommunity.com/id/SWatchmaker/"
                  target="_blank"
                  className={`animate__animated animate__delay-1s ${
                    show ? "animate__fadeInRight" : "animate__fadeOutLeft"
                  }`}
                  style={{
                    "--animate-delay": "1.6s"
                  }}
                >
                  <i
                    className="fab fa-steam"
                    style={{
                      color: "#00adee"
                      //#C28F2C
                    }}
                  ></i>
                  <span>Steam</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
