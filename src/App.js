import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import tourData from "./tourData";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <tourData />
      </React.Fragment>
    );
  }
}

export default App;
