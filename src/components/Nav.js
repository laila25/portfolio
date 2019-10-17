import React from "react";
import "../stylesheets/Nav.scss";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    console.log(this.props);
    return (
      <nav className={`nav ${this.props.class}`}>
        <Link to="/home/sobre-mi" onClick={this.props.showNav}>
          <p className="nav_title">
            <i className="fas fa-user nav_icon"></i>
            <span>SOBRE MÍ</span>
          </p>
        </Link>
        <Link to="/home/proyectos">
          <p className="nav_title">
            <i className="fas fa-folder-open nav_icon"></i>
            <span>PROYECTOS</span>
          </p>
        </Link>
        <Link to="/home/formacion">
          <p className="nav_title">
            <i className="fas fa-graduation-cap nav_icon"></i>
            <span>FORMACIÓN</span>
          </p>
        </Link>
        <Link to="/home/experiencia">
          <p className="nav_title">
            <i className="fas fa-briefcase nav_icon"></i>
            <span>EXPERIENCIA</span>
          </p>
        </Link>
        <Link to="/home/contacto">
          <p className="nav_title">
            <i className="fas fa-address-card nav_icon"></i>
            <span>CONTACTO</span>
          </p>
        </Link>
      </nav>
    );
  }
}

export default Nav;
