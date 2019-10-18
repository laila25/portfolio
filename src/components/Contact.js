import React from "react";
import "../stylesheets/Contact.scss";
import Icon from "./Icon";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="App_Contact">
      <Icon url="https://github.com/laila25" class="fab fa-github" />
      <Icon
        url="https://www.linkedin.com/in/laura-sanchez-martin/"
        class="fab fa-linkedin"
      />
      <Icon url="https://twitter.com/lailina25" class="fab fa-twitter" />
      <Icon url="mailto:laila2519@gmail.com" class="fas fa-envelope" />

      <Link to="/contacto" className="fas fa-edit App_Contact_Icon" />
    </section>
  );
};

export default Contact;
