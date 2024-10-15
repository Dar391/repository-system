import React from 'react'
import '../styles/accessedMaterials.css'
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons'
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

const accessedMaterials = () => {
  return (
    <Container fluid className="accessedMaterials">
      <Row className="section2" style={{ overflow: 'hidden' }}>
        <Col className="text-center" style={{ paddingTop: '2%' }}>
          <p className="headings3">Accessed materials</p>

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
              </div>
            </div>
          </div>

          <Row style={{ alignItems: 'center' }}>
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
                className="card2 "
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
              className="mb-3"
              style={{ overflow: 'hidden' }}
            >
              <Card style={{ padding: '0' }} className="card2 ">
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
              className="mb-3"
              style={{ overflow: 'hidden' }}
            >
              <Card style={{ padding: '0' }} className="card2 ">
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
              className="mb-3"
              style={{ overflow: 'hidden' }}
            >
              <Card style={{ padding: '0' }} className="card2 ">
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
              className="mb-3"
              style={{ overflow: 'hidden' }}
            >
              <Card style={{ padding: '0' }} className="card2 ">
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
              className="mb-3"
              style={{ overflow: 'hidden' }}
            >
              <Card style={{ padding: '0' }} className="card2 ">
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
              className="mb-3"
              style={{ overflow: 'hidden' }}
            >
              <Card style={{ padding: '0' }} className="card2 ">
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
              className="mb-3"
              style={{ overflow: 'hidden' }}
            >
              <Card style={{ padding: '0' }} className="card2 ">
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
            <div className="pagination-container ">
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

export default accessedMaterials
