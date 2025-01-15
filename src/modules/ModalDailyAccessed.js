import React, { useState } from 'react'
import { Badge, ListGroup, Modal, ModalHeader } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

const ModalDailyAccessed = ({ show, handleClose }) => {
  const itemsPerPage = 8
  const [currentPage, setCurrentPage] = useState(0)

  const materials = [
    {
      materialName: 'Introduction to ReactJS',
      authors: ['John Doe', 'Jane Smith'],
      dateAccessed: '2025-01-10',
    },
    {
      materialName: 'Advanced JavaScript Techniques',
      authors: ['Alice Johnson', 'Bob Brown'],
      dateAccessed: '2025-01-08',
    },
    {
      materialName: 'Database Design Principles',
      authors: ['Emily Davis', 'Michael Wilson'],
      dateAccessed: '2025-01-07',
    },
    {
      materialName: 'Mobile App Development with React Native',
      authors: ['Chris Martinez', 'Laura White'],
      dateAccessed: '2025-01-05',
    },
    {
      materialName: 'Machine Learning Basics',
      authors: ['Sophia Thompson', 'David Taylor'],
      dateAccessed: '2025-01-06',
    },
    {
      materialName: 'Web Development Essentials',
      authors: ['James Anderson', 'Olivia Moore'],
      dateAccessed: '2025-01-09',
    },
    {
      materialName: 'Cybersecurity Fundamentals',
      authors: ['Liam Harris', 'Emma Clark'],
      dateAccessed: '2025-01-04',
    },
    {
      materialName: 'Data Science and Analytics',
      authors: ['Ethan Walker', 'Isabella Hall'],
      dateAccessed: '2025-01-03',
    },
    {
      materialName: 'Cloud Computing Concepts',
      authors: ['Alexander Young', 'Mia King'],
      dateAccessed: '2025-01-11',
    },
    {
      materialName: 'Programming in Python',
      authors: ['Charlotte Lewis', 'Benjamin Scott'],
      dateAccessed: '2025-01-12',
    },
  ]

  const handlePageClick = (event) => {
    setCurrentPage(event.selected)
  }

  const displayedRequests = materials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )
  return (
    <Modal style={{ maxHeight: '100%' }} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Recent accessed material</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {displayedRequests.map((data, index) => (
            <ListGroup.Item
              action
              key={index}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold" style={{ fontSize: '12px' }}>
                  {data.materialName}
                </div>
                <small style={{ fontSize: '11px' }}>
                  {' '}
                  {data.authors.join(', ')}
                </small>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>

      <Modal.Footer>
        <div className="d-flex justify-content-center w-100">
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={Math.ceil(materials.length / itemsPerPage)}
            onPageChange={handlePageClick}
            containerClassName={'page-container'}
            pageClassName={'item-page'}
            activeClassName={'activePage'}
            disabledClassName={'disabled-page'}
          />
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDailyAccessed
