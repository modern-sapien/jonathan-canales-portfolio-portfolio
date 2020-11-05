import "./App.css";
import VrBackground from "./components/VrBackground/VrBackground";
import About from "./containers/About/About"
import Projects from "./containers/Projects/Projects"

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <VrBackground/>
      <Router>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={About} />
      </Router>
    </>
  );
}

export default App;
