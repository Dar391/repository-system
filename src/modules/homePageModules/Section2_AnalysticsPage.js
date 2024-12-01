import {
  faBook,
  faBookReader,
  faSchool,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
const Section2_AnalysticsPage = () => {
  return (
    <Row className="card2" style={{ height: '70vh' }}>
      <Col className=" text-center ">
        <div style={{ paddingTop: '-80px' }}>
          <p className="heading2"> KahibawHub Analytics Overview</p>
          <p
            style={{ padding: '0px 200px 50px 200px' }}
            className="subheading1"
          >
            Discover our growing network of learners and educators, illustrating
            the collective impact of knowledge sharing and collaboration in
            education.
          </p>
        </div>

        <Row>
          <Col>
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={faUserGroup} size="2x" color="maroon" />
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
                <FontAwesomeIcon icon={faBookReader} size="2x" color="maroon" />
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
  )
}

export default Section2_AnalysticsPage
