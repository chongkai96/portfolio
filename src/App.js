import React from "react";
import About from "./components/about"
import Contact from "./components/contact"
import Experience from "./components/experience"
import Footer from "./components/footer"
import Header from "./components/header"
import Nav from "./components/nav"


const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
