import React, { Component } from "react";
import firebase from "../../firebase";
import tourData from "../../tourData";
import "./tour.scss";

// Data obtained from DB and rendered on page
export default class Tour extends Component {
  constructor() {
    super();
    this.state = {
      tours: [],
      removeTour: "",
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
            "https://source.unsplash.com/350x350/?" + data[inventoryName].name,
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
            <section className="tourItem">
              <h3> {toursObject.name} </h3>
              <ul className="inventoryItem" key={toursObject.id}>
                <span>{this.removeTour}X</span>

                <li> {toursObject.date} </li>
                <li>{toursObject.duration} hrs</li>
                <li> {toursObject.seats} </li>
              </ul>
              <img src={toursObject.imgUrl} alt="" />
            </section>
          );
        })}
      </div>
    );
  }
}
