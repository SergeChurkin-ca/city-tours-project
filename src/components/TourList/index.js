import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./tourlist.scss";
// import DropDown from '../dropDown/dropDown'

export default class TourList extends Component {
  render() {
    return (
      <div>
        {/* <DropDown /> */}
        <Tour />
      </div>
    );
  }
}
