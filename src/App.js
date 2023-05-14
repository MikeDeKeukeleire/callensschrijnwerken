import "./App.css";
import Home from "./components/Home";
import Realisaties from "./components/Realisaties"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/realisaties" element={<Realisaties />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
