import React, { Component } from "react";
import firebase from "../../firebase";
import preloadedImg from "./spinner.gif";


// Data obtained from DB and rendered on page
export default class Tour extends Component {
 
  constructor() {
    super();
    this.state = {
      tours: [],
      removeTour: "",
      showInfo: false,
      loaded: false
    };
  }

  // button that toggles info
  handleInfo = (id) => {
    this.setState({
      showInfo: id,
    });
  };

  removeTour = (id) => {
    this.setState({
      showInfo: !id,
    });
  };

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
          // this is temporary tour info placeholder and will be removed and connetcted to real DB
          info:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi animi sint repudiandae amet quasi fuga quis ullam quibusdam. Magni ipsam iste aspernatur a saepe fugiat. " +
            data[inventoryName].name,
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
      
      <div className="tour-output-list">
        {this.state.tours.map((toursObject) => {
          return (
            <section className="tour-output-Item" key={toursObject.id}>
              <header className="header-tour">
                <h3> {toursObject.name} </h3>
                <h5>
                  info {/* button that toggles info */}
                  <span onClick={() => this.handleInfo(toursObject.id)}>
                    <i className="fas fa-caret-square-down"> </i>
                  </span>
                </h5>
              </header>
              <ul className="inventory-output-item" key={toursObject.id}>
                <li> {toursObject.date} | </li>
                <li>
                  {toursObject.duration}
                  hrs |
                </li>
                <li> {toursObject.seats} seats</li>
              </ul>
              {/* spinner image as a default background to prevent empty section  */}
              <div className="img-container" style={{
              background: `url(${preloadedImg}) no-repeat center`,
              height: '20em',
                // width: '100%',
            
            }}>
                {this.state.showInfo === toursObject.id && (
                  // text that toggles when clicking on info button
                  <p className="tour-info">
                    {toursObject.info}
                    <span
                      className="close-btn"
                      onClick={() => this.removeTour(toursObject.id)}
                    >
                      <i className="fas fa-chevron-up"> </i>
                    </span>
                  </p>
                )}
                <img src={toursObject.imgUrl} alt="imageoftour" />
              </div>
            </section>
          );
        }
        )}
      </div>
    );
  }
}


