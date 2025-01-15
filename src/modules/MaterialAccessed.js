import React, { useState } from 'react'
import '../styles/accessedMaterials.css'
import {
  faArrowRight,
  faSearch,
  faStar,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import materialData from '../data/materialData'
import { Link, useNavigate } from 'react-router-dom'
import ModalListMonthlyAccessed from './ModalListMonthlyAccessed'
import ModalDailyAccessed from './ModalDailyAccessed'

const MaterialAccessed = () => {
  const navigate = useNavigate()
  const [activeOption, setActiveOption] = useState('All materials')
  const [hoveredOption, setHoveredOption] = useState(null)
  const [showModal1, setShowModal1] = useState(false)
  const [showModal2, setShowModal2] = useState(false)

  const handleShow = () => setShowModal1(true)
  const handleClose = () => setShowModal1(false)

  const handleShow1 = () => setShowModal2(true)
  const handleClose1 = () => setShowModal2(false)

  const handleSelect = (selectedItem) => {
    setActiveOption(selectedItem)
  }

  const handleMouseEnter = (item) => {
    setHoveredOption(item)
  }

  const handleMouseLeave = () => {
    setHoveredOption(null)
  }

  const options = ['All materials', 'Most viewed', 'Highest rated', 'Newest']

  const handleClick = () => {
    navigate('/open-material')
  }

  return (
    <Container fluid className="accessedMaterials">
      <Row className="section2" style={{ overflow: 'hidden' }}>
        <Col>
          <Row className="heading">
            <Col className="d-flex flex-column align-items-start">
              {' '}
              <p className="headings3">Accessed materials</p>
              <p className="subtitles1">
                {' '}
                Use this page to review past resources or pick up where you left
                off in your studies.
              </p>
            </Col>
            <Col className="searchHeader d-flex flex-column align-items-end">
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

              <div
                className=" d-flex align-items-center mb-2"
                style={{ paddingTop: '1%' }}
              >
                <Link
                  to="/advanceSearch"
                  className="Link ms-2"
                  style={{ color: 'whitesmoke' }}
                >
                  Advance Material Search
                </Link>
              </div>
            </Col>
          </Row>

          <Row style={{ alignItems: 'center', padding: '1%' }}>
            <Col>
              <Row style={{ padding: '0% 2% 0% 2%' }}>
                <Col className="d-flex align-items-center">
                  <p className="mb-0 me-2"> Sort by:</p>
                  <DropdownButton
                    id="dropdown-item-button"
                    title={activeOption}
                    className="custom-dropdown"
                    variant="secondary"
                  >
                    {options.map((option, index) => (
                      <Dropdown.Item
                        className="menu-custom"
                        key={index}
                        as="button"
                        onClick={() => handleSelect(option)}
                        onMouseEnter={() => handleMouseEnter(option)}
                        onMouseLeave={handleMouseLeave}
                        active={activeOption === option}
                        style={{
                          backgroundColor:
                            hoveredOption === option || activeOption === option
                              ? '#0377fc'
                              : 'transparent', // Change color on hover
                          color:
                            hoveredOption === option || activeOption === option
                              ? '#fff' // White text color for better contrast
                              : '#000',
                          width: '200px',
                          padding: '10px 20px',
                        }}
                      >
                        {option}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </Col>
                <Col>
                  <div className="d-flex justify-content-end align-items-center mb-2">
                    <p
                      style={{ color: 'gray', marginBottom: '0%' }}
                      className="mb-0"
                    >
                      {' '}
                      You have accessed 25 materials this month{' '}
                    </p>
                    <Button variant="link" onClick={handleShow}>
                      See list{' '}
                    </Button>
                  </div>
                  <div className="d-flex justify-content-end align-items-center ">
                    <p style={{ color: 'gray', marginBottom: '0%' }}>
                      Last accesssed on:
                    </p>
                    <Button variant="link" onClick={handleShow1}>
                      October 23, 2024
                    </Button>
                  </div>
                  <ModalListMonthlyAccessed
                    show={showModal1}
                    handleClose={handleClose}
                  />

                  <ModalDailyAccessed
                    show={showModal2}
                    handleClose={handleClose1}
                  />
                </Col>
              </Row>
            </Col>
            <Row style={{ paddingTop: '1%' }}>
              {materialData.map((item, index) => (
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

                    <div className="icon-group">
                      <div className="icon-item">
                        <FontAwesomeIcon icon={faStar} color="orange" />
                        <span> {item.stars}</span>
                      </div>
                      <div className="icon-item">
                        <FontAwesomeIcon icon={faEye} color="grey" />{' '}
                        <span> {item.reads}</span>
                      </div>
                    </div>

                    <CardBody>
                      <CardTitle
                        tag="h6"
                        className="cardDesc"
                        style={{ fontWeight: 'bolder' }}
                      >
                        ICT 121
                      </CardTitle>
                      <CardSubtitle
                        className="cardDesc mb-2 text-muted"
                        tag="h6"
                      >
                        Author: John Doe
                      </CardSubtitle>
                      <CardText className="cardDesc">
                        Some quick example text to build on the card title and
                        make up the bulk of the card‘s content.
                      </CardText>

                      <button className="btnOpen" onClick={handleClick}>
                        Open material
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{ paddingLeft: '10px' }}
                        />
                      </button>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
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

export default MaterialAccessed
