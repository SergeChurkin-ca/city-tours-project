import React, { Component } from "react";
import tourData from "../../tourData";
import Tour from "../Tour";
import "./tourlist.scss";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  render() {
    return (
      <div>
        <Tour />
      </div>
    );
  }
}
