import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Home.scss";
import foto from "../images/foto-perfil.jpg";
import Nav from "./Nav";

class SobreMi extends React.Component {
  constructor() {
    super();
    this.state = {
      class: ""
    };
    this.showNav = this.showNav.bind(this);
  }

  showNav() {
    console.log("hola");
    this.setState(prevState => {
      let nextClass;
      if (prevState.class === "") {
        nextClass = "hidden";
      } else {
        nextClass = "";
      }
      return {
        class: nextClass
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <Link to="/" className="Home_Content">
            <img
              src={foto}
              className="Home_img"
              alt="foto perfil"
              title="foto de Laura Sánchez"
            ></img>
            <div className="Home_title">
              <h1 className="Home_title_title">LAURA SÁNCHEZ MARTÍN</h1>
              <p className="Home_title_job">Front-End Developer</p>
            </div>
          </Link>
        </header>
        <i
          className={`fas fa-bars Home_menu ${this.state.class}`}
          onClick={this.showNav}
        ></i>
        <Nav class={!this.state.class} showNav={this.showNav} />
      </React.Fragment>
    );
  }
}

export default SobreMi;
