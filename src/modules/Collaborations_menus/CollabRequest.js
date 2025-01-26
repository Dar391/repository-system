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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faPersonCircleQuestion,
  faSearch,
  faTimesCircle,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { Pagination, TableBody, TableHead } from '@mui/material'
import '../../styles/collaboration.css'
import MaterialRequestModal from './MaterialRequestModal'
import pdfFile from '../../assets/Prototyping.pdf'
import myImage from '../../assets/image.jpg'

const collaborationRequests = [
  {
    authorName: 'Dr. Alice Smith',
    materialTitle: 'Introduction to Quantum Computing',
    discipline: 'Computer Science',
    institution: 'University of Technology',
    dateRequested: '2024-11-25',
    imageUrl: myImage,
    email: 'alice.smith@sample.com',
    filePath: pdfFile,
    description:
      'An entry-level guide exploring the basics of quantum computing, its principles, and potential applications in solving complex computational problems.',
    coAuthors: [
      {
        name: 'Dr. Brian Adams',
        imageUrl: myImage,
      },
      {
        name: 'Dr. Catherine Lee',
        imageUrl: myImage,
      },
    ],
  },
  {
    authorName: 'Prof. John Doe',
    materialTitle: 'Advanced Algorithms in AI',
    discipline: 'Artificial Intelligence',
    institution: 'Global Institute of AI',
    dateRequested: '2024-11-20',
    email: 'john.doe@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp',
    description:
      'A comprehensive discussion on cutting-edge algorithms powering artificial intelligence, with practical use cases in machine learning and optimization.',
    coAuthors: [
      {
        name: 'Dr. Susan Clark',
        imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-7.webp',
      },
    ],
  },
  {
    authorName: 'Dr. Emily White',
    materialTitle: 'Basics of Data Science',
    discipline: 'Data Science',
    institution: 'National Data Academy',
    dateRequested: '2024-11-18',
    email: 'emily.white@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp',
    description:
      'An introductory material designed to help beginners understand the fundamental concepts and tools used in data science, including Python and R.',
    coAuthors: [
      {
        name: 'Mr. Thomas Brown',
        imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp',
      },
    ],
  },
  {
    authorName: 'Ms. Laura Green',
    materialTitle: 'Web Development for Beginners',
    discipline: 'Web Development',
    institution: 'Institute of Creative Technologies',
    dateRequested: '2024-11-12',
    email: 'laura.green@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp',
    description:
      'A beginner-friendly resource on web development, focusing on HTML, CSS, and JavaScript, aimed at creating responsive and interactive websites.',
    coAuthors: [
      {
        name: 'Mr. Kevin Parker',
        imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp',
      },
      {
        name: 'Ms. Olivia Brown',
        imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp',
      },
    ],
  },
  {
    authorName: 'Dr. Rachel Gray',
    materialTitle: 'Ethical Hacking and Penetration Testing',
    discipline: 'Cybersecurity',
    institution: 'TechSecure University',
    dateRequested: '2024-11-03',
    email: 'rachel.gray@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
    description:
      'A specialized resource on ethical hacking methodologies and penetration testing techniques to identify and mitigate vulnerabilities in systems.',
    coAuthors: [
      {
        name: 'Prof. Samuel White',
        imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp',
      },
    ],
  },
  {
    authorName: 'Dr. Robert Black',
    materialTitle: 'Cloud Computing Fundamentals',
    discipline: 'Cloud Computing',
    institution: 'CloudTech Institute',
    dateRequested: '2024-11-10',
    email: 'robert.black@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp',
    description:
      'An overview of cloud computing principles, including cloud services, deployment models, and key providers like AWS and Azure.',
    coAuthors: [
      {
        name: 'Dr. Margaret Grey',
        imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp',
      },
    ],
  },
  {
    authorName: 'Prof. Henry Gold',
    materialTitle: 'Foundations of Blockchain Technology',
    discipline: 'Blockchain',
    institution: 'Blockchain Academy',
    dateRequested: '2024-11-01',
    email: 'henry.gold@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
    description:
      'An introductory guide to blockchain technology, its architecture, consensus mechanisms, and applications in industries like finance and supply chain.',
    coAuthors: [
      {
        name: 'Mr. Ethan Stone',
        imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp',
      },
      {
        name: 'Ms. Sophia Green',
        imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp',
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

const CollabRequest = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('dateRequested')
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
            <CardHeader className="p-3 d-flex justify-content-between align-items-center">
              <h5 className="mb-0 d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faPersonCircleQuestion}
                  className="me-2"
                />
                Collaboration Request
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
                  Date Requested
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
                      <th scope="col">Institution</th>
                      <th scope="col">Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </TableHead>
                  <TableBody>
                    {currentData.map((request, index) => (
                      <tr className="fw-formal" key={index}>
                        <th>
                          <div className="d-flex align-items-center">
                            <img
                              src={request.imageUrl}
                              alt="profile"
                              style={{ width: '45px', height: '45px' }}
                              className="shadow-1-strong rounded-circle"
                            />
                            <div className="ms-3">
                              <p className="fw-bold mb-0">
                                {request.authorName}
                              </p>
                              <p
                                className="mb-0"
                                style={{ color: 'rgb(146, 12, 12)' }}
                              >
                                {request.materialTitle}
                              </p>
                              <p
                                className=" text-muted mb-0"
                                style={{
                                  fontStyle: 'italic',
                                  fontSize: '10px',
                                }}
                              >
                                {request.discipline}
                              </p>
                            </div>
                          </div>
                        </th>

                        <td className="align-middle">
                          <span>{request.institution}</span>
                        </td>

                        <td className="align-middle">
                          <span>{formatDate(request.dateRequested)}</span>
                        </td>

                        <td className="align-middle">
                          <h6 className="mb-0 d-flex justify-content-center">
                            <Badge
                              className="mx-2"
                              bg="success"
                              onClick={() => handleBadgeClick('View', request)}
                              style={{ cursor: 'pointer' }}
                            >
                              View
                            </Badge>
                            <Badge
                              className="mx-2"
                              bg="primary"
                              style={{ cursor: 'pointer' }}
                              onClick={() =>
                                handleBadgeClick('Accept', request)
                              }
                            >
                              Accept
                            </Badge>
                            <Badge
                              className="mx-2"
                              bg="danger"
                              style={{ cursor: 'pointer' }}
                              onClick={() =>
                                handleBadgeClick('Reject', request)
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
              spacing={2}
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
                    icon={faUsers}
                    className="me-3 text-primary"
                    size="lg"
                  />
                </div>
                <div className="d-flex flex-column align-items-end">
                  <h5 className="mb-0">18</h5>
                  <p style={{ fontSize: '12px' }}> Total request</p>
                </div>
              </CardBody>
            </Card>

            <Card className="shadow-sm card-width">
              <CardBody className="d-flex align-items-center justify-content-between">
                <div>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="me-3 text-success"
                    size="lg"
                  />
                </div>
                <div className="d-flex flex-column align-items-end">
                  <h5 className="mb-0"> 2</h5>
                  <p style={{ fontSize: '12px' }}> Accepted</p>
                </div>
              </CardBody>
            </Card>

            <Card className="shadow-sm card-width">
              <CardBody className="d-flex align-items-center justify-content-between">
                <div>
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    className="me-3 text-danger"
                    size="lg"
                  />
                </div>
                <div className="d-flex flex-column align-items-end">
                  <h5 className="mb-0"> 4</h5>
                  <p style={{ fontSize: '12px' }}> Rejected </p>
                </div>
              </CardBody>
            </Card>
          </Row>
        </Col>

        <MaterialRequestModal
          show={showModal}
          handleClose={handleCloseModal}
          actionType={actionType}
          collaborationData={selectedData}
        />
      </Row>
    </Container>
  )
}

export default CollabRequest
