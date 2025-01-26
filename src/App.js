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
import OpenMaterial from './modules/OpenMaterial'
import '../src/styles/topNavStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isScrollToAbout, setIsScrollToAbout] = useState(false)

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

  const handleScrollToAbout = () => {
    setIsScrollToAbout(true)
  }
  return (
    <Router>
      <div className="main">
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Container>
            <Link className="navbar-brand" to="#">
              <img
                src={logo}
                width={200}
                height={70}
                className="d-inline-block align-top"
                alt="site logo"
              />
            </Link>

            <Navbar.Toggle aria-controls="navbarNavDropdown" />
            <Navbar.Collapse id="navbarNavDropdown">
              <Nav className="me-auto">
                <Nav.Link
                  className="me-2"
                  as={Link}
                  to="/home"
                  style={{ color: 'white' }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className="me-2"
                  as={Link}
                  to="/browse"
                  style={{ color: 'white' }}
                >
                  Browse
                </Nav.Link>
                <Nav.Link
                  as={ScrollLink}
                  to="about-us"
                  smooth
                  duration={500}
                  onClick={handleScrollToAbout}
                  style={{ color: 'white' }}
                  className="me-2"
                >
                  About HahibawHub
                </Nav.Link>

                {isAuthenticated && (
                  <>
                    <Nav.Link
                      as={Link}
                      to="/engagement"
                      style={{ color: 'white' }}
                      className="me-2"
                    >
                      Engagement
                    </Nav.Link>

                    <NavDropdown
                      title="My materials"
                      id="navbarScrollingDropdown"
                      className="me-2"
                    >
                      <NavDropdown.Item as={Link} to="/my-materials">
                        Authored
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/accessed-Materials">
                        Accessed Materials
                      </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link
                      as={Link}
                      to="/collaboration-activity"
                      style={{ color: 'white' }}
                    >
                      Collaborations
                    </Nav.Link>
                  </>
                )}
              </Nav>

              <Nav>
                {isAuthenticated && (
                  <NavDropdown
                    style={{
                      backgroundColor: 'rgb(146, 12, 12)',
                      borderRadius: '7px',
                    }}
                    title={
                      <span>
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{ paddingRight: '8px' }}
                        />
                        My Account
                      </span>
                    }
                    id="dropdown-account"
                  >
                    <NavDropdown.Item as={Link} to="/profile">
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item as="button" onClick={handleLogout}>
                      Log-out
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route
            path="/home"
            element={
              <Home
                setIsAuthenticated={handleLogin}
                isScrollToAbout={isScrollToAbout}
                setIsScrollToAbout={setIsScrollToAbout}
              />
            }
          />
          <Route path="/browse" element={<BrowserMaterial />} />
          <Route path="/discipline/:field" element={<Discipline />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/my-materials" element={<AuthoredMaterials />} />
          <Route path="/accessed-materials" element={<MaterialAccessed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collaboration-activity" element={<Collaborations />} />
          <Route
            path="/about-us"
            element={
              <Home
                isScrollToAbout={isScrollToAbout}
                setIsScrollToAbout={setIsScrollToAbout}
              />
            }
          />
          <Route path="/open-material" element={<OpenMaterial />} />
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
