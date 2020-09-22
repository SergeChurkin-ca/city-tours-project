import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../../logo.svg";
import AgentsPage from "../agentsPage/App";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <img src={logo} alt="bee logo" className="logo" />
          <h4> tour_Bees / </h4>
        </li>

        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
        <li>
          <Link to="/agentsPage">AgentsPage</Link>
          {/* <a
            href="https://sergechurkin-ca.github.io/sergechurkin-projectFive/?"
            className="nav-link"
          >
            agent 's page
          </a> */}
        </li>
      </ul>
      <Switch>
        <Route path="/agentsPage">
          AgentsPage
          <AgentsPage />
        </Route>
      </Switch>
    </nav>
  );
}
