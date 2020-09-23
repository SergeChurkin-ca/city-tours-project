import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

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
            <h2> tour_Bees / </h2>
          </li>

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/agentsPage" className="agents-page">
              Manage Inventory
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/agentsPage/" component={AgentsPage} />
      </Switch>
    </Router>
  );
}

export default Navbar;
