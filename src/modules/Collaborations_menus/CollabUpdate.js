import {
  faArrowsDownToPeople,
  faBookOpenReader,
  faFileCircleCheck,
  faFilePen,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Pagination, TableBody, TableHead } from '@mui/material'
import React, { useState } from 'react'
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
  Row,
  Table,
} from 'react-bootstrap'
import docxFile from '../../assets/journal.docx'
import pptFile from '../../assets/ppt.pptx'
import xlsxFile from '../../assets/excel.xlsx'
import myImage1 from '../../assets/image.jpg'
import myImage2 from '../../assets/image1.jpg'
import myImage3 from '../../assets/image2.jpg'
import MaterialUpdateView from './MaterialUpdateView'

const collaborationRequests = [
  {
    authorName: 'Dr. Alice Smith',
    materialTitle: 'Introduction to Quantum Computing',
    filePath: '../../assets/Prototyping.pdf',
    discipline: 'Computer Science',
    institution: 'University of Technology',
    dateRequested: '2024-11-25',
    imageUrl: myImage1,
    email: 'alice.smith@sample.com',
    description:
      'An introductory guide to the basics of quantum computing, discussing its core principles and future applications.',
    authorNote: 'Updated section: Chapter 2 - Quantum Gate Operations.',
    collaborators: [
      {
        name: 'Dr. Karen Brown',
        imageUrl: myImage1,
      },
      {
        name: 'Mr. James Carter',
        imageUrl: myImage2,
      },
    ],
  },
  {
    authorName: 'Prof. John Doe',
    materialTitle: 'Advanced Algorithms in AI',
    discipline: 'Artificial Intelligence',
    filePath: docxFile,
    institution: 'Global Institute of AI',
    dateRequested: '2024-11-20',
    email: 'john.doe@sample.com',
    imageUrl: myImage2,
    description:
      'Explores advanced algorithms in artificial intelligence with practical applications in machine learning and data optimization.',
    authorNote:
      'Updated section: Chapter 5 - Reinforcement Learning Techniques.',
    collaborators: [
      {
        name: 'Dr. Emily White',
        imageUrl: myImage1,
      },
      {
        name: 'Ms. Laura Green',
        imageUrl: myImage3,
      },
    ],
  },
  {
    authorName: 'Dr. Emily White',
    materialTitle: 'Basics of Data Science',
    filePath: pptFile,
    discipline: 'Data Science',
    institution: 'National Data Academy',
    dateRequested: '2024-11-18',
    email: 'emily.white@sample.com',
    imageUrl: myImage1,
    description:
      'A beginner-friendly material for understanding data science concepts, tools, and techniques.',
    authorNote: 'Updated section: Appendix A - Data Cleaning Techniques.',
    collaborators: [
      {
        name: 'Mr. Michael Brown',
        imageUrl: myImage2,
      },
      {
        name: 'Ms. Sarah Blue',
        imageUrl: myImage3,
      },
    ],
  },
  {
    authorName: 'Mr. Michael Brown',
    materialTitle: 'Cybersecurity Essentials',
    filePath: xlsxFile,
    discipline: 'Cybersecurity',
    institution: 'SecureTech University',
    dateRequested: '2024-11-15',
    email: 'michael.brown@sample.com',
    imageUrl: myImage3,
    description:
      'A foundational material covering key cybersecurity principles and practices to protect systems from threats.',
    authorNote:
      'Updated section: Chapter 3 - Phishing Attack Prevention Strategies.',
    collaborators: [
      {
        name: 'Ms. Rachel Gray',
        imageUrl: myImage1,
      },
      {
        name: 'Prof. Henry Gold',
        imageUrl: myImage2,
      },
    ],
  },
]

const formatDate = (dateString) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const date = new Date(dateString) // Parse the date string
  const month = months[date.getMonth()] // Get the month name
  const day = date.getDate() // Get the day of the month
  const year = date.getFullYear() // Get the year

  return `${month} ${day}, ${year}` // Format the date
}

const CollabUpdate = () => {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('dateRequested')
  const [currentPage, setCurrentPage] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [actionType, setActionType] = useState('')
  const [selectedData, setSelectedData] = useState(null)

  // Handle search input change
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  // Handle sorting change
  const handleSortChange = (value) => {
    setSortBy(value)
  }

  const handleBadgeClick = (type, data) => {
    setActionType(type)
    setSelectedData(data)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setActionType('')
    setSelectedData(null)
  }

  // Pagination logic
  const handlePageClick = (event) => {
    setCurrentPage(event.selected)
  }

  const ITEMS_PER_PAGE = 6
  const [page, setPage] = useState(1)
  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentData = collaborationRequests.slice(startIndex, endIndex)

  return (
    <Container fluid>
      <Row className="d-flex">
        <Col md="12" xl="10" style={{ paddingBottom: '3%' }}>
          <Card
            style={{
              minHeight: '510px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardHeader
              className="p-3 d-flex justify-content-between
             align-items-center"
            >
              <h5 className="mb-0 d-flex align-items-center">
                <FontAwesomeIcon icon={faFilePen} className="me-2" />
                Collaborated Material Updates
              </h5>

              <InputGroup className="w-50 mx-3">
                <FormControl
                  placeholder="Search by Author or Material"
                  value={search}
                  onChange={handleSearch}
                />
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup>

              <DropdownButton
                id="dropdown-sort-by"
                title={`Sort By: ${
                  sortBy === 'authorName' ? 'Author' : 'Date'
                }`}
                onSelect={handleSortChange}
              >
                <Dropdown.Item eventKey="authorName">Author Name</Dropdown.Item>
                <Dropdown.Item eventKey="dateRequested">
                  Date Updated
                </Dropdown.Item>
              </DropdownButton>
            </CardHeader>

            <CardBody
              style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
            >
              <div
                style={{
                  maxHeight: '450px',
                  overflowY: 'scroll',
                  marginBottom: '1rem',
                }}
              >
                <Table className="mb-0">
                  <TableHead>
                    <tr style={{ textAlign: 'center' }}>
                      <th scope="col">Details</th>
                      <th scope="col">Insitution</th>
                      <th scope="col">Date Updated</th>
                      <th scope="col">Action</th>
                    </tr>
                  </TableHead>

                  <TableBody>
                    {currentData.map((material, index) => (
                      <tr className="fw-formal" key={index}>
                        <th>
                          <div className="d-flex align-items-center">
                            <img
                              src={material.imageUrl}
                              alt="profile"
                              style={{ width: '45px', height: '45px' }}
                              className="shadow-1-strong rounded-circle"
                            />

                            <div className="ms-3">
                              <p className="fw-bold mb-0">
                                {material.authorName}
                              </p>
                              <p
                                className="mb-0"
                                style={{ color: 'rgb(146, 12, 12)' }}
                              >
                                {material.materialTitle}
                              </p>
                              <p
                                className=" text-muted mb-0"
                                style={{
                                  fontStyle: 'italic',
                                  fontSize: '10px',
                                }}
                              >
                                {material.discipline}
                              </p>
                            </div>
                          </div>
                        </th>

                        <td className="align-middle">
                          <span>{material.institution}</span>
                        </td>

                        <td className="align-middle">
                          <span>{formatDate(material.dateRequested)}</span>
                        </td>

                        <td className="align-middle">
                          <h6 className="mb-0 d-flex justify-content-center">
                            <Badge
                              className="mx-2"
                              bg="success"
                              onClick={() => handleBadgeClick('View', material)}
                              style={{ cursor: 'pointer' }}
                            >
                              View
                            </Badge>
                            <Badge
                              className="mx-2"
                              bg="primary"
                              style={{ cursor: 'pointer' }}
                              onClick={() =>
                                handleBadgeClick('Accept', material)
                              }
                            >
                              Accept
                            </Badge>
                            <Badge
                              className="mx-2"
                              bg="danger"
                              style={{ cursor: 'pointer' }}
                              onClick={() =>
                                handleBadgeClick('Reject', material)
                              }
                            >
                              Reject
                            </Badge>
                          </h6>
                        </td>
                      </tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardBody>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '2%',
              }}
            >
              <Pagination
                count={Math.ceil(collaborationRequests.length / ITEMS_PER_PAGE)}
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
                  paddingBottom: '2%',
                }}
              />
            </div>
          </Card>
        </Col>

        <Col className="align-items-start">
          <Row className="responsive-layout mb-3">
            <Card className="shadow-sm card-width">
              <CardBody className="d-flex align-items-center justify-content-between">
                <div>
                  <FontAwesomeIcon
                    icon={faBookOpenReader}
                    style={{ color: '#4caf50' }}
                    className="me-3"
                    size="lg"
                  />
                </div>
                <div className="d-flex flex-column align-items-end">
                  <h5 className="mb-0">18</h5>
                  <p style={{ fontSize: '12px' }}> Total updates</p>
                </div>
              </CardBody>
            </Card>

            <Card className="shadow-sm card-width">
              <CardBody className="d-flex align-items-center justify-content-between">
                <div>
                  <FontAwesomeIcon
                    style={{ color: '#2196f3' }}
                    icon={faFileCircleCheck}
                    className="me-3 "
                    size="lg"
                  />
                </div>
                <div className="d-flex flex-column align-items-end">
                  <h5 className="mb-0">18</h5>
                  <p style={{ fontSize: '12px' }}> Accepted</p>
                </div>
              </CardBody>
            </Card>

            <Card className="shadow-sm card-width">
              <CardBody className="d-flex align-items-center justify-content-between">
                <div>
                  <FontAwesomeIcon
                    icon={faArrowsDownToPeople}
                    style={{ color: '#f44336' }}
                    className="me-3 "
                    size="lg"
                  />
                </div>
                <div className="d-flex flex-column align-items-end">
                  <h5 className="mb-0">18</h5>
                  <p style={{ fontSize: '12px' }}> Rejected</p>
                </div>
              </CardBody>
            </Card>
          </Row>
        </Col>
      </Row>

      {showModal && (
        <MaterialUpdateView
          show={showModal}
          handleClose={handleCloseModal}
          actionType={actionType}
          materialData={selectedData}
        />
      )}
    </Container>
  )
}

export default CollabUpdate
