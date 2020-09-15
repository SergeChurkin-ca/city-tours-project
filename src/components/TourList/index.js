import React, { Component } from "react";
import tourData from "../../tourData";
import Tour from "../Tour";
import "./tourlist.scss";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
    console.log(id);
  };
  render() {
    return (
      <div>
        <Tour />
      </div>
    );
  }
}
