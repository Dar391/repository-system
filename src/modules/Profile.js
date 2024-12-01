import React, { useState } from 'react'
import '../styles/profile.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import profileImage from '../assets/image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faChevronUp,
  faEdit,
} from '@fortawesome/free-solid-svg-icons'
import { Autocomplete, Box, Grid2, TextField } from '@mui/material'

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
        <Col lg={3} className="d-flex justify-content-start">
          <Card
            style={{ backgroundColor: 'rgb(146, 12, 12)', color: 'whitesmoke' }}
          >
            <div
              className="d-flex justify-content-between align-items-center"
              style={{
                padding: '20px',
                borderBottom: '2px solid rgb(234, 229, 229)',
              }}
            >
              <h5>About me</h5>
            </div>

            <Card.Body className="d-flex flex-column align-items-center ">
              <div className="text-center">
                <img
                  src={profileImage}
                  className={`imageProfile rounded-circle `}
                  alt="profile"
                />
                <div className="text-center">
                  <h5
                    style={{ fontWeight: 'bold', margin: '0%', padding: '0%' }}
                  >
                    Dr. Jean Doe
                  </h5>
                  <h6
                    className="p-0"
                    style={{
                      fontSize: '13px',
                      fontStyle: 'italic',
                    }}
                  >
                    Teaching personnel
                  </h6>
                </div>
              </div>

              <div style={{ padding: '10px' }}>
                <div>
                  <h6 style={{ margin: '0%', padding: '0%', fontSize: '11px' }}>
                    Introduction
                  </h6>
                  <p style={{ textAlign: 'justify', fontSize: '12px' }}>
                    Dedicated Lecturer with strength in teaching in subject of
                    Computer Science and Research Writing, providing both
                    practical and theoretical knowledge. Works with learners
                    closely to develop vital and functional skills required to
                    complete learning programs. Delivers excellent mentorship by
                    supporting students from all backgrounds, abilities and
                    aspirations to fulfil potential through learning.
                  </p>
                </div>

                <div>
                  <h6 style={{ margin: '0%', padding: '0%', fontSize: '11px' }}>
                    Institution
                  </h6>
                  <span style={{ fontSize: '12px' }}>
                    Western Mindanao State University
                  </span>
                </div>

                <div style={{ paddingTop: '20px' }}>
                  <h6 style={{ margin: '0%', padding: '0%', fontSize: '11px' }}>
                    Disciplines <br />
                  </h6>
                  <div style={{ fontSize: '12px' }}>
                    <span>Information Technology | </span>
                    <span>Computer Science </span>
                  </div>
                </div>

                <div style={{ paddingTop: '20px' }}>
                  <h6 style={{ margin: '0%', padding: '0%', fontSize: '11px' }}>
                    Skills
                  </h6>
                  <div style={{ fontSize: '12px' }}>
                    <span>Software development | </span>
                    <span>Project management </span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="d-flex justify-content-start">
            <div>
              <div className="p-3 border-bottom  d-flex justify-content-between">
                <div style={{ flexDirection: 'row' }}>
                  <h5 className="font-weight-bold">Personal Information</h5>
                </div>

                <button
                  type="button"
                  className="btn"
                  onClick={handlePersonalOpening}
                >
                  {!isPersonalInfoOpen ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronUp} />
                  )}
                </button>
              </div>
              {isPersonalInfoOpen && (
                <div className="p-3">
                  {/* Content that will be shown/hidden */}

                  <Grid2
                    container
                    direction="row"
                    sx={{
                      justifyContent: 'center',
                      gap: 8,
                    }}
                  >
                    {authordetails.map((item, index) => (
                      <Grid2
                        container
                        direction="column"
                        xs={6}
                        md={6}
                        lg={4}
                        key={index}
                        spacing={2}
                        style={{ width: '40%' }}
                      >
                        <TextField
                          id="filled-basic"
                          label="First name"
                          variant="standard"
                          defaultValue={item.firstname}
                          fullWidth
                        />
                        <TextField
                          id="filled-basic"
                          label="Middle name"
                          variant="standard"
                          defaultValue={item.middlename}
                        />

                        <TextField
                          id="filled-basic"
                          label="Gender"
                          variant="standard"
                          defaultValue={item.gender}
                        />

                        <TextField
                          id="filled-basic"
                          label="Phone number"
                          variant="standard"
                          defaultValue={item.number}
                        />

                        <TextField
                          id="filled-basic"
                          label="Country"
                          variant="standard"
                          defaultValue={item.country}
                        />
                      </Grid2>
                    ))}

                    {authordetails.map((item, index) => (
                      <Grid2
                        container
                        direction="column"
                        xs={6}
                        md={4}
                        key={index}
                        spacing={2}
                        style={{ width: '40%' }}
                      >
                        <TextField
                          id="filled-basic"
                          label="Last name"
                          variant="standard"
                          defaultValue={item.lastname}
                        />
                        <TextField
                          id="filled-basic"
                          label="Age"
                          variant="standard"
                          defaultValue={item.age}
                        />

                        <TextField
                          id="filled-basic"
                          label="Birth date"
                          variant="standard"
                          defaultValue={item.dateOfBirth}
                        />

                        <TextField
                          id="filled-basic"
                          label="Email address"
                          variant="standard"
                          defaultValue={item.email}
                        />
                        <TextField
                          id="filled-basic"
                          label="City"
                          variant="standard"
                          defaultValue={item.city}
                        />
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
                      </Grid2>
                    ))}
                  </Grid2>
                </div>
              )}
            </div>

            <div>
              <div className="p-3 border-bottom border-top d-flex justify-content-between">
                <h5 className="font-weight-bold">About me</h5>
                <button
                  type="button"
                  className="btn"
                  onClick={handleAboutOpening}
                >
                  {!isAboutOpen ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronUp} />
                  )}
                </button>
              </div>
              {isAboutOpen && (
                <div className="p-3">
                  {/* Content that will be shown/hidden */}
                  {authordetails.map((item, index) => (
                    <div className="p-3">
                      <TextField
                        id="standard-multiline-static"
                        label="Description"
                        variant="standard"
                        multiline
                        rows={6}
                        fullWidth
                        defaultValue={item.description}
                        className="mb-4"
                      />

                      <Autocomplete
                        multiple
                        id="tags-standard"
                        options={Authorskill}
                        getOptionLabel={(option) => option.myskill}
                        defaultValue={[Authorskill[2], Authorskill[1]]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            label="Skills"
                            placeholder="Enter or select skills"
                            multiline
                            className="mb-4"
                          />
                        )}
                      />

                      <Autocomplete
                        multiple
                        id="tags-standard"
                        options={discipline}
                        getOptionLabel={(option) => option.Authordisc}
                        defaultValue={[discipline[2], discipline[1]]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            label="Disciplines"
                            placeholder="Enter or select discipline"
                            multiline
                            className="mb-4"
                          />
                        )}
                      />

                      <Autocomplete
                        multiple
                        id="tags-standard"
                        options={language}
                        getOptionLabel={(option) => option.lang}
                        defaultValue={[language[0], language[1]]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            label="Languages"
                            placeholder="Enter or select languages"
                            multiline
                            className="mb-4"
                          />
                        )}
                      />

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
                  ))}
                </div>
              )}
            </div>

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
                    <Grid2 container spacing={2} className="p-3">
                      <TextField
                        fullWidth
                        id="filled-basic"
                        label="Institution"
                        variant="standard"
                        defaultValue={item.work}
                      />
                      <TextField
                        fullWidth
                        id="filled-basic"
                        label="Department"
                        variant="standard"
                        defaultValue={item.department}
                      />
                      <TextField
                        fullWidth
                        id="filled-basic"
                        label="Position"
                        variant="standard"
                        defaultValue={item.position}
                      />
                      <TextField
                        fullWidth
                        id="filled-basic"
                        label="Start date"
                        variant="standard"
                        defaultValue={item.start}
                      />
                      <Grid2
                        container
                        direction="row"
                        spacing={2}
                        sx={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Grid2 item>
                          <Autocomplete
                            id="country-select-demo"
                            sx={{ width: 250 }}
                            options={countries}
                            autoHighlight
                            getOptionLabel={(option) => option.label}
                            renderOption={(props, option) => {
                              const { key, ...optionProps } = props
                              return (
                                <Box
                                  key={key}
                                  component="li"
                                  sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                  {...optionProps}
                                >
                                  <img
                                    loading="lazy"
                                    width="20"
                                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                    alt=""
                                  />
                                  {option.label} ({option.code}) +{option.phone}
                                </Box>
                              )
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label="Choose a country"
                                slotProps={{
                                  htmlInput: {
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                  },
                                }}
                              />
                            )}
                          />
                        </Grid2>

                        <Grid2 item>
                          <Autocomplete
                            disablePortal
                            options={countries}
                            sx={{ width: 250 }}
                            renderInput={(params) => (
                              <TextField {...params} label="Choose a City" />
                            )}
                          />
                        </Grid2>
                      </Grid2>
                    </Grid2>
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
