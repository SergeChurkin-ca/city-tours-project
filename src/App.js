import React, { Component } from "react";
import Footer from "./components/Footer/Footer.js";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

import TourList from "./components/TourList/index";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <TourList />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
