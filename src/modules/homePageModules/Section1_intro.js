import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import headerImage from '../../assets/laptop.png'

const Section1_intro = ({ setIsAuthenticated }) => {
  const [activeTab, setActiveTab] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const handleLogin = (e) => {
    e.preventDefault() // Prevent default form submission
    setIsLoggedIn(true)
    setIsAuthenticated(true)
  }

  return (
    <Row className="section1 align-items-center mb-5 ">
      <Col md={7} className="section1">
        <p className="heading1">
          {' '}
          Welcome to KahibawHub Learning Materials Repository System
        </p>
        <p className="subtitle1">Bridging education and collaboration</p>

        <Row md={6} className="d-flex mt-2">
          <button className="btnContribute btn-transparent border-red text-white">
            Contribute
          </button>
          <button className="btnDiscover btn-red text-white">Discover</button>
        </Row>
        <p className="subtitle1">Join us and start sharing knowledge today</p>
      </Col>

      <Col md={4} className="align-items-end">
        {!isLoggedIn ? (
          <div className="card1 p-3 my-5 d-flex flex-column w-50r p-4 rounded shadow">
            <h5 className="subtitle2 text-center" style={{ marginBottom: '8' }}>
              Join our Community of learners
            </h5>

            <ul className="nav nav-pills nav-justified mb-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === 'login' ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick('login')}
                >
                  Log-in
                </button>
              </li>

              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === 'register' ? 'active' : ''
                  }`}
                  onClick={() => handleTabClick('register')}
                >
                  Register
                </button>
              </li>
            </ul>

            <div className="tab-content subtitle2">
              {activeTab === 'login' && (
                <div className="tab-pane fade show active">
                  <div className="text-center mb-3">
                    <p>Sign in with:</p>
                    <div>
                      <button className="btn btn-light">
                        <i className="fa fa-facebook-f"></i>
                      </button>
                      <button className="btn btn-light">
                        <i className="fa fa-google"></i>
                      </button>
                      <button className="btn btn-light">
                        <i className="fa fa-github"></i>
                      </button>
                    </div>
                    <p className="text-center mt-3">or:</p>
                  </div>

                  <form>
                    <div className="mb-3 ">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <div>
                        <input type="checkbox" id="remember" />
                        <label className="ms-2">Remember me</label>
                      </div>
                      <a href="\">Forgot password</a>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </form>
                </div>
              )}
              {activeTab === 'register' && (
                <div>
                  <div className="text-center mb-3">
                    <p className="text1">Register with:</p>
                    <div
                      className="d-flex justify-content-between mx-auto"
                      style={{ width: '40%' }}
                    >
                      <button className="btn btn-light">
                        <i className="fa fa-facebook-f"></i>
                      </button>
                      <button className="btn btn-light">
                        <i className="fa fa-google"></i>
                      </button>
                      <button className="btn btn-light">
                        <i className="fa fa-github"></i>
                      </button>
                    </div>
                    <p className="text-center mt-3">or:</p>
                  </div>

                  <form>
                    <Row>
                      <Col>
                        <label htmlFor="fname" className="form-label">
                          Firstname
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          autoComplete="true"
                          required
                        />
                      </Col>

                      <Col>
                        <label htmlFor="lname" className="form-label">
                          Lastname
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lname"
                          autoComplete="true"
                          required
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col className="mb-3">
                        <label htmlFor="insname" className="form-label">
                          Institution/School
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="insname"
                          autoComplete="false"
                          required
                        />
                      </Col>

                      <Col className="mb-3">
                        <label htmlFor="uname" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="uname"
                          autoComplete="false"
                          required
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col className="mb-3">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          autoComplete="false"
                          required
                        />
                      </Col>

                      <Col className="mb-3">
                        <label htmlFor="repeat-password" className="form-label">
                          Repeat password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="repeat-password"
                          autoComplete="false"
                          required
                        />
                      </Col>
                    </Row>

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-primary w-50 ">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="image-container text-center">
            <img
              src={headerImage}
              alt="Students Studying"
              className="studying-image"
            />
          </div>
        )}
      </Col>
    </Row>
  )
}

export default Section1_intro
