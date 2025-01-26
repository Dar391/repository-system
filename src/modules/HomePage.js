import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/homePage.css'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Section1_intro from './homePageModules/Section1_intro'
import Section2_AnalysticsPage from './homePageModules/Section2_AnalysticsPage'
import Section3_CommunityPage from './homePageModules/Section3_CommunityPage'
import Section4_ExplorePage from './homePageModules/Section4_ExplorePage'
import Section5_AboutPage from './homePageModules/Section5_AboutPage'

const HomePage = ({
  setIsAuthenticated,
  isScrollToAbout,
  setIsScrollToAbout,
}) => {
  useEffect(() => {
    if (isScrollToAbout) {
      const aboutSection = document.getElementById('section5_about_page')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
      setIsScrollToAbout(false)
    }
  }, [isScrollToAbout, setIsScrollToAbout])
  return (
    <Container fluid>
      <Section1_intro setIsAuthenticated={setIsAuthenticated} />

      <Section2_AnalysticsPage />

      <Section3_CommunityPage />

      <Section4_ExplorePage />

      <Section5_AboutPage id="section5_about_page" />
    </Container>
  )
}

export default HomePage
