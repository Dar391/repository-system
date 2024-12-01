import {
  faChalkboardTeacher,
  faGraduationCap,
  faLaptopFile,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Section3_CommunityPage = () => {
  return (
    <Row className="card3 mb-6" style={{ height: '85vh' }}>
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
                  className="d-flex flex-column align-items-center"
                  style={{ paddingBottom: '15px' }}
                >
                  {' '}
                  <Col xs="auto" className="text-center">
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
                  style={{ textAlign: 'center', fontSize: '18px' }}
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
                  className="d-flex flex-column align-items-center"
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
                  style={{ textAlign: 'center', fontSize: '18px' }}
                >
                  We offer a wide range of resources including study materials,
                  tutorials, and interactive content to help students excel in
                  their studies.
                </p>
              </div>
            </div>
          </Col>

          <Col md={4} className="mb-3">
            <div className="card text-center h-100">
              <div className="card-body">
                <Row
                  className="d-flex flex-column align-items-center"
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
                  style={{ textAlign: 'center', fontSize: '18px' }}
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
  )
}

export default Section3_CommunityPage
