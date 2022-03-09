import React from "react";
//import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <a className="navbar-brand text-dark" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/">
                New Player
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/edit">
                Edit Player
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/search">
                Search Player
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}
