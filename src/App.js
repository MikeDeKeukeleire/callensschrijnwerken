import "./App.css";
import Home from "./components/Home";
import Realisaties from "./components/Realisaties"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/realisaties" exact>
          <Realisaties />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
