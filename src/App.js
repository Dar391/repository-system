import './App.css'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import logo from './assets/logoFinal.png'
import Home from './modules/HomePage'
import BrowserMaterial from './modules/BrowsePage'
import Discipline from './modules/DisciplinePage'
import Engagement from './modules/Engagements'
import MyMaterials from './modules/myMaterials'
import AccessedMaterials from './modules/accessedMaterials'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  const scrollIntoSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'Smooth' })
    }
  }

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
                  <Link className="nav-link" to="/home">
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
                    {' '}
                    Browse
                  </Link>
                </li>

                <li className="nav-item">
                  <ScrollLink
                    className="nav-link"
                    to="about-us"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => scrollIntoSection('about-us')}
                  >
                    About Us
                  </ScrollLink>
                </li>

                {isAuthenticated ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/engagement">
                        Engagement
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="\"
                        id="DropDownMaterials"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        My materials
                      </Link>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="DropDownMaterials"
                      >
                        <Link className="dropdown-item" to="/my-materials">
                          Authored
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="/accessed-Materials"
                        >
                          Accessed Materials
                        </Link>
                      </div>
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
                        <Link className="dropdown-item" to="#">
                          {' '}
                          Profile
                        </Link>
                        <Link className="dropdown-item" to="#">
                          {' '}
                          Collaborations
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={handleLogout}
                        >
                          {' '}
                          Log-out
                        </Link>
                      </div>
                    </li>
                  </>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route
            path="/home"
            element={<Home setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/browse" element={<BrowserMaterial />} />
          <Route path="/discipline/:field" element={<Discipline />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/my-materials" element={<MyMaterials />} />
          <Route path="/accessed-materials" element={<AccessedMaterials />} />
        </Routes>

        <footer className="bg-body-tertiary text-center text-lg-start">
          <div
            className="text-center p-3"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              color: 'GrayText',
            }}
          >
            © 2024 For any inquiries, email us at{' '}
            <a
              className="text-body"
              href="mailto:lincopinis.darllainer@gmail.com"
            >
              info@kahibawhub.com
            </a>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
