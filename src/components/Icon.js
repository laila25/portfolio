import React from "react";

const Icon = props => {
  return (
    <a href={`${props.url}`} target="_blank" rel="noopener noreferrer">
      <i className={`${props.class} App_Contact_Icon`}></i>
    </a>
  );
};

export default Icon;
