// import React, { Component } from "react";
// import firebase from "./firebase";

// // Data obtained from DB and rendered on page
// export default class tourData extends Component {
//   constructor() {
//     super();
//     this.state = {
//       tours: [],
//     };
//   }
//   componentDidMount() {
//     const dbRef = firebase.database().ref();

//     dbRef.on("value", (snapshot) => {
//       // checking changes in db

//       const data = snapshot.val();

//       const newToursAarray = [];

//       for (let inventoryName in data) {
//         const toursObject = {
//           id: inventoryName,
//           tours: data[inventoryName],
//           name: data[inventoryName].name,
//           seats: data[inventoryName].seats,
//           date: data[inventoryName].date,
//           duration: data[inventoryName].duration,
//         };
//         newToursAarray.push(toursObject);
//       }

//       this.setState({
//         tours: newToursAarray,
//       });
//     });
//   }
//   render() {
//     return (
//       <div className="tourlist">
//         {this.state.tours.map((toursObject) => {
//           return (
//             <ul className="inventoryItem" key={toursObject.id}>
//               <li> Name: {toursObject.name} </li>
//               <li> Date: {toursObject.date} </li>
//               <li>
//                 Duration: {toursObject.duration}
//                 hrs
//               </li>
//               <li> seats: {toursObject.seats} </li>
//               <hr />
//             </ul>
//           );
//         })}
//       </div>
//     );
//   }
// }