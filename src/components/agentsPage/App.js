import React, { Component } from "react";
import firebase from "../../firebase";
import NewTourForm from "./NewTourForm.js";

import "./App.scss";

const Header = (props) => {
  return (
    <header className="header-booking">
      <h1> {props.title} </h1>
      <span className="stats"> Total tours: {props.totalTours} </span>
      <ul>
        <li> Action </li> <li> Tour Name </li> <li> Date </li>
        <li> Duration </li> <li> Seats Total </li>
      </ul>
    </header>
  );
};

class App extends Component {
  constructor() {
    super();
    this.database = firebase.database().ref();
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
        };
        newToursAarray.push(toursObject);
      }

      this.setState({
        tours: newToursAarray,
      });
    });
  }

  // ********** REMOVING TOURS****************
  handleRemoveTour = (id) => {
    this.database.child(id).remove();
  };

    // ********** UPDATE TOURS****************
  handleEditTourName = id => {
    let newUserValue = prompt("Edit Tour Name")
      this.database.child(id).update({
        name: newUserValue
      });
  }
  handleEditTourDate = id => {
    let today = new Date()
    let newUserValue = prompt("Edit tour date: year-month-day", today.getFullYear()+"-"+[today.getMonth()]+"-"+today.getDate())
      this.database.child(id).update({
        date: newUserValue
      });
  }
  handleEditTourDuration = id => {
    let newUserValue = prompt("Edit Tour Duration, hours")
      this.database.child(id).update({
        duration: newUserValue
      });
  }
  handleEditTourSeats = id => {
    let newUserValue = prompt("Edit Tour Seats")
      this.database.child(id).update({
        seats: newUserValue
      });
  }

  addTour(e) {
    e.preventDefault();
  }
  addTour = (
    toursObjectName,
    toursObjectDate,
    toursObjectDuration,
    toursObjectSeats
  ) => {
    // console.log(toursObject);
    this.database.push().set({
      name: toursObjectName,
      date: toursObjectDate,
      duration: toursObjectDuration,
      seats: toursObjectSeats,
    });
  };

  render() {
    return (
      <div className="tour-booking-list">
        <Header title="Tour Inventory" totalTours={this.state.tours.length} />
        {this.state.tours.map((toursObject) => {
          return (
            <ul className="inventory-booking-item" key={toursObject.id}>
              <li>
                <button onClick={() => this.handleRemoveTour(toursObject.id)}>
                  <i class="fas fa-backspace"> </i>
                </button>  
         
              </li>
              <li> 
                <button onClick={() => this.handleEditTourName(toursObject.id)}>
                  <i class="fas fa-pen"> </i>
                </button> 
                {toursObject.name} </li> 
              <li>
                <button onClick={() => this.handleEditTourDate(toursObject.id)}>
                  <i class="fas fa-pen"> </i>
                </button>  
                {toursObject.date} 
                </li>
              <li>
                <button onClick={() => this.handleEditTourDuration(toursObject.id)}>
                  <i class="fas fa-pen"> </i>
                </button> 
                {toursObject.duration}
                hrs
              </li>
              <li> 
                <button onClick={() => this.handleEditTourSeats(toursObject.id)}>
                  <i class="fas fa-pen"> </i>
                </button> 
                {toursObject.seats} </li>
            </ul>
          );
        })}
        <NewTourForm addTour={this.addTour} />
      </div>
    );
  }
}

export default App;

