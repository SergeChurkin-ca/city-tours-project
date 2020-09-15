import React, { Component } from "react";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";

import TourList from "./components/TourList/index";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ul className="tourHeader">
          <li> Tour Name </li> <li> Date </li> <li> Duration </li>
          <li> Seats Total </li> <li> Photos </li>
        </ul>
        <TourList />
      </React.Fragment>
    );
  }
}

export default App;
