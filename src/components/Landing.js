import React from "react";
import "../stylesheets/Landing.scss";
import foto from "../images/foto-perfil.jpg";
import Categories from "./Categories";
import Contact from "./Contact";

class Landing extends React.Component {
  render() {
    return (
      <div className="App_Container">
        <div className="App_Content">
          <main className="App_Main">
            <img
              src={foto}
              className="img"
              alt="foto perfil"
              title="foto de Laura Sánchez"
            ></img>
            <h1 className="title">LAURA SÁNCHEZ MARTÍN</h1>
            <p className="job">Front-End Developer</p>
            <Categories />
            <Contact />
          </main>
        </div>
      </div>
    );
  }
}

export default Landing;
