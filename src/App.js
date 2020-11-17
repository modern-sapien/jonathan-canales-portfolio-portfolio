import "./App.css";
import VrBackground from "./components/VrBackground/VrBackground";
import About from "./containers/About/About"
import Portfolio from "./containers/Portfolio/Portfolio"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const App = () => {
  return (
    <div>      
      
      {/* <VrBackground/> */}
      <Router>
        <Header />
        <Route exact path="/jonathan-canales-portfolio-react/" component={About} />
        <Route exact path="/jonathan-canales-portfolio-react/about/" component={About} />
        <Route exact path="/jonathan-canales-portfolio-react/portfolio/" component={Portfolio} />
        <Footer />
        </Router>
      
      
    </div>
  );
}

export default App;
