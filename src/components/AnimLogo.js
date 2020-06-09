import React from "react";

class AnimLogo extends React.Component {
  constructor() {
    super();
    this.palabra1 = "Seba";
    this.palabra2 = "Weidmann";
    this.state = {
      endLeave: true,
    };
  }

  componentDidMount() {
    this.logo1 = document.getElementsByClassName("logo-1");
    this.logo2 = document.getElementsByClassName("logo-2");
    setTimeout(() => {
      this.expand();
      setTimeout(() => {
        this.contract();
      }, 1000);
    }, 500);
  }

  expand = () => {
    this.inFlag = true;
    this.setState(() => {
      return {
        endLeave: false,
      };
    });
    this.logo1[0].textContent += "_";

    const timer = setInterval(() => {
      try {
        this.animflag = false;
        if (this.inFlag) {
          const largo1 = this.logo1[0].textContent.replace(/_/g, "").length;
          let paso2 = false;

          if (largo1 < this.palabra1.length) {
            this.logo1[0].textContent = this.logo1[0].textContent.replace(
              /_/g,
              ""
            );
            this.logo1[0].textContent += this.palabra1[largo1] + "_";
          } else {
            this.logo1[0].textContent = this.logo1[0].textContent.replace(
              /_/g,
              ""
            );
            paso2 = true;
            this.logo2[0].textContent += "_";
          }

          const largo2 = this.logo2[0].textContent.replace(/_/g, "").length;
          if (largo2 < this.palabra2.length && paso2) {
            this.logo2[0].textContent = this.logo2[0].textContent.replace(
              /_/g,
              ""
            );
            this.logo2[0].textContent += this.palabra2[largo2] + "_";
          } else if (paso2) {
            clearInterval(timer);
            this.logo2[0].textContent = this.logo2[0].textContent.replace(
              /_/g,
              ""
            );
            const timer2 = setInterval(() => {
              if (this.logo2[0].textContent.indexOf("_") > 0 && this.inFlag) {
                this.logo2[0].textContent = this.logo2[0].textContent.replace(
                  /_/g,
                  ""
                );
              } else if (
                this.logo2[0].textContent.indexOf(" ") &&
                this.inFlag
              ) {
                this.logo2[0].textContent = this.logo2[0].textContent + "_";
              } else {
                clearInterval(timer2);
              }
            }, 500);
          }
        } else {
          clearInterval(timer);
        }
      } catch (e) {
        console.log(e);
        clearInterval(timer);
      }
    }, 60);
  };

  contract = () => {
    this.inFlag = false;
    const timer = setInterval(() => {
      try {
        if (!this.inFlag) {
          let paso2 = false;

          if (this.logo2[0].textContent.indexOf("_") === -1) {
            this.logo2[0].textContent = this.logo2[0].textContent + "_";
          }
          const largo2 = this.logo2[0].textContent.replace(/_/g, "").length;
          if (largo2 > 1) {
            this.logo2[0].textContent =
              this.logo2[0].textContent.slice(0, largo2 - 1) + "_";
          } else {
            this.logo2[0].textContent = this.logo2[0].textContent.replace(
              /_/g,
              ""
            );
            this.logo1[0].textContent = this.logo1[0].textContent + "_";
            paso2 = true;
          }

          const largo = this.logo1[0].textContent.replace(/_/g, "").length;
          if (largo > 1 && paso2) {
            this.logo1[0].textContent =
              this.logo1[0].textContent.slice(0, largo - 1) + "_";
          } else if (paso2) {
            this.logo1[0].textContent = this.logo1[0].textContent.replace(
              /_/g,
              ""
            );
            this.animflag = true;
            this.setState(() => {
              return {
                endLeave: true,
              };
            });
            clearInterval(timer);
          }
        }
      } catch (e) {
        console.log(e);
        clearInterval(timer);
      }
    }, 60);
  };

  render() {
    return (
      <div
        className={`navbar-brand logo-anim border-anim animate__delay-1s animate__animated animate__fadeInDown ${
          !this.state.endLeave ? " in-anim" : ""
        }`}
        onMouseEnter={this.expand}
        onMouseLeave={this.contract}
      >
        <span className="logo-1">S</span>
        <span className="logo-2">W</span>
      </div>
    );
  }
}

export default AnimLogo;
