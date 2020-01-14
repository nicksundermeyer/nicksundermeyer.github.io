import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";
import resumeData from "./resumeData";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header resumeData={resumeData} />
        <About />
        <Portfolio />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;
