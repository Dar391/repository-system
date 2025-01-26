import { Button, Typography } from '@mui/material'
import React from 'react'
import profileImage from '../../assets/image.jpg'
import { Card, Col, Row } from 'react-bootstrap'
import '../../styles/ProfileSectionsStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faLock, faPen } from '@fortawesome/free-solid-svg-icons'

const Section1Profile = () => {
  const authordetails = [
    {
      firstname: 'Jean',
      lastname: 'Doe',
      middlename: 'Tucker',
      number: '09152467758',
      age: '26',
      email: 'jeanDoe@gmail.com',
      position: 'Teaching personnel',
      country: 'Philippines',
      city: 'Pagadian',
      gender: 'Female',
      dateOfBirth: 'September 27, 1998',
      description:
        'I am a dedicated Lecturer with strength in teaching in subject of Computer Science and Research Writing, providing both practical and theoretical knowledge. Works with learners closely to develop vital and functional skills required to complete learning programs. Delivers excellent mentorship by supporting students from all backgrounds, abilities and aspirations to fulfil potential through learning.',
      disciplines: 'Artificial Intelligence',
      skills: 'Programming',
      Activity: '21 material items',
      languages: 'English',
      work: ' Western Mindanao State University',
      start: 'June, 2019',
      department: 'Computer Science',
    },
  ]

  return (
    <Row className="ProfileSectionsStyle" style={{ gap: '20px' }}>
      <div style={{ paddingLeft: '10rem', paddingRight: '10rem' }}>
        <Typography
          style={{
            fontSize: '32px',
            borderBottom: 'Solid 1px silver',
          }}
        >
          {' '}
          User Profile{' '}
        </Typography>
      </div>

      <Col className="column1Profile">
        <div
          style={{
            backgroundImage: `linear-gradient(
              rgba(146, 12, 12, 0.8),
              rgba(146, 12, 12, 0.8)
            ), url('your-pattern-image-url.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '15px',
            borderRadius: '10px', // Optional for rounded corners
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional for shadow effect
          }}
        >
          <img
            src={profileImage}
            className={`imageProf rounded-circle `}
            alt="profile"
          />

          <div style={{ paddingTop: '3%', color: 'white' }}>
            <h6 style={{ margin: '0%', padding: '0%', fontSize: '11px' }}>
              Introduction
            </h6>
            <p style={{ textAlign: 'justify', fontSize: '12px' }}>
              Dedicated Lecturer with strength in teaching in subject of
              Computer Science and Research Writing, providing both practical
              and theoretical knowledge. Works with learners closely to develop
              vital and functional skills required to complete learning
              programs. Delivers excellent mentorship by supporting students
              from all backgrounds, abilities and aspirations to fulfil
              potential through learning.
            </p>
          </div>
        </div>
      </Col>
      <Col className="sectionPadding">
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            variant="outlined"
            style={{
              gap: '5px',
              borderColor: 'maroon',
              color: 'maroon',
              fontSize: '12px',
            }}
          >
            {' '}
            <FontAwesomeIcon icon={faPen} /> Edit
          </Button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <Typography
              style={{
                fontWeight: 'bold',
                fontSize: '32px',
                fontFamily: 'serif',
              }}
            >
              {' '}
              Darllaine R. Lincopinis
            </Typography>
            <Typography style={{ fontStyle: 'italic' }}>Teacher</Typography>
          </div>

          <div style={{ display: 'flex', gap: 5 }}>
            <Typography style={{ fontWeight: 'bold' }}>Disciplines:</Typography>
            <Typography>Computer Science</Typography>
          </div>

          <div style={{ display: 'flex', gap: 5 }}>
            <Typography style={{ fontWeight: 'bold' }}>
              Primary institution:
            </Typography>
            <Typography>Western Mindanao State University</Typography>
          </div>

          <div style={{ display: 'flex', gap: 5 }}>
            <Typography style={{ fontWeight: 'bold' }}>Email:</Typography>
            <Typography>darllaine@gmail.com</Typography>
          </div>

          <div style={{ display: 'flex', gap: 5 }}>
            <Typography style={{ fontWeight: 'bold' }}>User type:</Typography>
            <Typography>Faculty</Typography>
          </div>

          <div style={{ gap: 5 }}>
            <Typography style={{ fontWeight: 'bold' }}>
              Social media connections:
            </Typography>
            <div style={{ display: 'flex', gap: 50, paddingTop: '10px' }}>
              <FontAwesomeIcon
                icon={faFacebook}
                color="#1877F2"
                style={{ cursor: 'pointer', fontSize: '30px' }}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                color="#1DA1F2"
                style={{ cursor: 'pointer', fontSize: '30px' }}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                color="#E1306C"
                style={{ cursor: 'pointer', fontSize: '30px' }}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#0077B5"
                style={{ cursor: 'pointer', fontSize: '30px' }}
              />
            </div>
          </div>

          <div>
            <Button variant="contained" color="success" style={{ gap: '8px' }}>
              <FontAwesomeIcon icon={faLock} />
              Change password
            </Button>
          </div>
        </div>
      </Col>
      <Col>
        <div style={{ padding: '2%' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Header>
              <Card.Title>Contributions</Card.Title>
            </Card.Header>
            <Card.Body className="btnContribution">
              <Button
                variant="text"
                style={{
                  color: 'maroon',
                  textTransform: 'none',
                  textDecoration: 'underline',
                }}
              >
                Authored materials (4)
              </Button>
              <Button
                variant="text"
                style={{
                  color: 'maroon',
                  textTransform: 'none',
                  textDecoration: 'underline',
                }}
              >
                Collaborated materials (12)
              </Button>
              <Button
                variant="text"
                style={{
                  color: 'maroon',
                  textTransform: 'none',
                  textDecoration: 'underline',
                }}
              >
                Collaborated authors (8)
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  )
}

export default Section1Profile
