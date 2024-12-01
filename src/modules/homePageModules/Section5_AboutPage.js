import React from 'react'
import { Col, Row } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Element } from 'react-scroll'

const Section5_AboutPage = () => {
  return (
    <Element name="about-us" style={{ height: '80vh', overflow: 'hidden' }}>
      <Row id="about-us" style={{ color: 'white' }}>
        <Col style={{ padding: '10px' }}>
          <div>
            <p
              className="heading3 text-center"
              style={{ color: 'white', paddingBottom: '2%' }}
            >
              About KahibawHub
            </p>
          </div>

          <Row>
            <Col
              xs={15}
              md={4}
              style={{ margin: '0px 15px 0px 20px' }}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={500}
                showThumbs={false}
              >
                <div>
                  <img
                    src="https://img.freepik.com/free-photo/college-girls-studying-together_23-2149038414.jpg"
                    alt="Slide 1"
                    className="img-fluid carousel-image"
                  />
                </div>

                <div>
                  <img
                    src="https://img.freepik.com/free-photo/colleagues-studying-together-during-group-study_23-2149211084.jpg"
                    alt="Slide 1"
                    className="img-fluid carousel-image"
                  />
                </div>

                <div>
                  <img
                    src="https://www.cns-partners.com/hubfs/IT-System-Blog-Images/Slide1.jpg"
                    alt="Slide 1"
                    className="img-fluid carousel-image"
                  />
                </div>
              </Carousel>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <p style={{ textAlign: 'justify', padding: '0px 30px 0px 30px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eleifend congue nibh in consequat. Etiam molestie tristique
                libero, in blandit eros semper vitae. Ut orci dolor, auctor eget
                accumsan vel, vehicula ac massa. Pellentesque nec velit
                ullamcorper, facilisis augue sit amet, finibus neque. Aenean
                rhoncus sapien eu augue laoreet, luctus iaculis tortor laoreet.
                In consequat congue eleifend. Cras tristique eget mauris eget
                lobortis. Vestibulum viverra lorem vitae lorem scelerisque,
                condimentum pretium sem rhoncus.
              </p>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faFacebookF} />
                </Col>

                <Col>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Col>

                <Col>
                  <FontAwesomeIcon icon={faTwitter} />
                </Col>

                <Col>
                  <FontAwesomeIcon icon={faInstagram} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Element>
  )
}

export default Section5_AboutPage
