import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import Landing from "./Landing";
//import SobreMi from "./SobreMi";
//import Proyectos from "./Proyectos";
//import Experiencia from "./Experiencia";
//import Formacion from "./Frmacion";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      class: ""
    };
    this.showNav = this.showNav.bind(this);
  }

  showNav() {
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
        <i
          className={`fas fa-bars Home_menu ${this.state.class}`}
          onClick={this.showNav}
        ></i>

        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
