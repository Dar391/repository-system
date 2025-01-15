import React, { useRef, useState } from 'react'
import '../styles/OpenMaterial.css'
import { Col, Container, Row, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowTrendUp,
  faBookReader,
  faBrain,
  faCode,
  faComputer,
  faDatabase,
  faDownload,
  faFileDownload,
  faLightbulb,
  faMobile,
  faPaperPlane,
  faPrint,
  faRobot,
  faStar,
  faUserPen,
} from '@fortawesome/free-solid-svg-icons'
import StarRatings from 'react-star-ratings'
import file from '../assets/Prototyping.pdf'
import image from '../assets/image1.jpg'
import {
  Avatar,
  Box,
  Button,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Popover,
  Rating,
  TextField,
  Tooltip,
} from '@mui/material'
import { BarChart } from '@mui/x-charts'

const OpenMaterial = () => {
  const newRating = 3
  const [anchorEl, setAnchorEl] = useState(null)
  const [ratingPopover, setRatingPopover] = useState(null)
  const [value, setValue] = useState(2)
  const [hover, setHover] = useState(-1)
  const [dense] = useState(false)
  const [shareModal, setShareModal] = useState(false)

  const commentsSectionRef = useRef(null)

  // Function to handle scroll
  const scrollToComments = () => {
    commentsSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  }

  const comments = [
    {
      image: image, // Placeholder image URL
      name: 'John Doe',
      timeCommented: '1 year ago',
      comment: 'This material was very insightful! I learned a lot from it.',
      userType: 'Student',
    },
    {
      image: image,
      name: 'Jane Smith',
      timeCommented: '3 years ago',
      comment: 'Great content! It was exactly what I needed for my project.',
      userType: 'Researcher',
    },
    {
      image: image,
      name: 'Alice Johnson',
      timeCommented: '2 years ago',
      comment: 'I appreciate the effort put into this material. Well done!',
      userType: 'Teacher',
    },
    {
      image: image,
      name: 'Michael Brown',
      timeCommented: '6 months ago',
      comment: 'This is a fantastic resource. Thank you for sharing!',
      userType: 'Student',
    },
    {
      image: image,
      name: 'Emma Wilson',
      timeCommented: '4 years ago',
      comment: 'Very detailed and well-organized. Highly recommended!',
      userType: 'Teacher',
    },
    {
      image: image, // Placeholder image URL
      name: 'John Doe',
      timeCommented: '1 year ago',
      comment: 'This material was very insightful! I learned a lot from it.',
      userType: 'Student',
    },
    {
      image: image,
      name: 'Jane Smith',
      timeCommented: '3 years ago',
      comment: 'Great content! It was exactly what I needed for my project.',
      userType: 'Researcher',
    },
    {
      image: image,
      name: 'Alice Johnson',
      timeCommented: '2 years ago',
      comment: 'I appreciate the effort put into this material. Well done!',
      userType: 'Teacher',
    },
    {
      image: image,
      name: 'Michael Brown',
      timeCommented: '6 months ago',
      comment: 'This is a fantastic resource. Thank you for sharing!',
      userType: 'Student',
    },
    {
      image: image,
      name: 'Emma Wilson',
      timeCommented: '4 years ago',
      comment: 'Very detailed and well-organized. Highly recommended!',
      userType: 'Teacher',
    },
  ]

  const chart = [
    { label: 'Useless', value: 2 },
    { label: 'Poor', value: 1 },
    { label: 'OK', value: 8 },
    { label: 'Good', value: 10 },
    { label: 'Excellent', value: 12 },
  ]

  const otherMaterials = [
    'Introduction to Programming',
    'How to Code 101: A tutorial',
    'Syllabus for CC100:Programming 1',
    'PPT: CC 105 lesson',
    'Introduction to Programming',
    'How to Code 101: A tutorial',
    'Syllabus for CC100:Programming 1',
    'PPT: CC 105 lesson',
    'Syllabus for CC100:Programming 1',
    'PPT: CC 105 lesson',
  ]

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
  }

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const OpenSharableModal = () => {
    setShareModal(true)
  }

  const closeShareModal = () => {
    setShareModal(false)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const handleRatingPopoverOpen = (event) => {
    setRatingPopover(event.currentTarget)
  }

  const handleRatingPopoverClose = () => {
    setRatingPopover(null)
  }

  const open = Boolean(anchorEl)
  const isRatePopoverOpen = Boolean(ratingPopover)
  const handleNavigation = (section) => {
    console.log(`Navigating to: ${section}`)
    // Add navigation logic, e.g., using React Router:
    // navigate(`/${section}`);
  }

  const icons = [faComputer, faCode, faDatabase, faMobile, faRobot, faBrain]
  const colors = [
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#FF33A1',
    '#FFD700',
    '#8A2BE2',
  ]

  const authors = [
    {
      author: 'Darllaine R. Lincopinis',
      profile: image,
    },
    {
      author: 'Chris Tucker',
      profile: image,
    },
    {
      author: 'May Juneh',
      profile: image,
    },
    {
      author: 'Chris Tucker',
      profile: image,
    },
    {
      author: 'May Juneh',
      profile: image,
    },
    {
      author: 'Chris Tucker',
      profile: image,
    },
    {
      author: 'May Juneh',
      profile: image,
    },
  ]

  const Disciplines = [
    'Mathematics',
    'Artificial Intelligence',
    'Machine Learning',
    'Mathematics',
    'Artificial Intelligence',
    'Machine Learning',
  ]

  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  return (
    <Container fluid className="OpenMaterial">
      <div className="nav-container ">
        <p className="navigation-material">
          <span
            className="clickable"
            onClick={() => handleNavigation('browse')}
          >
            Browse
          </span>{' '}
          /
          <span
            className="clickable"
            onClick={() => handleNavigation('kahibawhub')}
          >
            Artificial Intelligence
          </span>{' '}
          /<span>Material: Title here</span>
        </p>
      </div>

      <Row className="container-bkg">
        <div className="title-container">
          <div>
            <span className="title">
              SELECTING THE APPROPRIATE APPLICATION DEVELOPMENT METHODOLOGY{' '}
            </span>
            <div className="subtitle-1">
              <span
                aria-owns={open ? 'user-rating' : undefined}
                aria-haspopup="true"
                onMouseEnter={handleRatingPopoverOpen}
              >
                User rating
              </span>
              <Popover
                id="user-rating"
                open={isRatePopoverOpen}
                anchorEl={ratingPopover}
                anchorReference="anchorPosition"
                onClose={handleRatingPopoverClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                anchorPosition={{ top: 280, left: 550 }}
                disableRestoreFocus
              >
                <div
                  className="card"
                  style={{
                    fontSize: '12px',
                    maxWidth: '19rem',
                    maxHeight: '52rem',
                  }}
                >
                  <div className="card-header">
                    <FontAwesomeIcon icon={faArrowTrendUp} color="maroon" />
                    <span> User Rating</span>
                  </div>
                  <div className="card-body">
                    <div>
                      <span style={{ fontStyle: 'italic' }}>
                        {' '}
                        SELECTING THE APPROPRIATE APPLICATION DEVELOPMENT
                        METHODOLOGY{' '}
                      </span>{' '}
                      is rated by 18 users.
                    </div>
                    <div>
                      <strong>Average rating: </strong> 4.28 out of 5 stars
                    </div>
                    <div>
                      <BarChart
                        dataset={chart}
                        yAxis={[{ scaleType: 'band', dataKey: 'label' }]}
                        series={[
                          {
                            dataKey: 'value',
                          },
                        ]}
                        layout="horizontal"
                        height={240} // Adjust chart height
                        width={300}
                        style={{
                          padding: '4%',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Popover>
              <span style={{ paddingLeft: '8px' }}>
                {' '}
                <StarRatings
                  rating={newRating}
                  starRatedColor="gold"
                  starDimension="20px"
                  starSpacing="2px"
                  name="rating"
                />
              </span>
            </div>

            <div className="subtitle-1">
              <span onClick={scrollToComments}>Comments</span>
              <span style={{ color: 'grey', paddingLeft: '15px' }}>(25)</span>
            </div>

            <div className="subtitle-container">
              <FontAwesomeIcon
                icon={faDownload}
                style={{ paddingRight: '15px' }}
                color="rgb(146, 12, 12)"
              />
              <span className="subtitle">Save to reading list</span>
            </div>
          </div>

          <div className="others">
            <span
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
            >
              Rate
            </span>
            <Popover
              id="mouse-over-popover"
              open={open}
              onClose={handlePopoverClose}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              disableRestoreFocus
            >
              <Box
                sx={{
                  width: 225,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 45,
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={1}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue)
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover)
                  }}
                  emptyIcon={<FontAwesomeIcon icon={faStar} />}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
              </Box>
            </Popover>
            <span onClick={scrollToComments}>Comment</span>
            <span onClick={OpenSharableModal}>Share</span>

            <Modal
              show={shareModal}
              onHide={closeShareModal}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header>
                <Modal.Title>Shareable Link</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                https://react-bootstrap.netlify.app/docs/components/modal/
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={closeShareModal}>Copy</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <Col className="col1">
          <div className="iframe-container">
            <iframe
              src={`${file}#toolbar=0&navpanes=0&scrollbar=0`}
              width="900"
              height="800"
              title="selected-material"
              style={{ border: '5px solid black' }}
            />

            <div>
              <span style={{ display: 'flex', gap: '10px' }}>
                <Button
                  className="button-style"
                  color="black"
                  startIcon={<FontAwesomeIcon icon={faFileDownload} />}
                >
                  Download
                </Button>
                <Button
                  className="button-style"
                  startIcon={<FontAwesomeIcon icon={faPrint} />}
                >
                  Print
                </Button>
              </span>
            </div>
          </div>
          <div className="section-2">
            <div className="section2-header">
              <p className="header2">More about this material</p>
            </div>
          </div>

          <Row>
            <Col>
              <Tooltip
                title="Access other materials with this type"
                placement="top-end"
              >
                <span className="content-label ">Material type:</span>{' '}
                <span className=" more-details">Article</span>
              </Tooltip>
              <div>
                <span className="content-label">Date Added:</span>{' '}
                <span>January 4, 2024</span>
              </div>
              <div>
                <span className="content-label">Date modified:</span>{' '}
                <span>January 8, 2024</span>
              </div>
              <div>
                <span className="content-label">Primary Audience:</span>{' '}
                <span>3rd year students</span>
              </div>
            </Col>

            <Col>
              <Tooltip
                title="Access other materials with this format"
                placement="top-end"
              >
                <span className="content-label ">Technical Format:</span>{' '}
                <span className=" more-details">PDF</span>
              </Tooltip>
              <div>
                <span className="content-label">Page Numbers:</span>{' '}
                <span>19</span>
              </div>
              <div>
                <span className="content-label">Word Count:</span>{' '}
                <span>4512</span>
              </div>
              <div>
                <span className="content-label">Accessed by User:</span>{' '}
                <span>No</span>
              </div>
            </Col>
          </Row>

          <Row className="section-3" ref={commentsSectionRef}>
            <div className="section-2">
              <div className="section2-header">
                <p className="header2">Comments</p>
              </div>
              <div className="action">
                <p style={{ padding: 0, margin: 0, fontSize: '12px' }}>
                  <span>Log in </span> to participate in the discussions or{' '}
                  <span>sign up </span> if you are not already a{' '}
                  <b>KahibawHub </b>
                  member.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '2% 0 2% 0',
                }}
              >
                <Avatar
                  alt="image"
                  src={image}
                  style={{ width: '60px', height: '60px' }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0', // Remove gap between TextField and Button
                    width: '100%',
                  }}
                >
                  <TextField
                    placeholder="Say something about this material."
                    label="Write your opinion here."
                    fullWidth
                    size="small"
                  />
                  <IconButton>
                    <FontAwesomeIcon color="maroon" icon={faPaperPlane} />
                  </IconButton>
                </div>
              </div>

              <div>
                <List
                  sx={{
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)', // White with 80% opacity
                    borderRadius: '8px', // Optional: adds rounded corners
                    padding: '8px',
                    maxHeight: '40rem',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                  }}
                >
                  {comments.map((comment, index) => (
                    <ListItem
                      style={{ borderBottom: '1px solid rgb(213, 212, 212)' }}
                    >
                      <ListItemAvatar>
                        <Avatar alt="image" src={comment.image} />
                      </ListItemAvatar>

                      <ListItemText
                        primary={
                          <React.Fragment>
                            <strong>{comment.name}</strong>{' '}
                            <span
                              style={{ fontStyle: 'italic', fontSize: '12px' }}
                            >
                              ({comment.userType})
                            </span>
                          </React.Fragment>
                        }
                        secondary={
                          <React.Fragment>
                            <span>{comment.timeCommented}</span>
                            <span style={{ color: 'black' }}>
                              {' '}
                              - {comment.comment}
                            </span>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            </div>
          </Row>
        </Col>

        <Col className="col2 d-flex flex-column align-items-center">
          <div className="main-container">
            <div className="author-card-container mb-5">
              <div className="card bg-light mb-3" style={{ maxWidth: '20rem' }}>
                <div className="card-header">
                  <FontAwesomeIcon icon={faUserPen} className="card-icons" />
                  Authors
                </div>

                <div className="card-text">
                  <Grid2 container>
                    <Grid2 item xs={6} md={3}>
                      <List
                        dense={dense}
                        sx={{
                          maxHeight: '20rem',
                          overflowY: 'auto',
                          overflowX: 'hidden',
                          backgroundColor: '#fff',
                          padding: '8px',
                          borderRadius: '8px',
                        }}
                      >
                        {authors.map((author, index) => (
                          <Tooltip title="View Profile" placement="top-end">
                            <ListItemButton key={index}>
                              <ListItemAvatar>
                                <Avatar
                                  alt={author.author}
                                  src={author.profile}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                primary={author.author}
                                primaryTypographyProps={{
                                  fontSize: '',
                                  fontWeight: '5', // Adjust font weight
                                }}
                              />
                            </ListItemButton>
                          </Tooltip>
                        ))}
                      </List>
                    </Grid2>
                  </Grid2>
                </div>
              </div>
            </div>

            <div className="author-card-container mb-5">
              <div className="card bg-light mb-3" style={{ maxWidth: '20rem' }}>
                <div className="card-header">
                  <FontAwesomeIcon icon={faLightbulb} className="card-icons" />
                  Disciplines
                </div>

                <div className="card-text">
                  <Grid2 container>
                    <Grid2 item xs={6} md={3}>
                      <List
                        dense={dense}
                        sx={{
                          maxHeight: '25rem',
                          overflowY: 'auto',
                          overflowX: 'hidden',
                          backgroundColor: '#fff',
                          padding: '8px',
                          borderRadius: '8px',
                        }}
                      >
                        {Disciplines.map((disc, index) => (
                          <Tooltip
                            title="Access materials related to this discipline"
                            placement="top-end"
                          >
                            <ListItemButton key={index}>
                              <ListItemAvatar>
                                <Avatar
                                  style={{ backgroundColor: randomColor }}
                                >
                                  <FontAwesomeIcon
                                    icon={
                                      icons[
                                        Math.floor(Math.random() * icons.length)
                                      ]
                                    }
                                  />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={disc}
                                primaryTypographyProps={{
                                  fontSize: '',
                                  fontWeight: '5', // Adjust font weight
                                }}
                              />
                            </ListItemButton>
                          </Tooltip>
                        ))}
                      </List>
                    </Grid2>
                  </Grid2>
                </div>
              </div>
            </div>

            <div className="author-card-container mb-5">
              <div
                className="card bg-light mb-3"
                style={{ maxWidth: '20rem', maxHeight: '34rem' }}
              >
                <div className="card-header">
                  <FontAwesomeIcon icon={faBookReader} className="card-icons" />
                  Similar materials
                </div>

                <div className="card-text">
                  <Grid2 container>
                    <Grid2 item xs={6} md={3}>
                      <List dense={dense}>
                        {otherMaterials.map((similar, index) => (
                          <Tooltip
                            key={index}
                            title="Access material"
                            placement="top-end"
                          >
                            <ListItemButton>
                              <ListItemText
                                primary={similar}
                                primaryTypographyProps={{
                                  fontSize: '',
                                  fontWeight: '5', // Adjust font weight
                                }}
                              />
                            </ListItemButton>
                          </Tooltip>
                        ))}
                        <Tooltip
                          title="View all similar material"
                          placement="top-end"
                        >
                          <p className="more-materials">More materials</p>
                        </Tooltip>
                      </List>
                    </Grid2>
                  </Grid2>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default OpenMaterial
