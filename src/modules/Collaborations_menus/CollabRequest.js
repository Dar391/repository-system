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
import { TableBody, TableHead } from '@mui/material'
import ReactPaginate from 'react-paginate'
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
  },
  {
    authorName: 'Prof. John Doe',
    materialTitle: 'Advanced Algorithms in AI',
    discipline: 'Artificial Intelligence',
    institution: 'Global Institute of AI',
    dateRequested: '2024-11-20',
    email: 'alice.smith@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp',
    description:
      'A comprehensive discussion on cutting-edge algorithms powering artificial intelligence, with practical use cases in machine learning and optimization.',
  },
  {
    authorName: 'Dr. Emily White',
    materialTitle: 'Basics of Data Science',
    discipline: 'Data Science',
    institution: 'National Data Academy',
    dateRequested: '2024-11-18',
    email: 'alice.smith@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp',
    description:
      'An introductory material designed to help beginners understand the fundamental concepts and tools used in data science, including Python and R.',
  },
  {
    authorName: 'Mr. Michael Brown',
    materialTitle: 'Cybersecurity Essentials',
    discipline: 'Cybersecurity',
    institution: 'SecureTech University',
    dateRequested: '2024-11-15',
    email: 'alice.smith@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp',
    description:
      'A foundational course on cybersecurity concepts, best practices, and threat prevention techniques essential for protecting digital infrastructure.',
  },
  {
    authorName: 'Ms. Laura Green',
    materialTitle: 'Web Development for Beginners',
    discipline: 'Web Development',
    institution: 'Institute of Creative Technologies',
    dateRequested: '2024-11-12',
    email: 'alice.smith@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp',
    description:
      'A beginner-friendly resource on web development, focusing on HTML, CSS, and JavaScript, aimed at creating responsive and interactive websites.',
  },
  {
    authorName: 'Dr. Robert Black',
    materialTitle: 'Cloud Computing Fundamentals',
    discipline: 'Cloud Computing',
    institution: 'CloudTech Institute',
    dateRequested: '2024-11-10',
    email: 'alice.smith@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp',
    description:
      'An overview of cloud computing principles, including cloud services, deployment models, and key providers like AWS and Azure.',
  },
  {
    authorName: 'Prof. Sarah Blue',
    materialTitle: 'Mobile Application Development',
    discipline: 'Software Development',
    institution: 'Global IT College',
    dateRequested: '2024-11-08',
    email: 'alice.smith@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp',
    description:
      'An in-depth material on creating mobile applications using modern frameworks, focusing on both Android and iOS platforms.',
  },
  {
    authorName: 'Mr. David Clark',
    materialTitle: 'Network Administration Basics',
    discipline: 'Networking',
    institution: 'Networking Academy',
    dateRequested: '2024-11-05',
    email: 'alice.smith@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp',
    description:
      'A primer on network administration, covering LAN/WAN configuration, troubleshooting, and maintenance of network hardware and software.',
  },
  {
    authorName: 'Dr. Rachel Gray',
    materialTitle: 'Ethical Hacking and Penetration Testing',
    discipline: 'Cybersecurity',
    institution: 'TechSecure University',
    dateRequested: '2024-11-03',
    email: 'alice.smith@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
    description:
      'A specialized resource on ethical hacking methodologies and penetration testing techniques to identify and mitigate vulnerabilities in systems.',
  },
  {
    authorName: 'Prof. Henry Gold',
    materialTitle: 'Foundations of Blockchain Technology',
    discipline: 'Blockchain',
    institution: 'Blockchain Academy',
    dateRequested: '2024-11-01',
    email: 'alice.smith@sample.com',
    imageUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
    description:
      'An introductory guide to blockchain technology, its architecture, consensus mechanisms, and applications in industries like finance and supply chain.',
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

  // Pagination logic
  const handlePageClick = (event) => {
    setCurrentPage(event.selected)
  }

  // Get the current items to display based on the current page
  const displayedRequests = collaborationRequests.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  // Handle search input change
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  // Handle sorting change
  const handleSortChange = (value) => {
    setSortBy(value)
  }

  // Filter and sort the requests based on search and sort criteria
  const filteredRequests = collaborationRequests
    .filter(
      (request) =>
        request.authorName.toLowerCase().includes(search.toLowerCase()) ||
        request.materialTitle.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'dateRequested') {
        return new Date(b.dateRequested) - new Date(a.dateRequested)
      }
      return a.authorName.localeCompare(b.authorName)
    })

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

  return (
    <Container fluid>
      <Row className="d-flex">
        <Col md="12" xl="10">
          <Card>
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
            <CardBody>
              <div
                style={{
                  maxHeight: '450px',
                  overflowY: 'scroll',
                  marginBottom: '1rem',
                }}
              >
                <Table className="mb-0">
                  <TableHead>
                    <tr>
                      <th scope="col">Details</th>
                      <th scope="col">Institution</th>
                      <th scope="col">Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </TableHead>
                  <TableBody>
                    {displayedRequests.map((request, index) => (
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

              <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={Math.ceil(
                  collaborationRequests.length / itemsPerPage
                )}
                onPageChange={handlePageClick}
                containerClassName={'pagination-container'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                activeClassName={'active'}
                disabledClassName={'disabled'}
              />
            </CardBody>
          </Card>
        </Col>

        <Col className="align-items-start">
          <Row className="mb-3">
            <Card className="shadow-sm">
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
          </Row>

          <Row className="mb-3">
            <Card className="shadow-sm">
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
          </Row>

          <Row className="mb-3">
            <Card className="shadow-sm">
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
