import React, { useEffect } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import {
  faFacebook,
  faLinkedin,
  faOrcid,
  faResearchgate,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TextField } from '@mui/material'
import DocViewer from 'react-doc-viewer'

const MaterialUpdateView = ({
  show,
  handleClose,
  actionType,
  materialData,
}) => {
  console.log('Material Data:', materialData)
  console.log('Filepath:', materialData.filepath)

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
        {actionType === 'View' && materialData ? (
          <Row>
            <Col className="metadata">
              <div>
                <div className="d-flex align-items-center">
                  <img
                    src={materialData.imageUrl}
                    alt="profile"
                    style={{ width: '8rem', height: '8rem' }}
                    className="shadow-1-strong rounded-circle"
                  />
                  <div style={{ paddingLeft: '2%' }}>
                    <p
                      style={{
                        fontWeight: 'bold',
                        marginBottom: '0%',
                      }}
                    >
                      {materialData.authorName}
                    </p>
                    <p
                      style={{
                        fontSize: '10px',
                        marginBottom: '0%',
                      }}
                    >
                      {materialData.email}
                    </p>
                    <p
                      style={{
                        fontStyle: 'italic',
                        fontSize: '12px',
                        marginBottom: '0%',
                      }}
                    >
                      {materialData.description}
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

                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      paddingTop: '2%',
                      marginBottom: '1%',
                    }}
                  >
                    Collaborators:
                  </p>
                  {Array.isArray(materialData.collaborators) ? (
                    <div
                      style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
                    >
                      {materialData.collaborators.map((collab, index) => (
                        <div
                          key={index}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.5rem',
                          }}
                        >
                          <img
                            src={collab.imageUrl}
                            alt={collab.name}
                            style={{ width: '1.5rem', height: '1.5rem' }}
                            className="shadow-1-strong rounded-circle"
                          />
                          <span
                            style={{ fontSize: '12px' }}
                            className="hoverText"
                          >
                            {collab.filePath}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p style={{ fontSize: '10px' }}>No collaborators</p>
                  )}
                </div>

                <Row style={{ padding: '3% 0 0 2%' }}>
                  <Col>
                    <div>
                      <span style={{ fontWeight: 'bold' }}>Material: </span>
                      <p>{materialData.materialTitle}</p>
                    </div>

                    <div>
                      <span style={{ fontWeight: 'bold' }}>Disciplines: </span>
                      <p>{materialData.discipline}</p>
                    </div>

                    <div>
                      <span style={{ fontWeight: 'bold' }}>Pages: </span>
                      <p>12</p>
                    </div>

                    <div>
                      <span style={{ fontWeight: 'bold' }}>
                        Document type:{' '}
                      </span>
                      <p>.pdf </p>
                    </div>
                  </Col>

                  <Col>
                    <div>
                      <span style={{ fontWeight: 'bold' }}>Institution: </span>
                      <p>{materialData.institution}</p>
                    </div>

                    <div>
                      <span style={{ fontWeight: 'bold' }}>Date updated: </span>
                      <p>{materialData.dateRequested}</p>
                    </div>

                    <div>
                      <span style={{ fontWeight: 'bold' }}>Characters: </span>
                      <p>1247</p>
                    </div>

                    <div>
                      <span style={{ fontWeight: 'bold' }}>Paper size: </span>
                      <p>A4</p>
                    </div>
                  </Col>
                </Row>

                <div style={{ paddingLeft: '2%' }}>
                  <div>
                    <TextField
                      disabled
                      id="standard-multiline-static"
                      label="Author note"
                      defaultValue={materialData.authorNote}
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

            <Col>
              <DocViewer />
            </Col>
          </Row>
        ) : (
          <> </>
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

export default MaterialUpdateView
