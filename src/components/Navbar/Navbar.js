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
    <Router basename={process.env.PUBLIC_URL}>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <img src={logo} alt="bee logo" className="logo" />
            <h2> tour_Bees / </h2>
          </li>

          <li>
            <NavLink to={`${process.env.PUBLIC_URL}/`}>Home</NavLink>
          </li>

          <li>
            <NavLink
              to={`${process.env.PUBLIC_URL}/agentsPage`}
              className="agents-page"
            >
              Manage Inventory
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route
          path={`${process.env.PUBLIC_URL}/agentsPage`}
          component={AgentsPage}
        />
      </Switch>
    </Router>
  );
}

export default Navbar;
