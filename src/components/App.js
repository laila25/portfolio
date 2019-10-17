import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
