import React, { useState } from 'react'
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import '../styles/myMaterials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faEye,
  faPlus,
  faSearch,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'react-bootstrap'
import materialData from '../data/materialData'
import { Link, useNavigate } from 'react-router-dom'
import ModalAddMaterials from './ModalAddMaterials'
import { Fab, Pagination } from '@mui/material'

const AuthoredMaterials = () => {
  const navigate = useNavigate()
  const [activeOption, setActiveOption] = useState('All materials')
  const [hoveredOption, setHoveredOption] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false)
  }

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

  const handleAddClick = () => {
    setShowModal(true)
  }

  const handleClick = () => {
    navigate('/open-material')
  }

  const ITEMS_PER_PAGE = 16
  const [page, setPage] = useState(1)
  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentData = materialData.slice(startIndex, endIndex)

  const materialTypes = ['.docx', '.ppt', '.xlxs']

  const disciplines = [
    'Computer Science',
    'Information Technology',
    'Education',
    'Economics',
    'Nursing',
    'Medicine',
    'Law',
    'Architecture',
  ]

  const schools = [
    'Harvard University',
    'Massachusetts Institute of Technology (MIT)',
    'Stanford University',
    'University of Oxford',
    'University of Cambridge',
    'California Institute of Technology (Caltech)',
  ]

  return (
    <Container fluid className="myMaterials">
      <Row>
        <Col>
          <Row className="materialHeader gap-4">
            <Col
              className="text-start"
              style={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <div style={{ paddingTop: '1%' }}>
                <p className="headings2" style={{ marginBottom: '0' }}>
                  Authored Materials
                </p>
                <p className="subtitles1">
                  Organize and access your learning mterials conveniently to
                  support your educational journey and personal growth
                </p>
              </div>
            </Col>
            <Col className=" searchHeader d-flex flex-column align-items-end">
              <div className="input-group search-wrapper mb-2">
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
              <div className="subheading1 d-flex align-items-center mb-2">
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
          <Row style={{ overflow: 'hidden' }}>
            <Col className="authoredFilterCol">
              <div>
                <div
                  className="filterDiv"
                  style={{ fontSize: '20px', fontWeight: 'bolder' }}
                >
                  <p>Filter by</p>
                </div>

                <div className="Link-column">
                  <p className="filterSubHeader">Material type</p>
                  <Link style={{ color: 'black', fontSize: '14px' }}>
                    Lesson
                  </Link>{' '}
                  <br />
                  <Link style={{ color: 'black', fontSize: '14px' }}>
                    Modules
                  </Link>
                </div>

                <div>
                  <p className="filterSubHeader">Discipline</p>
                  <div className="makeFilterScroll">
                    {disciplines.map((data, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '10px',
                          fontSize: '14px',
                        }}
                      >
                        <input type="checkbox" id="discipline-it" />
                        <label className="filterData">{data}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="filterSubHeader"> Institution</p>
                  <div className="makeFilterScroll">
                    {schools.map((data, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '10px',
                        }}
                      >
                        <input type="checkbox" id="discipline-it" />
                        <label className="filterData">{data}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="filterSubHeader"> Technical type</p>
                  <div>
                    {materialTypes.map((data, index) => (
                      <div
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '10px',
                        }}
                      >
                        <input type="checkbox" id="discipline-it" />
                        <label className="filterData">{data}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="filterSubHeader"> User type</p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '10px',
                    }}
                  >
                    <input type="checkbox" id="discipline-it" />
                    <label
                      htmlFor="discipline-it"
                      style={{ marginLeft: '10px', fontSize: '14px' }}
                    >
                      Student
                    </label>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',

                      fontSize: '14px',
                    }}
                  >
                    <input type="checkbox" id="discipline-it" />
                    <label
                      htmlFor="discipline-it"
                      style={{ marginLeft: '10px' }}
                    >
                      Teacher
                    </label>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <Col className="materialList">
                <Row className="g-4 " style={{ padding: '0px' }}>
                  <Col>
                    <Row style={{ padding: '0% 1% 0% 2%' }}>
                      <Col className="d-flex align-items-center">
                        <p className="mb-0 me-2" style={{ fontSize: '15px' }}>
                          {' '}
                          Sort by:
                        </p>
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
                                  hoveredOption === option ||
                                  activeOption === option
                                    ? '#0377fc'
                                    : 'transparent', // Change color on hover
                                color:
                                  hoveredOption === option ||
                                  activeOption === option
                                    ? '#fff' // White text color for better contrast
                                    : '#000',
                                width: '200px',
                                padding: '10px 20px',
                                fontSize: '14px',
                              }}
                            >
                              {option}
                            </Dropdown.Item>
                          ))}
                        </DropdownButton>
                      </Col>
                    </Row>
                    <Row style={{ padding: '2%' }}>
                      {currentData.map((item, index) => (
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
                                {item.title}
                              </CardTitle>
                              <CardSubtitle
                                className="cardDesc mb-2 text-muted"
                                tag="h6"
                              >
                                Primary Author:{' '}
                                <Link style={{ color: 'gray' }}>John Doe</Link>
                              </CardSubtitle>
                              <CardText
                                className="cardDesc"
                                style={{ backgroundColor: 'transparent' }}
                              >
                                Some quick example text to build on the card
                                title and make up the bulk of the card‘s
                                content.
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
                  </Col>
                </Row>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: '2%',
                  }}
                >
                  <Pagination
                    count={Math.ceil(materialData.length / ITEMS_PER_PAGE)}
                    page={page}
                    onChange={(_, value) => setPage(value)}
                    sx={{
                      '& .MuiPaginationItem-root': {
                        color: 'maroon',
                      }, // Text color
                      '& .Mui-selected': {
                        backgroundColor: 'rgb(146, 12, 12)',
                        color: 'white',
                      }, // Selected page color
                      '& .MuiPaginationItem-root:hover': {
                        backgroundColor: 'rgba(146, 12, 12, 0.2)',
                      }, // Hover effect
                    }}
                  />

                  <Fab
                    variant="extended"
                    onClick={handleAddClick}
                    className="materialBTN"
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = 'rgb(200, 0, 0)')
                    } // Lighter red on hover
                    // Reset to original color
                    style={{
                      position: 'fixed',
                      bottom: '80px',
                      right: '45px',
                      backgroundColor: 'rgb(146, 12, 12)',
                      color: '#fff',
                      border: 'none',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      zIndex: 1000,
                      gap: '5px',
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Fab>
                </div>
              </Col>
            </Col>
          </Row>

          {showModal && (
            <ModalAddMaterials
              show={showModal}
              handleClose={handleCloseModal}
            />
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default AuthoredMaterials
