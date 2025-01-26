import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import headerImage from '../../assets/laptop.png'
import '../../styles/loginStyles.css'
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ModalAddMaterials from '../ModalAddMaterials'
import BrowsePage from '../BrowsePage'

const Section1_intro = ({ setIsAuthenticated }) => {
  const [activeTab, setActiveTab] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('')

  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleAddClick = () => {
    setShowModal(true)
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const handleLogin = (e) => {
    e.preventDefault() // Prevent default form submission
    setIsLoggedIn(true)
    setIsAuthenticated(true)
  }

  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault()
      return
    }
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  const validateInputs = () => {
    setIsLoggedIn(true)
    setIsAuthenticated(true)
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    let isValid = true

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true)
      setEmailErrorMessage('Please enter a valid email address.')
      isValid = false
    } else {
      setEmailError(false)
      setEmailErrorMessage('')
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true)
      setPasswordErrorMessage('Password must be at least 6 characters long.')
      isValid = false
    } else {
      setPasswordError(false)
      setPasswordErrorMessage('')
    }

    return isValid
  }

  const navigate = useNavigate()

  return (
    <Row className="section1 align-items-center mb-5 ">
      <Col md={7} className="section1">
        <p className="heading1">
          {' '}
          Welcome to KahibawHub Learning Materials Repository System
        </p>
        <p className="subtitle1">Bridging education and collaboration</p>

        <Row md={6} className="d-flex mt-2">
          <button
            className="btnContribute btn-transparent border-red text-white"
            onClick={handleAddClick}
          >
            Contribute
          </button>
          <button
            className="btnDiscover btn-red text-white"
            onClick={() => navigate('/browse')}
          >
            Discover
          </button>
        </Row>
        <p className="subtitle1">Join us and start sharing knowledge today</p>
      </Col>

      <Col md={4} className="align-items-end">
        {!isLoggedIn ? (
          <div className="card1 p-3 my-5 d-flex flex-column  p-4 rounded shadow">
            <h5
              className="subtitle2 text-center"
              style={{ marginBottom: '20px' }}
            >
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
                  <div className="login">
                    <FormControl
                      style={{ width: '100%', marginBottom: '16px' }}
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <TextField
                        error={emailError}
                        helperText={emailErrorMessage}
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        autoComplete="email"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={emailError ? 'error' : 'primary'}
                        size="small"
                      />
                    </FormControl>
                    <FormControl
                      style={{ width: '100%', marginBottom: '16px' }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Link
                          component="button"
                          type="button"
                          variant="body2"
                          style={{ alignSelf: 'baseline' }}
                        >
                          Forgot your password?
                        </Link>
                      </div>
                      <TextField
                        error={passwordError}
                        helperText={passwordErrorMessage}
                        name="password"
                        placeholder="••••••"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        required
                        fullWidth
                        variant="outlined"
                        color={passwordError ? 'error' : 'primary'}
                        size="small"
                      />
                    </FormControl>

                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      onClick={validateInputs}
                    >
                      {' '}
                      Log in{' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ paddingLeft: '2%' }}
                      />
                    </Button>
                  </div>
                </div>
              )}
              {activeTab === 'register' && (
                <div>
                  {/* 
                <div className="text-center mb-3">
                  <p>Sign in with:</p>
                  <div
                    className="d-flex justify-content-between mx-auto"
                    style={{ width: '40%' }}
                  >
                    <button
                      className="btn "
                      style={{ backgroundColor: '#3b5998', color: 'white' }}
                    >
                      <i className="fa fa-facebook-f"></i>
                    </button>
                    <button
                      className="btn btn-light"
                      style={{ backgroundColor: '#db4437', color: 'white' }}
                    >
                      <i className="fa fa-google"></i>
                    </button>
                    <button
                      className="btn "
                      style={{ backgroundColor: '#333', color: 'white' }}
                    >
                      <i className="fa fa-github"></i>
                    </button>
                  </div>
                  <p className="text-center mt-3">or:</p>
                </div> 
                */}

                  <div>
                    <FormControl
                      style={{ width: '100%', marginBottom: '16px' }}
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <TextField
                        error={emailError}
                        helperText={emailErrorMessage}
                        id="email-reg"
                        type="email"
                        placeholder="your@email.com"
                        autoComplete="email"
                        autoFocus
                        required
                        fullWidth
                        size="small"
                        color={emailError ? 'error' : 'primary'}
                      />
                    </FormControl>
                    <FormControl
                      style={{ width: '100%', marginBottom: '16px' }}
                    >
                      <FormLabel htmlFor="email">Password</FormLabel>
                      <TextField
                        error={passwordError}
                        helperText={passwordErrorMessage}
                        id="password-reg"
                        type="password"
                        placeholder="••••••"
                        autoComplete="current-password"
                        required
                        fullWidth
                        size="small"
                        color={passwordError ? 'error' : 'primary'}
                      />
                      <p style={{ fontSize: '11px', color: 'gray' }}>
                        Password should be at least 12 characters OR at least 8
                        characters including a number and a lowercase letter.
                      </p>
                    </FormControl>
                    <FormControl
                      style={{ width: '100%', marginBottom: '16px' }}
                    >
                      <FormLabel htmlFor="email">First name</FormLabel>
                      <TextField
                        id="fname"
                        type="text"
                        placeholder="John"
                        required
                        fullWidth
                        size="small"
                      />
                    </FormControl>

                    <FormControl
                      style={{ width: '100%', marginBottom: '16px' }}
                    >
                      <FormLabel htmlFor="email">Last name</FormLabel>
                      <TextField
                        id="lname"
                        type="text"
                        placeholder="Doe"
                        required
                        fullWidth
                        size="small"
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      onClick={validateInputs}
                    >
                      {' '}
                      Register{' '}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ paddingLeft: '2%' }}
                      />
                    </Button>
                  </div>
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

      {showModal && (
        <ModalAddMaterials show={showModal} handleClose={handleCloseModal} />
      )}
    </Row>
  )
}

export default Section1_intro
