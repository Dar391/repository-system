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
import { Pagination } from '@mui/material'

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

  const limitText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text
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

          <Row className="g-4 " style={{ padding: '0px' }}>
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
              <Col>
                <Row style={{ padding: '0% 1% 0% 2%' }}>
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
              <Row style={{ padding: '0 1% 0 3%' }}>
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
                          Author:{' '}
                          <Link style={{ color: 'gray' }}> {item.author}</Link>
                        </CardSubtitle>
                        <CardText className="cardDesc">
                          {limitText(item.description, 90)}
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
                      color: 'rgb(146, 12, 12)',
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
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default MaterialAccessed
