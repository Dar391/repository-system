import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import MaterialsEngagement from './Engagements_menus/MaterialsEngagement'
import UserEngagements from './Engagements_menus/UserEngagements'

const Engagements = () => {
  const [activeComponent, setActiveComponent] = useState('material')
  const [activeMenu, setActiveMenu] = useState('engagements')
  const renderComponent = () => {
    if (activeComponent === 'material') {
      return <MaterialsEngagement />
    } else if (activeComponent === 'user') {
      return <UserEngagements />
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

export default Engagements
