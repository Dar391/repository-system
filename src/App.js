import './App.css'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import logo from './assets/logoFinal.png'
import Home from './modules/HomePage'
import BrowserMaterial from './modules/BrowsePage'
import Discipline from './modules/DisciplinePage'
import Engagement from './modules/Engagements'
import AuthoredMaterials from './modules/AuthoredMaterials'
import MaterialAccessed from './modules/MaterialAccessed'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Profile from './modules/Profile'
import Collaborations from './modules/Collaborations'
import AboutUs from './modules/AboutUs'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  const handleLogin = () => {
    setIsAuthenticated(true)
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="#">
              <img
                src={logo}
                width={200}
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
                <li className="nav-item active me-3">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>

                <li className="nav-item me-3">
                  <Link className="nav-link" to="/browse">
                    {' '}
                    Browse
                  </Link>
                </li>

                {isAuthenticated ? (
                  <>
                    <li className="nav-item me-3">
                      <Link className="nav-link" to="/engagement">
                        Engagement
                      </Link>
                    </li>

                    <li className="nav-item dropdown me-3">
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

                    <li className="nav-item dropdown me-3">
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
                        <Link className="dropdown-item" to="/profile">
                          {' '}
                          Profile
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/collaboration-activity"
                        >
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
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route
            path="/home"
            element={<Home setIsAuthenticated={handleLogin} />}
          />
          <Route path="/browse" element={<BrowserMaterial />} />
          <Route path="/discipline/:field" element={<Discipline />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/my-materials" element={<AuthoredMaterials />} />
          <Route path="/accessed-materials" element={<MaterialAccessed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collaboration-activity" element={<Collaborations />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>

        <footer
          className="bg-body-tertiary text-center text-lg-start"
          style={{ paddingTop: 'auto' }}
        >
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
