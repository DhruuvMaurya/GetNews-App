import React, { Component } from 'react'
import {NavLink } from "react-router-dom"
import title from './title.svg'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg text-bg-danger shadow p-2 mb-3 fixed-top">
          <div className="container-fluid font-weight-bold">
            <NavLink to="/general" className="navbar-brand font-weight-bold">
              <div>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={title}
                  className="d-inline align-top"
                  alt="GetNews"
                />
              </div>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

              <div className="navbar-nav">
                <NavLink
                  className={({ isActive }) => isActive? "active": ''}
                  to="/general"
                  aria-current="page"
                >
                  General
                </NavLink>
                <NavLink className={({ isActive }) => isActive? "active": ''} to="/business">
                  Business
                </NavLink>
                <NavLink className={({ isActive }) => isActive? "active": ''} to="/entertainment">
                  Entertainment
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive? "active": ''}
                  to="/health"
                >
                  Health
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive? "active": ''}
                  to="/science"
                >
                  Science
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive? "active": ''}
                  to="/sports"
                >
                  Sports
                </NavLink>
                <NavLink
                  className={({ isActive }) => isActive? "active": ''}
                  to="/technology"
                >
                  Technology
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
