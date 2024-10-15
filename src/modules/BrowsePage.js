import React from 'react'
import '../styles/browse.css'
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faEye,
  faSearch,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

const BrowsePage = () => {
  return (
    <Container fluid className="BrowsePage">
      <Row className="text-center">
        <Col>
          <p className="headingBrowse">
            Find new learning <br />
            materials to deepen your <br />
            knowledge.
          </p>
          <p className="subheading1">
            {' '}
            Explore KahibawHub's curated selection of educational resources to
            broaden your horizons and deepen your understanding. Dive into
            insightful articles, tutorials, courses, and videos to master new
            subjects and enhance your skills.{' '}
          </p>

          <div style={{ paddingBottom: '2%' }}>
            <div className="col-md-9 mx-auto">
              <div className="d-flex align-items-center">
                <div className="input-group search-wrapper">
                  <input
                    className="search-input form-control border-end-1 border rounded-pill"
                    type="search"
                    placeholder="i.e. ICT 111"
                    id="search-input"
                    aria-label="Search materials"
                  />
                  <span className="input-group-append">
                    <button className="search-btn" type="button">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </span>
                </div>
                <div>
                  <button className="btnAdd ms-3">Add material</button>
                </div>
              </div>
            </div>

            <div className="item-list"></div>
          </div>

          <Row className="g-3">
            <Col
              xs={12}
              sm={6}
              md={3}
              lg={3}
              className="mb-3"
              style={{ overflow: 'hidden' }}
            >
              <Card
                style={{
                  padding: '0',
                }}
                className="card "
              >
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/300/200"
                  style={{ height: '8rem' }}
                />
                <CardBody>
                  <CardTitle
                    tag="h6"
                    className="cardDesc"
                    style={{ fontWeight: 'bolder' }}
                  >
                    ICT 121
                    <FontAwesomeIcon
                      icon={faStar}
                      color="orange"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faEye}
                      color="grey"
                    ></FontAwesomeIcon>
                  </CardTitle>
                  <CardSubtitle className="cardDesc mb-2 text-muted" tag="h6">
                    Author: John Doe
                  </CardSubtitle>
                  <CardText className="cardDesc">
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>

                  <button className="btnOpen">
                    Open material
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ paddingLeft: '10px' }}
                    />
                  </button>
                </CardBody>
              </Card>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={3}
              lg={3}
              className="mb-3"
              style={{ overflow: 'hidden' }}
            >
              <Card
                style={{
                  padding: '0',
                }}
                className="card "
              >
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/300/200"
                  style={{ height: '8rem' }}
                />
                <CardBody>
                  <CardTitle
                    tag="h6"
                    className="cardDesc"
                    style={{ fontWeight: 'bolder' }}
                  >
                    ICT 121
                    <FontAwesomeIcon
                      icon={faStar}
                      color="orange"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faEye}
                      color="grey"
                    ></FontAwesomeIcon>
                  </CardTitle>
                  <CardSubtitle className="cardDesc mb-2 text-muted" tag="h6">
                    Author: John Doe
                  </CardSubtitle>
                  <CardText className="cardDesc">
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>

                  <button className="btnOpen">
                    Open material
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ paddingLeft: '10px' }}
                    />
                  </button>
                </CardBody>
              </Card>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={3}
              lg={3}
              className="mb-3"
              style={{ overflow: 'hidden' }}
            >
              <Card
                style={{
                  padding: '0',
                }}
                className="card "
              >
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/300/200"
                  style={{ height: '8rem' }}
                />
                <CardBody>
                  <CardTitle
                    tag="h6"
                    className="cardDesc"
                    style={{ fontWeight: 'bolder' }}
                  >
                    ICT 121
                    <FontAwesomeIcon
                      icon={faStar}
                      color="orange"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faEye}
                      color="grey"
                    ></FontAwesomeIcon>
                  </CardTitle>
                  <CardSubtitle className="cardDesc mb-2 text-muted" tag="h6">
                    Author: John Doe
                  </CardSubtitle>
                  <CardText className="cardDesc">
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>

                  <button className="btnOpen">
                    Open material
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ paddingLeft: '10px' }}
                    />
                  </button>
                </CardBody>
              </Card>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={3}
              lg={3}
              className="mb-3"
              style={{ overflow: 'hidden' }}
            >
              <Card
                style={{
                  padding: '0',
                }}
                className="card "
              >
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/300/200"
                  style={{ height: '8rem' }}
                />
                <CardBody>
                  <CardTitle
                    tag="h6"
                    className="cardDesc"
                    style={{ fontWeight: 'bolder' }}
                  >
                    ICT 121
                    <FontAwesomeIcon
                      icon={faStar}
                      color="orange"
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      icon={faEye}
                      color="grey"
                    ></FontAwesomeIcon>
                  </CardTitle>
                  <CardSubtitle className="cardDesc mb-2 text-muted" tag="h6">
                    Author: John Doe
                  </CardSubtitle>
                  <CardText className="cardDesc">
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>

                  <button className="btnOpen">
                    Open material
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ paddingLeft: '10px' }}
                    />
                  </button>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <div style={{ paddingBottom: '2%' }}>
            <div className="pagination-container">
              <button className="more-btn">MORE</button>
              <button className="next-btn">
                Next <span className="next-arrow">&#8594;</span>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BrowsePage
