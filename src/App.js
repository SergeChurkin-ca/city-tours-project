import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import TourList from "./components/TourList/index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router>
          <Navbar />
        </Router>
        <React.Fragment>
          <TourList />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
