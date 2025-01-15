import React, { useState } from 'react'
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import '../styles/myMaterials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faEye,
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
  return (
    <Container fluid className="myMaterials">
      <Row className="sections" style={{ overflow: 'hidden' }}>
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
                  Organize and access your learning materials conveniently to
                  support your educational journey and personal growth.
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

                  <Col className="text-end" style={{ paddingRight: '2%' }}>
                    <button className="btnAdd" onClick={() => handleAddClick()}>
                      Add material
                    </button>
                  </Col>
                </Row>
                <Row style={{ padding: '2%' }}>
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
                            Author: John Doe
                          </CardSubtitle>
                          <CardText className="cardDesc">
                            Some quick example text to build on the card title
                            and make up the bulk of the card‘s content.
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

            <div style={{ paddingBottom: '2%' }}>
              <div className="pagination-container">
                <button className="more-btn">MORE</button>
                <button className="next-btn">
                  Next <span className="next-arrow">&#8594;</span>
                </button>
              </div>
            </div>
          </Col>
        </Col>
      </Row>

      {showModal && (
        <ModalAddMaterials show={showModal} handleClose={handleCloseModal} />
      )}
    </Container>
  )
}

export default AuthoredMaterials
