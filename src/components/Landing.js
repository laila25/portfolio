import React from "react";
import "../stylesheets/Landing.scss";
import foto from "../images/foto-perfil.jpg";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div className="App_Content">
        <h1 className="title">LAURA SÁNCHEZ MARTÍN</h1>
        <p className="job">Front-End Developer</p>
        <img
          src={foto}
          className="img"
          alt="foto perfil"
          title="foto de Laura Sánchez"
        ></img>
        <Link to="/home" className="link">
          ¿QUIERES SABER MÁS SOBRE MÍ?
        </Link>
      </div>
    );
  }
}

export default Landing;
