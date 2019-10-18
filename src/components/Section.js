import React from "react";
import chincheta from "../images/chincheta.png";
import { Link } from "react-router-dom";

const Section = props => {
  return (
    <Link to={`/${props.name}`} className="link">
      <img
        src={chincheta}
        className="link_img"
        alt="chincheta"
        title="chincheta"
      ></img>
      <p className="link_title">
        {props.name}
        <span> &#160;</span>
      </p>
    </Link>
  );
};

export default Section;
