import React from "react";
import "./css/Style.css";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <Menu />
      <About />
      <Contact /> 
      <Footer />
    </>
  );
}

export default App;
