import React from "react";
import "../stylesheets/Categories.scss";
import Section from "./Section";

const Categories = () => {
  return (
    <section className="App_Categories">
      <Section name="proyectos" />
      <Section name="formacion" />
      <Section name="experiencia" />
    </section>
  );
};

export default Categories;
