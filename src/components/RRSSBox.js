import React from "react";

class RRSSBox extends React.Component {
  constructor() {
    super();
    this.state = {
      anim: null,
    };
  }

  componentDidMount() {
    this.icons = document.getElementsByClassName("rsIcon");
    this.text = document.getElementById("contactText");
    for (var i = 0; i < this.icons.length; i++) {
      this.icons[i].addEventListener("animationend", (e) => {
        if (!this.state.anim && e.target.id === "gitIcon") {
          this.text.style.display = "inline-block";
          for (var i = 0; i < this.icons.length; i++) {
            this.icons[i].style.display = "none";
          }
        }
      });
    }
    this.text.addEventListener("animationend", (e) => {
      if (this.state.anim) {
        e.target.style.display = "none";
        for (var i = 0; i < this.icons.length; i++) {
          this.icons[i].style.display = "inline-block";
        }
      }
    });
  }

  inAnim = () => {
    this.setState(() => {
      return { anim: true };
    });
  };

  outAnim = () => {
    this.setState(() => {
      return { anim: false };
    });
  };

  render() {
    return (
      <div
        className="nav-item contact"
        onMouseEnter={this.inAnim}
        onMouseLeave={this.outAnim}
      >
        <div
          style={{ display: "none" }}
          className={`rsIcon animate__animated ${
            this.state.anim ? "animate__fadeInDown" : "animate__fadeOutRight"
          }`}
        >
          <i
            className="fab fa-whatsapp-square fa-2x"
            style={{
              color: "#25d366",
            }}
          ></i>
        </div>
        <div
          id="mailIcon"
          style={{ display: "none" }}
          className={`rsIcon animate__delay-1s animate__animated ${
            this.state.anim ? "animate__fadeInDown" : "animate__fadeOutRight"
          }`}
        >
          <i
            className="fas fa-envelope-square fa-2x"
            style={{
              color: "#ea4335",
            }}
          ></i>
        </div>
        <div
          id="ldIcon"
          style={{ display: "none" }}
          className={`rsIcon animate__delay-1s animate__animated ${
            this.state.anim ? "animate__fadeInDown" : "animate__fadeOutRight"
          }`}
        >
          <i
            className="fab fa-linkedin fa-2x"
            style={{
              color: "#0077b5",
            }}
          ></i>
        </div>
        <div
          id="gitIcon"
          style={{ display: "none" }}
          className={`rsIcon animate__delay-1s animate__animated ${
            this.state.anim ? "animate__fadeInDown" : "animate__fadeOutRight"
          }`}
        >
          <i
            className="rsIcon fab fa-github-square fa-2x"
            style={{
              color: "#6e5494",
            }}
          ></i>
        </div>
        <div
          id="contactText"
          style={{ display: "inline-block" }}
          className={`animate__animated ${
            this.state.anim ? "animate__fadeOutDown" : "animate__fadeInDown"
          }`}
        >
          <span>CONTACTO</span>
        </div>
      </div>
    );
  }
}

export default RRSSBox;
