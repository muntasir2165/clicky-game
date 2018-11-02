import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <a className="navbar-brand" href="/">Clicky Game</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
        <a className="nav-link" href="/">Feedback</a>
        </li>
        <li className="nav-item ml-3 mb-2">
          <a className="nav-link" href="/">Score</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
