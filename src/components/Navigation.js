import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          Job Portal
        </a> */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/job-postings">
                Job Postings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/apply">
                Apply
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/AddTask">
                Task Management
              </NavLink>
              </li>

            <li className="nav-item">
              {/* <NavLink className="nav-link" to="/login">
                Login / Register
              </NavLink> */}
              <a href='/login'>Login /</a>
              <a href='/register'> Register</a>

            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/AddTask">
                Task Management
              </NavLink>
              </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

