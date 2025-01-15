import React, { useState } from 'react'
import CollabRequest from './Collaborations_menus/CollabRequest'
import CollabUpdate from './Collaborations_menus/CollabUpdate'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'

const Collaborations = () => {
  const [activeComponent, setActiveComponent] = useState('request')
  const [activeMenu, setActiveMenu] = useState('collaboration')

  const renderComponent = () => {
    if (activeComponent === 'request') {
      return <CollabRequest />
    } else if (activeComponent === 'update') {
      return <CollabUpdate />
    }
  }

  return (
    <Container fluid style={{ backgroundColor: 'whitesmoke' }}>
      <Row>
        <Col xs="auto" style={{ padding: '0' }}>
          <Sidebar
            setActiveComponent={setActiveComponent}
            activeComponent={activeComponent}
            activeMenuType={activeMenu}
          />
        </Col>

        <Col style={{ marginLeft: '250px', padding: '0', paddingTop: '10px' }}>
          <div className="p-3">{renderComponent()}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default Collaborations
