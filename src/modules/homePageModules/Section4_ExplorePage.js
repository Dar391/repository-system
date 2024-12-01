import React from 'react'
import { Col, Row } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faArrowRight,
  faLightbulb,
  faPeopleGroup,
  faSpaceShuttle,
} from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Section4_ExplorePage = () => {
  return (
    <Row className="ExplorePage mb-5 full-height ">
      <Col>
        <div className="text-center" style={{ paddingBottom: '20px' }}>
          <p className="heading2"> Explore KahibawHub</p>
          <p className="subheading1"> Take a look at our features.</p>
        </div>

        <Row className=" align-items-stretch justify-content-center gx-8 px-3">
          <Col xs={12} md={6} className=" d-flex flex-column px-3">
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

                <button className="btnSection4" style={{ paddingLeft: '50px' }}>
                  Explore
                  <FontAwesomeIcon icon={faArrowRight} className="btnSection4">
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

                <button className="btnSection4" style={{ paddingLeft: '50px' }}>
                  Explore
                  <FontAwesomeIcon icon={faArrowRight} className="btnSection4">
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

                <button className="btnSection4" style={{ paddingLeft: '50px' }}>
                  Explore
                  <FontAwesomeIcon icon={faArrowRight} className="btnSection4">
                    {' '}
                  </FontAwesomeIcon>
                </button>
              </div>
            </div>
          </Col>

          <Col
            xs={12}
            md={5}
            className="px-3 d-flex flex-column justify-content-center align-items-center"
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
                  className="img-fluid"
                />
              </div>

              <div>
                <img
                  src="https://img.freepik.com/free-photo/colleagues-studying-together-during-group-study_23-2149211084.jpg"
                  alt="Slide 1"
                  className="img-fluid"
                />
              </div>

              <div>
                <img
                  src="https://www.cns-partners.com/hubfs/IT-System-Blog-Images/Slide1.jpg"
                  alt="Slide 1"
                  className="img-fluid"
                />
              </div>
            </Carousel>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Section4_ExplorePage
