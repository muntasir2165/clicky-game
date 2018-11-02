import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div className="bg-dark navbar-dark container-fluid text-center">
      <div className="row">
        <div className="col-md-4">
          <h2><a href="/" className="text-white nounderline">Clicky Game</a></h2>
        </div>
        <div className="col-md-4 text-muted">
          <h2>{props.feedback}</h2>
        </div>
        <div className="col-md-4 text-muted">
          <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
        </div>
      </div>
    </div>
);

export default Navbar;
