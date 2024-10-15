import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/homePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import {
  faArrowRight,
  faBook,
  faBookReader,
  faChalkboardTeacher,
  faGraduationCap,
  faLaptopFile,
  faLightbulb,
  faPeopleGroup,
  faSchool,
  faSpaceShuttle,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Element } from 'react-scroll'

const HomePage = ({ setIsAuthenticated }) => {
  const [activeTab, setActiveTab] = useState('login')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  return (
    <Container fluid>
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

        <Col className="align-items-end" style={{ paddingRight: '50px' }}>
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
        </Col>
      </Row>

      <Row className="card2 full-height  ">
        <Col className=" text-center ">
          <div style={{ paddingTop: '-80px' }}>
            <p className="heading2"> KahibawHub Analytics Overview</p>
            <p
              style={{ padding: '0px 200px 50px 200px' }}
              className="subheading1"
            >
              Discover our growing network of learners and educators,
              illustrating the collective impact of knowledge sharing and
              collaboration in education.
            </p>
          </div>

          <Row>
            <Col>
              <div className="card text-center">
                <div className="card-body">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    size="2x"
                    color="maroon"
                  />
                  <p
                    className="card-text"
                    style={{
                      paddingTop: '8px',
                      fontSize: '25px',
                      fontWeight: 'bold',
                    }}
                  >
                    {' '}
                    200+
                  </p>
                  <p>Users</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="card text-center">
                <div className="card-body">
                  <FontAwesomeIcon icon={faBook} size="2x" color="maroon" />
                  <p
                    className="card-text"
                    style={{
                      paddingTop: '8px',
                      fontSize: '25px',
                      fontWeight: 'bold',
                    }}
                  >
                    {' '}
                    500+
                  </p>
                  <p>Contributions</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="card text-center">
                <div className="card-body">
                  <FontAwesomeIcon
                    icon={faBookReader}
                    size="2x"
                    color="maroon"
                  />
                  <p
                    className="card-text"
                    style={{
                      paddingTop: '8px',
                      fontSize: '25px',
                      fontWeight: 'bold',
                    }}
                  >
                    {' '}
                    400+
                  </p>
                  <p>Reads</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="card text-center">
                <div className="card-body">
                  <FontAwesomeIcon icon={faSchool} size="2x" color="maroon" />
                  <p
                    className="card-text"
                    style={{
                      paddingTop: '8px',
                      fontSize: '25px',
                      fontWeight: 'bold',
                    }}
                  >
                    {' '}
                    3
                  </p>
                  <p>Institutions</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="card3 mb-6 full-height">
        <Col className="text-center">
          <p className=" heading3">Community</p>
          <p className="subheading1">
            {' '}
            KahibawHub is dedicated to serving a diverse community of learners,
            educators, and professionals.{' '}
          </p>

          <Row
            className="d-flex align-items-stretch justify-content-center"
            style={{ padding: '50px' }}
          >
            <Col xs={12} sm={6} md={4} className="mb-3 ">
              <div className="card text-center h-100 ">
                <div className="card-body">
                  <Row
                    className="d-flex align-items-center"
                    style={{ paddingBottom: '15px' }}
                  >
                    {' '}
                    <Col xs="auto">
                      <FontAwesomeIcon
                        icon={faChalkboardTeacher}
                        size="3x"
                        color="maroon"
                      />
                    </Col>
                    <Col xs="auto">
                      <p
                        className="card-text"
                        style={{
                          paddingTop: '8px',
                          fontSize: '25px',
                          fontWeight: 'bold',
                        }}
                      >
                        {' '}
                        Teachers
                      </p>
                    </Col>
                  </Row>

                  <p
                    className="mt-auto"
                    style={{ textAlign: 'justify', fontSize: '18px' }}
                  >
                    We support educators in creating an engaging learning
                    environment and staying updated with the latest educational
                    trends.{' '}
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} className="mb-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <Row
                    className="d-flex align-items-center"
                    style={{ paddingBottom: '15px' }}
                  >
                    {' '}
                    <Col xs="auto">
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        size="3x"
                        color="maroon"
                      />
                    </Col>
                    <Col xs="auto">
                      <p
                        className="card-text"
                        style={{
                          paddingTop: '8px',
                          fontSize: '25px',
                          fontWeight: 'bold',
                        }}
                      >
                        {' '}
                        Students
                      </p>
                    </Col>
                  </Row>

                  <p
                    className="mt-auto"
                    style={{ textAlign: 'justify', fontSize: '18px' }}
                  >
                    We offer a wide range of resources including study
                    materials, tutorials, and interactive content to help
                    students excel in their studies.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4} className="mb-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <Row
                    className="d-flex align-items-center"
                    style={{ paddingBottom: '15px' }}
                  >
                    {' '}
                    <Col xs="auto">
                      <FontAwesomeIcon
                        icon={faLaptopFile}
                        size="3x"
                        color="maroon"
                      />
                    </Col>
                    <Col xs="auto">
                      <p
                        className="card-text"
                        style={{
                          paddingTop: '8px',
                          fontSize: '25px',
                          fontWeight: 'bold',
                        }}
                      >
                        {' '}
                        Lifelong Learners
                      </p>
                    </Col>
                  </Row>

                  <p
                    className="mt-auto"
                    style={{ textAlign: 'justify', fontSize: '18px' }}
                  >
                    Whether you are looking to learn a new skill, explore a new
                    subject, or advance your career, our platform provides
                    valuable content to support your learning journey.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="card2 mb-5 full-height">
        <Col>
          <div className="text-center" style={{ paddingBottom: '20px' }}>
            <p className="heading2"> Explore KahibawHub</p>
            <p className="subheading1"> Take a look at our features.</p>
          </div>

          <Row className=" align-items-stretch">
            <Col xs={12} md={6} className=" d-flex flex-column">
              <div className="  mb-3 flex-grow-1 ">
                <div className="card-body" style={{ paddingBottom: '30px' }}>
                  <Row className="d-flex align-items-center">
                    {' '}
                    <Col xs="auto">
                      <FontAwesomeIcon
                        icon={faPeopleGroup}
                        size="2x"
                        color="maroon"
                      />
                    </Col>
                    <Col xs="auto">
                      <p
                        className="card-text"
                        style={{
                          paddingTop: '8px',
                          fontSize: '20px',
                          fontWeight: 'bold',
                        }}
                      >
                        {' '}
                        Collaborative Learning
                      </p>
                    </Col>
                  </Row>

                  <p
                    className="subheading1 mt-auto"
                    style={{
                      textAlign: 'justify',
                      fontSize: '18px',
                      paddingTop: '10px',
                      paddingLeft: '60px',
                    }}
                  >
                    Collaborate with teachers and students from differents
                    schools.
                  </p>

                  <button
                    className="btnSection4"
                    style={{ paddingLeft: '50px' }}
                  >
                    Explore
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="btnSection4"
                    >
                      {' '}
                    </FontAwesomeIcon>
                  </button>
                </div>

                <div className="card-body" style={{ paddingBottom: '30px' }}>
                  <Row className="d-flex align-items-center">
                    {' '}
                    <Col xs="auto">
                      <FontAwesomeIcon
                        icon={faSpaceShuttle}
                        size="2x"
                        color="maroon"
                      />
                    </Col>
                    <Col xs="auto">
                      <p
                        className="card-text"
                        style={{
                          paddingTop: '8px',
                          fontSize: '20px',
                          fontWeight: 'bold',
                        }}
                      >
                        {' '}
                        Easy Access
                      </p>
                    </Col>
                  </Row>

                  <p
                    className="subheading1 mt-auto"
                    style={{
                      textAlign: 'justify',
                      fontSize: '18px',
                      paddingTop: '10px',
                      paddingLeft: '60px',
                    }}
                  >
                    Access your learning materials anytime, anywhere.
                  </p>

                  <button
                    className="btnSection4"
                    style={{ paddingLeft: '50px' }}
                  >
                    Explore
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="btnSection4"
                    >
                      {' '}
                    </FontAwesomeIcon>
                  </button>
                </div>

                <div className="card-body">
                  <Row className="d-flex align-items-center">
                    {' '}
                    <Col xs="auto">
                      <FontAwesomeIcon
                        icon={faLightbulb}
                        size="2x"
                        color="maroon"
                      />
                    </Col>
                    <Col xs="auto">
                      <p
                        className="card-text"
                        style={{
                          paddingTop: '8px',
                          fontSize: '20px',
                          fontWeight: 'bold',
                        }}
                      >
                        {' '}
                        User-friendly Interface
                      </p>
                    </Col>
                  </Row>

                  <p
                    className="subheading1 mt-auto"
                    style={{
                      textAlign: 'justify',
                      fontSize: '18px',
                      paddingTop: '10px',
                      paddingLeft: '60px',
                    }}
                  >
                    Navigate our platform with ease.
                  </p>

                  <button
                    className="btnSection4"
                    style={{ paddingLeft: '50px' }}
                  >
                    Explore
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="btnSection4"
                    >
                      {' '}
                    </FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </Col>

            <Col
              xs={12}
              md={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={500}
                showThumbs={false}
              >
                <div>
                  <img
                    src="https://img.freepik.com/free-photo/college-girls-studying-together_23-2149038414.jpg"
                    alt="Slide 1"
                  />
                </div>

                <div>
                  <img
                    src="https://img.freepik.com/free-photo/colleagues-studying-together-during-group-study_23-2149211084.jpg"
                    alt="Slide 1"
                  />
                </div>

                <div>
                  <img
                    src="https://www.cns-partners.com/hubfs/IT-System-Blog-Images/Slide1.jpg"
                    alt="Slide 1"
                  />
                </div>
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>

      <Element name="about-us">
        <Row id="about-us" style={{ color: 'white' }}>
          <Col style={{ padding: '50px' }}>
            <div>
              <p className="heading3 text-center" style={{ color: 'white' }}>
                About KahibawHub
              </p>
            </div>

            <Row className="full-height">
              <Col
                xs={12}
                md={6}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <Carousel
                  showArrows={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={3000}
                  transitionTime={500}
                  showThumbs={false}
                >
                  <div>
                    <img
                      src="https://img.freepik.com/free-photo/college-girls-studying-together_23-2149038414.jpg"
                      alt="Slide 1"
                    />
                  </div>

                  <div>
                    <img
                      src="https://img.freepik.com/free-photo/colleagues-studying-together-during-group-study_23-2149211084.jpg"
                      alt="Slide 1"
                    />
                  </div>

                  <div>
                    <img
                      src="https://www.cns-partners.com/hubfs/IT-System-Blog-Images/Slide1.jpg"
                      alt="Slide 1"
                    />
                  </div>
                </Carousel>
              </Col>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <p style={{ textAlign: 'justify' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eleifend congue nibh in consequat. Etiam molestie tristique
                  libero, in blandit eros semper vitae. Ut orci dolor, auctor
                  eget accumsan vel, vehicula ac massa. Pellentesque nec velit
                  ullamcorper, facilisis augue sit amet, finibus neque. Aenean
                  rhoncus sapien eu augue laoreet, luctus iaculis tortor
                  laoreet. In consequat congue eleifend. Cras tristique eget
                  mauris eget lobortis. Vestibulum viverra lorem vitae lorem
                  scelerisque, condimentum pretium sem rhoncus.
                </p>
                <Row>
                  <Col>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Col>

                  <Col>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Col>

                  <Col>
                    <FontAwesomeIcon icon={faTwitter} />
                  </Col>

                  <Col>
                    <FontAwesomeIcon icon={faInstagram} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Element>
    </Container>
  )
}

export default HomePage
