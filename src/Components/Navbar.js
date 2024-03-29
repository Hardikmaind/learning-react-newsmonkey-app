/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

// since we only need link here, we removed the all uncessary
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {  Link } from "react-router-dom";

export class Navbar extends Component {


  render() {
    return (
      // done this to make navbar sticky
      <div><nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/General">General</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Sport">Sport</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Technology">Technology</Link>
            </li>
            
            
          </ul>
          
        </div>
      </div>
    </nav>
    </div>
    )
  }
}

export default Navbar