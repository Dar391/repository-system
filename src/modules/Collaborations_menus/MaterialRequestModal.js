import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { PDFViewer } from '@react-pdf/renderer'
import pdfFile from '../../assets/Prototyping.pdf'
import '../../styles/collaboration.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLinkedin,
  faOrcid,
  faResearchgate,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { TextField } from '@mui/material'
const MaterialRequestModal = ({
  show,
  handleClose,
  actionType,
  collaborationData,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="xl"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title> Material Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {actionType === 'View' && collaborationData ? (
          <Row>
            <Col className="metadata">
              <div>
                <div className="d-flex align-items-center">
                  <img
                    src={collaborationData.imageUrl}
                    alt="profile"
                    style={{ width: '10rem', height: '10rem' }}
                    className="shadow-1-strong rounded-circle"
                  />
                  <div style={{ paddingLeft: '2%' }}>
                    <p
                      style={{
                        fontWeight: 'bold',
                        marginBottom: '0%',
                      }}
                    >
                      {collaborationData.authorName}
                    </p>
                    <p
                      style={{
                        fontSize: '10px',
                      }}
                    >
                      {collaborationData.email}
                    </p>
                    <p style={{ fontStyle: 'italic' }}>
                      {collaborationData.description}
                    </p>

                    <div>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ marginRight: '10px', color: '#4267B2' }} // Facebook color
                      />
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ marginRight: '10px', color: '#0077B5' }} // LinkedIn color
                      />
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ marginRight: '10px', color: '#1DA1F2' }} // Twitter color
                      />
                      <FontAwesomeIcon
                        icon={faOrcid}
                        style={{ marginRight: '10px', color: '#A6CE39' }} // ORCID color
                      />
                      <FontAwesomeIcon
                        icon={faResearchgate}
                        style={{ color: '#00A9D1' }} // ResearchGate color
                      />
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '30px', paddingLeft: '2%' }}>
                  <div>
                    <span style={{ fontWeight: 'bold' }}>Material: </span>
                    <p>{collaborationData.materialTitle}</p>
                  </div>

                  <div>
                    <span style={{ fontWeight: 'bold' }}>Institution: </span>
                    <p>{collaborationData.institution}</p>
                  </div>

                  <div
                    className="d-flex align-items-center "
                    style={{ gap: '25%' }}
                  >
                    <div>
                      <span style={{ fontWeight: 'bold' }}>Disciplines: </span>
                      <p>{collaborationData.discipline}</p>
                    </div>

                    <div>
                      <span style={{ fontWeight: 'bold' }}>
                        Date requested:{' '}
                      </span>
                      <p>{collaborationData.dateRequested}</p>
                    </div>
                  </div>

                  <div>
                    <TextField
                      id="standard-multiline-static"
                      label="Want to send message to Alice Smith?"
                      variant="filled"
                      multiline
                      rows={3}
                      fullWidth
                      className="mb-3"
                    />
                  </div>
                </div>
              </div>
            </Col>

            <Col className="materialView">
              <div style={{ flex: 1, minWidth: '400px' }}>
                <iframe
                  src={pdfFile}
                  width="100%"
                  height="500"
                  title="sample"
                />
              </div>
            </Col>
          </Row>
        ) : (
          <> </>
        )}
        {actionType === 'Accept' && (
          <p>
            Are you sure you want to {actionType.toLowerCase()} this
            collaboration request?
          </p>
        )}
        {actionType === 'Reject' && (
          <p>
            Are you sure you want to {actionType.toLowerCase()} this
            collaboration request?
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        {actionType === 'View' && (
          <>
            <Button variant="primary" onClick={() => alert('Accepted!')}>
              Accept
            </Button>
            <Button variant="danger" onClick={() => alert('Rejected!')}>
              Reject
            </Button>
          </>
        )}
        {actionType === 'Accept' && (
          <Button variant="primary" onClick={handleClose}>
            Confirm Accept
          </Button>
        )}
        {actionType === 'Reject' && (
          <Button variant="danger" onClick={handleClose}>
            Confirm Reject
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export default MaterialRequestModal
