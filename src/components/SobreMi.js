import React from "react";
import "../stylesheets/About.scss";

class SobreMi extends React.Component {
  render() {
    return (
      <div className="About_content">
        <h2 className="About_title">SOBRE MI</h2>
        <p>
          Tras una larga y diversa trayectoria laboral en la que ya se auguraba
          que mi futuro estaría relacionado con la tecnología, el destino quiso
          ponerme a prueba y acabé montando mi propia empresa en el sector del
          ocio. Este cambio me permitió descubrir otras cualidades de mí y
          enfrentarme a nuevos retos. El trato con el cliente era mi día a día,
          y la paciencia y la empatía se convirtieron en mis mejores amigas.
        </p>
        <p>
          Con el tiempo tuve que adaptarme a las nuevas tecnologías y gracias a
          ello descubrí el mundo de la programación web que me dejó fascinada.
        </p>
        <p>
          Y entonces llegó Adalab. Una lluvia de nuevos conocimientos que
          potenció mi pasión por el desarrollo web, que me ha permitido
          encontrar mi verdadera vocación, y me ha dado la base necesaria para
          poder dedicarme a ello de ahora en adelante.
        </p>
      </div>
    );
  }
}

export default SobreMi;
