// 🚧 🚧 🚧 🚧 🚧 🚧 
// work in progress - component was not enabled yet 🚧 
// 🚧 🚧 🚧 🚧 🚧 🚧 


import React, { Component } from 'react'
import firebase from "../../firebase";
// import Tour from '../Tour/Tour'

export default class dropDown extends Component {
     constructor() {
    super();
    this.state = {
      tours: [],
      removeTour: "",
      showInfo: false,
      loaded: false,
      
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
    render() {
        return (
            <div>
                <h1>Hello from dropdown</h1>
            <select>
              <option>Select tour</option>
              {
                this.state.tours.map(item => (
                  <option value={item.name} placeholder="All">{
                    item.name.toUpperCase()
                  }</option>
                  
                )
              )}
            </select>
           
                
            </div>
        )
    }
}
