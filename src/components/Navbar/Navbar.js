import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../../logo.svg";

import AgentsPage from "../agentsPage/App";
import "./navbar.scss";

function Navbar() {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <img src={logo} alt="bee logo" className="logo" />
            <h4> tour_Bees / </h4>
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/agentsPage/" className="agents-page">
              Manage Inventory
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/agentsPage/" component={AgentsPage} />
      </Switch>
    </Router>
  );
}

export default Navbar;
