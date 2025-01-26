import React, { useState } from 'react'
import '../styles/browse.css'
import {
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
import {
  faArrowRight,
  faEye,
  faSearch,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import materialData from '../data/materialData'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ModalAddMaterials from '../modules/ModalAddMaterials'
import { Pagination, Stack } from '@mui/material'

const BrowsePage = () => {
  const navigate = useNavigate()
  const limitText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text
  }

  const [showModal, setShowModal] = useState(false)

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleAddClick = () => {
    setShowModal(true)
  }
  const materialTypes = ['.docx', '.ppt', '.xlxs', '.pdf']

  const disciplines = [
    'Computer Science',
    'Information Technology',
    'Education',
    'Engineering',
    'Mathematics',
    'Physics',
    'Biology',
    'Chemistry',
    'Environmental Science',
    'Business Administration',
    'Psychology',
    'Sociology',
    'Political Science',
    'History',
    'Philosophy',
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
    'University of Chicago',
    'Princeton University',
    'Yale University',
    'Columbia University',
    'University of California, Berkeley',
    'University of Toronto',
    'National University of Singapore (NUS)',
    'University of Tokyo',
    'Peking University',
    'University of Melbourne',
    'University of Hong Kong',
    'University of the Philippines',
    'Australian National University (ANU)',
    'London School of Economics and Political Science (LSE)',
  ]

  const [activeOption, setActiveOption] = useState('All materials')
  const [hoveredOption, setHoveredOption] = useState(null)

  const handleSelect = (selectedItem) => {
    setActiveOption(selectedItem)
  }

  const handleMouseEnter = (item) => {
    setHoveredOption(item)
  }

  const handleMouseLeave = () => {
    setHoveredOption(null)
  }

  const options = [
    'All materials',
    'Author(A-Z)',
    'Author(Z-A)',
    'Title(A-Z)',
    'Title(Z-A)',
    'Material Type(A-Z)',
    'Material Type(Z-A)',
  ]

  const handleClick = () => {
    navigate('/open-material') // Navigate to OpenMaterial.js
  }

  const ITEMS_PER_PAGE = 16
  const [page, setPage] = useState(1)
  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentData = materialData.slice(startIndex, endIndex)

  return (
    <Container fluid className="BrowsePage">
      <Row>
        <Col>
          <Row className="secondHeader">
            <Col className="titleHeader">
              <div style={{ paddingTop: '2%' }}>
                <p className="headingBrowse">KahibawHub Materials</p>
                <p className="subheading1">
                  Explore KahibawHub's curated selection of educational
                  resources to broaden your horizons
                </p>
              </div>
            </Col>

            <Col className="searchHeader d-flex flex-column align-items-end">
              <div className="input-group search-wrapper mb-2">
                <input
                  className="search-input form-control border-end-1 border "
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
                <p className="mb-0">
                  Want to share your learning materials? Go to {'  '}
                </p>
                <Link
                  onClick={handleAddClick}
                  className="Link ms-2"
                  role="button"
                >
                  Add material
                </Link>
              </div>
            </Col>
          </Row>

          <Row className="section_2">
            <Col className="mainCustomSearch" style={{ padding: '1%' }}>
              <div className="col-customSearch">
                <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                  {' '}
                  Show results for
                </p>
                <div
                  className="Link-column"
                  style={{ fontSize: '14px', color: 'black' }}
                >
                  <Link style={{ color: 'black' }}>Lesson</Link>
                  <Link style={{ color: 'black' }}>Modules</Link>
                  <Link style={{ color: 'black' }}>Syllabus</Link>
                  <Link style={{ color: 'black' }}>Assignments</Link>
                  <Link style={{ color: 'black' }}>Activity</Link>
                  <Link style={{ color: 'black' }}>Quizzes</Link>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontSize: '20px',
                    fontWeight: 'bolder',
                    paddingTop: '2%',
                  }}
                >
                  Filter by
                </p>

                <div>
                  <p style={{ fontWeight: 'bold' }}>Discipline</p>
                  <div className="filterby-styles">
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
                        <label
                          htmlFor="discipline-it"
                          style={{ marginLeft: '10px' }}
                        >
                          {data}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="filter-title">
                  <p style={{ fontWeight: 'bold' }}>Intitution</p>
                  <div className="filterby-styles">
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
                        <label
                          htmlFor="discipline-it"
                          style={{ marginLeft: '10px', fontSize: '14px' }}
                        >
                          {data}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="filter-title">
                  <p style={{ fontWeight: 'bold' }}>Technical type</p>

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
                      <label
                        htmlFor="discipline-it"
                        style={{ marginLeft: '10px', fontSize: '14px' }}
                      >
                        {data}
                      </label>
                    </div>
                  ))}
                </div>

                <div>
                  <p style={{ fontWeight: 'bold' }}>User type</p>

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
              <Row
                className="page-sort d-flex justify-content-between"
                style={{ paddingTop: '2%' }}
              >
                <Col>
                  <p style={{ paddingTop: '1%' }}>
                    1-24 of 105 results of KahibawHub Materials
                  </p>
                </Col>
                <Col
                  className="text-end d-flex align-items-center justify-content-end"
                  style={{ paddingBottom: '2%' }}
                >
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
                              : '#000', // Black text when not active/hovered
                        }}
                      >
                        {option}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </Col>
              </Row>
              <Row className="g-4 p-3">
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
                      className="card h-100"
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

                      <CardBody className="d-flex flex-column">
                        <CardTitle
                          tag="h6"
                          style={{ fontWeight: 'bolder', fontSize: '18px' }}
                        >
                          {item.title}
                        </CardTitle>
                        <CardSubtitle
                          className="cardDesc mb-2 text-muted"
                          tag="h6"
                        >
                          Author:{' '}
                          <Link style={{ color: 'gray' }}> {item.author}</Link>
                        </CardSubtitle>
                        <CardText className="cardDesc">
                          {limitText(item.description, 100)}
                        </CardText>

                        <div className="d-flex justify-content-start mt-auto">
                          <button className="btnOpen " onClick={handleClick}>
                            Open material
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              style={{ paddingLeft: '10px' }}
                            />
                          </button>
                        </div>
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
                <Stack spacing={2}>
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
                </Stack>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {showModal && (
        <ModalAddMaterials show={showModal} handleClose={handleCloseModal} />
      )}
    </Container>
  )
}

export default BrowsePage
