import React from "react";
import "../stylesheets/Landing.scss";
import foto from "../images/foto-perfil.jpg";
import chincheta from "../images/chincheta.png";

import { Link } from "react-router-dom";

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
            <section className="section">
              <Link to="/home" className="link">
                <img
                  src={chincheta}
                  className="link_img"
                  alt="chincheta"
                  title="chincheta"
                ></img>
                <p className="link_title">
                  PROYECTOS<span> &#160;</span>
                </p>
              </Link>

              <Link to="/home" className="link">
                <img
                  src={chincheta}
                  className="link_img"
                  alt="chincheta"
                  title="chincheta"
                ></img>
                <p className="link_title">
                  FORMACIÓN<span>&#160;</span>
                </p>
              </Link>

              <Link to="/home" className="link">
                <img
                  src={chincheta}
                  className="link_img"
                  alt="chincheta"
                  title="chincheta"
                ></img>
                <p className="link_title">
                  EXPERIENCIA<span>&#160;</span>
                </p>
              </Link>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default Landing;
