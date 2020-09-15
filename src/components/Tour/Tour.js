import React, { Component } from "react";
import firebase from "../../firebase";
import "./tour.scss";

// Data obtained from DB and rendered on page
export default class Tour extends Component {
  constructor() {
    super();
    this.state = {
      tours: [],
    };
  }
  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (snapshot) => {
      // checking changes in db

      const data = snapshot.val();

      const newToursAarray = [];

      for (let inventoryName in data) {
        const toursObject = {
          id: inventoryName,
          tours: data[inventoryName],
          name: data[inventoryName].name,
          seats: data[inventoryName].seats,
          date: data[inventoryName].date,
          duration: data[inventoryName].duration,
          imgUrl:
            "https://source.unsplash.com/150x150/?" + data[inventoryName].name,
        };
        newToursAarray.push(toursObject);
      }

      this.setState({
        tours: newToursAarray,
      });
    });
  }
  render() {
    return (
      <div className="tourlist">
        {this.state.tours.map((toursObject) => {
          return (
            <ul className="inventoryItem" key={toursObject.id}>
              <li> {toursObject.name} </li>
              <li> {toursObject.date} </li>
              <li>{toursObject.duration} hrs</li>
              <li> {toursObject.seats} </li>
              <li>
                <img src={toursObject.imgUrl} alt="" />
              </li>
              <hr />
            </ul>
          );
        })}
      </div>
    );
  }
}
