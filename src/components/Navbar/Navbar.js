import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <img src={logo} alt="bee logo" class="logo" />
          <h4> tour_Bees / </h4>
        </li>
        <li>
          <a href="/" className="nav-link">
            home
          </a>
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
          <a href="/" className="nav-link">
            agent 's page
          </a>
        </li>
      </ul>
    </nav>
  );
}
