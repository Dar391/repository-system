import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import profileImage from '../assets/image.jpg'
import '../styles/engagements.css'
import { Badge } from '@mui/material'

const Sidebar = ({ setActiveComponent, activeComponent, activeMenuType }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const Menus = [
    {
      title: 'Material Engagements',
      src: 'Material-engagement',
      key: 'material',
    },
    {
      title: 'User Engagements',
      src: 'User-engagement',
      key: 'user',
    },
  ]

  const MenuCollab = [
    {
      title: 'Collaboration Requests',
      src: 'collaboration-activity',
      key: 'request',
      notif: '18',
    },
    {
      title: 'Material Update',
      src: 'collaboration-updates',
      key: 'update',
      notif: '3',
    },
  ]

  console.log('Current value of setActiveComponent:', setActiveComponent)
  const activeMenu = activeMenuType === 'engagements' ? Menus : MenuCollab

  return (
    <div className="d-flex Sidebar ">
      <div className={`layout text-white  p-3 d-flex flex-column`}>
        <div className="d-flex flex-column align-items-center mb-4">
          <img
            src={profileImage}
            alt="Profile"
            className={`imageProfile rounded-circle `}
          />

          <span className="fs-5 p-0">Prof. John Doe</span>
          <span
            className="p-0"
            style={{
              fontSize: '14px',
              fontStyle: 'italic',
              color: 'gainsboro',
            }}
          >
            Author rank: #24
          </span>
        </div>

        <ListGroup>
          {activeMenu.map((menu, index) => (
            <ListGroup.Item
              key={index}
              className={`menuItems d-flex align-items-left ${
                activeIndex === index ? 'active' : ''
              }`}
              onClick={() => {
                setActiveIndex(index)
                setActiveComponent(menu.key)
              }}
            >
              <span>{menu.title}</span>
              <Badge
                badgeContent={menu.notif}
                color="primary"
                showZero={false}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  )
}

export default Sidebar
