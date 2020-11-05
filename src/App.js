import "./App.css";
import VrBackground from "./components/VrBackground/VrBackground";
import About from "./containers/About/About"
import Portfolio from "./containers/Portfolio/Portfolio"

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <VrBackground/>
      <Router>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
    </div>
  );
}

export default App;
