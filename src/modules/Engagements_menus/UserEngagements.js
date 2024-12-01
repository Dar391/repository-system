import React, { useEffect, useState } from 'react'
import '../../styles/engagements.css'
import {
  Button,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from 'react-bootstrap'
import {
  faArrowTrendUp,
  faSchool,
  faUserGroup,
  faHandSparkles,
  faClose,
  faSave,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PieChart } from '@mui/x-charts/PieChart'
import { BarChart } from '@mui/x-charts'
import { Link } from '@mui/material'

const UserEngagements = () => {
  const analyticsData = [
    {
      data: '21',
      desc: 'Total of authors you collaborated with',
      icon: faUserGroup,
      color: '#c27685',
      additional: '2 new collaboration',
    },
    {
      data: '4',
      desc: 'Total of institution you collaborated with',
      icon: faSchool,
      color: '#416574',
      additional: '1 new institution',
    },
    {
      data: '3',
      desc: 'Total of disciplines you authored and collaborated with',
      icon: faHandSparkles,
      color: '#e69138',
      additional: '1 new disciplines',
    },
  ]

  const AuthorActivity = [
    {
      author: 'John Doe',
      institution: 'WMSU',
      userType: 'Teacher',
      materialCollaboration: 'CS 125: Intro to Computing Lesson 1',
      dateAdded: '10/21/2024',
      image:
        'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
      authorAbout:
        'Computer Science instructor specializing in introductory computing courses and curriculum development for higher education.',
    },
    {
      author: 'Chris Hems',
      institution: 'SCC',
      userType: 'Teacher',
      materialCollaboration: 'CS 124: Intro to Computing Lesson 1',
      dateAdded: '10/21/2024',
      image:
        'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=MsKXmwf7TDRdKRn_lHohhmD5rvVvnGs9ry0xl6CrMT4=',
      authorAbout:
        'Senior IT lecturer focusing on foundational computing principles and student engagement in technology education.',
    },
    {
      author: 'Anna Cruz',
      institution: 'SMC',
      userType: 'Teacher',
      materialCollaboration: 'CS 125: Intro to Computing Lesson 1',
      dateAdded: '10/21/2024',
      image:
        'https://t3.ftcdn.net/jpg/08/05/39/50/240_F_805395048_g1AHkBq7Bcs27aWU4rMHgdtGFDQ5IqeG.jpg',
      authorAbout:
        'Academic instructor and digital literacy advocate with experience in developing accessible computing lessons.',
    },
    {
      author: 'Jane Doe',
      institution: 'WMSU',
      userType: 'Teacher',
      materialCollaboration: 'CS 125: Intro to Computing Lesson 1',
      dateAdded: '10/21/2024',
      image:
        'https://atd-blog.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142821/cool-profile-pictures-for-girls-9.webp',
      authorAbout:
        'Expert in computational thinking and pedagogy, dedicated to enhancing student comprehension in entry-level computer science.',
    },
    {
      author: 'Jane Doe',
      institution: 'WMSU',
      userType: 'Teacher',
      materialCollaboration: 'CS 125: Intro to Computing Lesson 1',
      dateAdded: '10/21/2024',
      image:
        'https://atd-blog.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142821/cool-profile-pictures-for-girls-9.webp',
      authorAbout:
        'Expert in computational thinking and pedagogy, dedicated to enhancing student comprehension in entry-level computer science.',
    },
    {
      author: 'Jane Doe',
      institution: 'WMSU',
      userType: 'Teacher',
      materialCollaboration: 'CS 125: Intro to Computing Lesson 1',
      dateAdded: '10/21/2024',
      image:
        'https://atd-blog.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142821/cool-profile-pictures-for-girls-9.webp',
      authorAbout:
        'Expert in computational thinking and pedagogy, dedicated to enhancing student comprehension in entry-level computer science.',
    },
    {
      author: 'Jane Doe',
      institution: 'WMSU',
      userType: 'Teacher',
      materialCollaboration: 'CS 125: Intro to Computing Lesson 1',
      dateAdded: '10/21/2024',
      image:
        'https://atd-blog.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/04/16142821/cool-profile-pictures-for-girls-9.webp',
      authorAbout:
        'Expert in computational thinking and pedagogy, dedicated to enhancing student comprehension in entry-level computer science.',
    },
  ]

  const pieChartData = [
    { id: 0, value: 10, label: 'Teachers' },
    { id: 1, value: 15, label: 'Students' },
    { id: 2, value: 13, label: 'Others' },
  ]

  const [isHidden, setIsHidden] = React.useState(false)
  const xAxisData = ['WMSU', 'CSS', 'SMC']
  const seriesData = [{ data: [4, 8, 9] }]
  const colors = ['#9966ff']

  useEffect(() => {
    const handleResize = () => {
      const minWidth = 320 // Set your minimum width here (in pixels)

      if (window.innerWidth < minWidth) {
        // Resize the window to the minimum width if the user tries to resize it smaller
        window.resizeTo(minWidth, window.innerHeight)
      }
    }

    // Attach the resize event listener to handle window resizing
    window.addEventListener('resize', handleResize)

    // Initial check to adjust the size on mount
    handleResize()

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)

  return (
    <Col className="UserEngagement">
      <Row className="containerCard">
        {analyticsData.map((item, index) => (
          <Col key={index} className="mb-5" x>
            <div
              className="card custom-card"
              style={{
                width: '390px',
                height: '120px',
                margin: '0 auto',
              }}
            >
              <CardBody
                className="d-flex"
                style={{ paddingTop: '0%', paddingRight: '0' }}
              >
                <Row className=" align-items-center  ">
                  <div
                    style={{
                      width: 'auto',
                      padding: '0',
                    }}
                  >
                    <Col>
                      <div
                        style={{ backgroundColor: item.color }}
                        className="iconStyle"
                      >
                        <FontAwesomeIcon
                          icon={item.icon}
                          size="1x"
                          color="white"
                        />
                      </div>
                    </Col>
                  </div>

                  <div
                    style={{
                      width: '50%',
                      overflowWrap: 'break-word',
                      wordWrap: 'break-word',
                    }}
                  >
                    <Col>
                      <CardTitle className="cardMainData">
                        {item.data}
                      </CardTitle>
                      <CardSubtitle
                        className="cardSubtitle"
                        style={{
                          color: item.color,
                        }}
                      >
                        {item.desc}
                      </CardSubtitle>
                    </Col>
                  </div>

                  <div
                    className="additional-info text-end"
                    style={{
                      width: 'auto',
                      paddingRight: '0',
                    }}
                  >
                    <Col>
                      <div>
                        <FontAwesomeIcon icon={faArrowTrendUp} color="gray" />
                        <p
                          style={{
                            whiteSpace: 'nowrap',
                            fontStyle: 'italic',
                            color: 'grey',
                          }}
                        >
                          +{item.additional}
                        </p>
                      </div>
                    </Col>
                  </div>
                </Row>
              </CardBody>
            </div>
          </Col>
        ))}
      </Row>

      <Row>
        <Col className=" justify-content-center  ">
          <div className="card custom-card" style={{ padding: '10px' }}>
            <div>
              <h5>Type of collaborators metric</h5>
            </div>
            <PieChart
              series={[
                {
                  data: pieChartData,
                  innerRadius: '50%',
                  highlightScope: { faded: 'global', highlighted: 'item' },
                },
              ]}
              slotProps={{
                legend: {
                  hidden: isHidden,
                  direction: 'column',
                  position: { vertical: 'center', horizontal: 'right' },
                  padding: 0,
                  labelStyle: {
                    fontSize: 14,
                  },
                  itemMarkWidth: 11,
                  itemMarkHeight: 10,
                },
              }}
              height={270}
            />
          </div>
        </Col>
        <Col>
          <div className="card custom-card" style={{ padding: '10px' }}>
            <div>
              <h5>Collaborated institutions metrics</h5>
            </div>
            <BarChart
              xAxis={[{ scaleType: 'band', data: xAxisData }]}
              series={seriesData}
              width={400}
              height={270}
              colors={colors}
              barSize={20}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            ></BarChart>
          </div>
        </Col>
      </Row>

      <Row>
        <div
          className="text-center"
          style={{
            paddingTop: '70px',
            paddingBottom: '25px',
          }}
        >
          <h4>Contributors</h4>
        </div>

        {AuthorActivity.slice(0, 4).map((item, index) => (
          <Col key={index} className="mb-2 d-flex justify-content-center">
            <div
              className="card h-100 mb-4"
              style={{
                width: '18rem',
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardImg
                variant="top"
                src={item.image}
                style={{
                  height: '9rem',
                  borderRadius: '5rem',
                  width: '9rem',
                  padding: '5%',
                }}
              />
              <CardBody
                className="d-flex flex-column text-center"
                style={{ paddingTop: '0%' }}
              >
                <CardTitle style={{ fontSize: '15px', fontWeight: 'bold' }}>
                  {item.author}
                </CardTitle>
                <CardSubtitle
                  className="authorSubtitle "
                  style={{
                    backgroundColor: '#FFCDD2',
                    borderRadius: '8px',
                    padding: '5px ',
                    color: 'maroon',
                    fontSize: '11px',
                    width: '7rem',
                    alignSelf: 'center',
                  }}
                >
                  {item.userType} | {item.institution}
                </CardSubtitle>
                <CardText
                  style={{
                    fontSize: '11px',
                    paddingTop: '10%',
                  }}
                >
                  {item.authorAbout}
                </CardText>
              </CardBody>
            </div>
          </Col>
        ))}

        <div className="viewAll">
          <span onClick={toggleModal} className="hoverText">
            View All
          </span>
        </div>
      </Row>

      <Modal show={modal} toggle={toggleModal}>
        <ModalHeader
          toggle={toggleModal}
          className="d-flex align-items-center justify-content-between"
        >
          <div style={{ margin: '0', padding: '0' }}>
            <p style={{ fontWeight: 'bold', paddingBottom: '0' }}>
              All Contributors
            </p>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '12px',
                marginTop: '0',
                lineHeight: '0',
              }}
            >
              This list shows your collaborators
            </p>
          </div>

          <button className="btnCloseModal" onClick={toggleModal}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </ModalHeader>
        <ModalBody style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <div>
            {AuthorActivity.map((item, index) => (
              <li
                className="d-flex align-items-center justify-content-between"
                style={{ padding: '2%', borderBottom: '1px solid #e0e0e0' }}
                key={index}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    style={{
                      height: '60px',
                      borderRadius: '5rem',
                      width: '60px',
                      padding: '5%',
                    }}
                  />
                  <div style={{ fontSize: '13px' }}>
                    <b>{item.author}</b>
                    <p>{item.institution}</p>
                  </div>
                </div>

                <div className="viewAll">
                  <span className="hoverText " style={{ fontSize: '13px' }}>
                    Follow
                  </span>
                </div>
              </li>
            ))}
          </div>
        </ModalBody>
      </Modal>
    </Col>
  )
}

export default UserEngagements
