import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Document, Page } from 'react-pdf'
import pdfFile from '../../assets/Prototyping.pdf'
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`

const MaterialRequestModal = ({
  show,
  handleClose,
  actionType,
  collaborationData,
}) => {
  console.log(pdfFile)
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title> Material Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {actionType === 'View' && collaborationData ? (
          <div>
            <div>
              <span style={{ fontWeight: 'bold' }}>Material: </span>
              <span>{collaborationData.materialTitle}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>Author: </span>
              <span>{collaborationData.authorName}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>Institution: </span>
              <span>{collaborationData.institution}</span>
            </div>
            <div>
              <span style={{ fontWeight: 'bold' }}>Disciplines: </span>
              <span>{collaborationData.discipline}</span>
            </div>

            <div>
              <span style={{ fontWeight: 'bold' }}>Date requested: </span>
              <span>{collaborationData.dateRequested}</span>
            </div>

            <div>
              <Document
                file="../..assets/Prototyping.pdf"
                onLoadError={(error) =>
                  console.error('Error loading PDF:', error)
                }
              >
                <Page pageNumber={1} />
              </Document>
            </div>
          </div>
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
