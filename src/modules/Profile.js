import React, { useState } from 'react'
import '../styles/profile.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import profileImage from '../assets/image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faChevronDown,
  faChevronUp,
  faEdit,
  faSchool,
} from '@fortawesome/free-solid-svg-icons'
import { Autocomplete, Box, Grid2, TextField, Typography } from '@mui/material'
import Section1Profile from './UserProfile/Section1Profile'
import { faUpwork } from '@fortawesome/free-brands-svg-icons'

const Profile = () => {
  const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState(true)
  const [isAffiliationsOpen, setIsAffiliationsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  const handlePersonalOpening = () => {
    setIsPersonalInfoOpen((prev) => !prev)
  }

  const handleAffilOpening = () => {
    setIsAffiliationsOpen((prev) => !prev)
  }

  const handleAboutOpening = () => {
    setIsAboutOpen((prev) => !prev)
  }

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

  const Authorskill = [
    { myskill: 'Component-based Architecture' },
    { myskill: 'Programming' },
    { myskill: 'Creativity' },
    { myskill: 'Project Management' },
    { myskill: 'Self-Motivation' },
  ]

  const discipline = [
    { Authordisc: 'Frontend Development' },
    { Authordisc: 'Software Engineering' },
    { Authordisc: 'Computer Science' },
    { Authordisc: 'Information Technology' },
    { Authordisc: 'Education' },
  ]

  const language = [
    {
      lang: 'English',
    },
    {
      lang: 'Filipino',
    },
    {
      lang: 'Korean',
    },
    {
      lang: 'Japanese',
    },
  ]

  const countries = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
    {
      code: 'AU',
      label: 'Australia',
      phone: '61',
      suggested: true,
    },
  ]

  return (
    <Container fluid className="profile">
      <Row>
        <Section1Profile />

        <Col className="d-flex justify-content-center">
          <Card
            className="d-flex justify-content-start"
            style={{ width: '80%' }}
          >
            <div>
              <div className="p-3 border-bottom border-top d-flex justify-content-between">
                <h5 className="font-weight-bold">Affilations</h5>
                <button
                  type="button"
                  className="btn"
                  onClick={handleAffilOpening}
                >
                  {!isAffiliationsOpen ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronUp} />
                  )}
                </button>
              </div>
              {isAffiliationsOpen && (
                <div className="p-3">
                  {/* Content that will be shown/hidden */}
                  {authordetails.map((item, index) => (
                    <div container className="p-3">
                      <div>
                        <Typography
                          style={{
                            fontWeight: 'bold',
                            borderBottom: 'solid 1px silver',
                          }}
                        >
                          Work Affilations
                        </Typography>

                        <div style={{ padding: '2%' }}>
                          <Typography style={{ paddingBottom: '1%' }}>
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              style={{ paddingRight: '10px' }}
                            />
                            Western Mindanao State University (2020-present)
                          </Typography>
                          <Typography style={{ paddingBottom: '1%' }}>
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              style={{ paddingRight: '10px' }}
                            />
                            Western Mindanao State University (2020-present)
                          </Typography>
                          <Typography style={{ paddingBottom: '1%' }}>
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              style={{ paddingRight: '10px' }}
                            />
                            Western Mindanao State University (2020-present)
                          </Typography>
                        </div>
                      </div>

                      <div>
                        <Typography
                          style={{
                            fontWeight: 'bold',
                            borderBottom: 'solid 1px silver',
                          }}
                        >
                          Education History
                        </Typography>

                        <div
                          style={{
                            padding: '2%',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              gap: '10px',
                            }}
                          >
                            <Typography
                              style={{
                                paddingBottom: '1%',
                                fontWeight: 'bold',
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faSchool}
                                style={{
                                  paddingRight: '10px',
                                }}
                              />
                              Graduate school:
                            </Typography>
                            <Typography>
                              Western Mindanao State University (2020-present)
                            </Typography>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              gap: '10px',
                            }}
                          >
                            <Typography
                              style={{
                                paddingBottom: '1%',
                                fontWeight: 'bold',
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faSchool}
                                style={{
                                  paddingRight: '10px',
                                }}
                              />
                              Undergraduate school:
                            </Typography>
                            <Typography>
                              Western Mindanao State University (2020-present)
                            </Typography>
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              gap: '10px',
                            }}
                          >
                            <Typography
                              style={{
                                paddingBottom: '1%',
                                fontWeight: 'bold',
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faSchool}
                                style={{
                                  paddingRight: '10px',
                                }}
                              />
                              High school:
                            </Typography>
                            <Typography>
                              Western Mindanao State University (2020-present)
                            </Typography>
                          </div>

                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              gap: '10px',
                            }}
                          >
                            <Typography
                              style={{
                                paddingBottom: '1%',
                                fontWeight: 'bold',
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faSchool}
                                style={{
                                  paddingRight: '10px',
                                }}
                              />
                              Primary school:
                            </Typography>
                            <Typography>
                              Western Mindanao State University (2020-present)
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        color: 'gray',
                        border: 'none',
                      }}
                    >
                      <span>Edit </span>
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
