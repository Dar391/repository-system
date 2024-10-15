import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import logo from "../assets/logoFinal.png";
import Home from "./HomePage";
import BrowserMaterial from "./BrowsePage";
import Discipline from "./DisciplinePage";
import Engagement from "./Engagements";
import MyMaterials from "./myMaterials";
import "../styles/navStyles.css";

const Navigation = () => {
  return (
    <Router>
      <div className="main">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="#">
              <img
                src={logo}
                width={190}
                height={70}
                className="d-inline-block align-top"
                alt="site logo"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="DropdownDiscipline"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Disciplines
                  </Link>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="DropdownDiscipline"
                  >
                    <Link className="dropdown-item" to="/discipline">
                      Information Technology
                    </Link>
                    <Link className="dropdown-item" to="/discipline">
                      Computer Science
                    </Link>
                    <Link className="dropdown-item" to="/discipline">
                      Engineering
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/browse">
                    {" "}
                    Browse
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/engagement">
                    Engagement
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/my-materials">
                    My materials
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="\account"
                    id="DropDownAccount"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Account
                  </Link>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="DropDownAccount"
                  >
                    <a className="dropdown-item" href="\">
                      {" "}
                      Profile
                    </a>
                    <a className="dropdown-item" href="\">
                      {" "}
                      Collaborations
                    </a>
                    <a className="dropdown-item" href="\">
                      {" "}
                      Log-out
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowserMaterial />} />
          <Route path="/disciplie/:field" element={<Discipline />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/my-materials" element={<MyMaterials />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
