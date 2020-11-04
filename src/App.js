import "./App.css";
import VrBackground from "./containers/VrBackground/VrBackground";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
    <div className="wrapper">
      <Header />
      <VrBackground />
      <Router>
        <Route />
        <Route />
        <Route />
      </Router>
    </div>
      <Footer>Hate footers </Footer>
    </>
  );
}

export default App;
