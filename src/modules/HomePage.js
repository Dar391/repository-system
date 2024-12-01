import React from 'react'
import { Container } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/homePage.css'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Section1_intro from './homePageModules/Section1_intro'
import Section2_AnalysticsPage from './homePageModules/Section2_AnalysticsPage'
import Section3_CommunityPage from './homePageModules/Section3_CommunityPage'
import Section4_ExplorePage from './homePageModules/Section4_ExplorePage'
import Section5_AboutPage from './homePageModules/Section5_AboutPage'

const HomePage = ({ setIsAuthenticated }) => {
  return (
    <Container fluid>
      <Section1_intro setIsAuthenticated={setIsAuthenticated} />

      <Section2_AnalysticsPage />

      <Section3_CommunityPage />

      <Section4_ExplorePage />

      <Section5_AboutPage />
    </Container>
  )
}

export default HomePage
