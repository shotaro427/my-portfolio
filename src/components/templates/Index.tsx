import * as React from 'react'
import styled from 'styled-components'
import AboutSection from '../organisms/AboutSection'
import Hero from '../organisms/Hero'
import AppFooter from '../organisms/Layout/AppFooter'
import AppHeader from '../organisms/Layout/AppHeader'
import WorkSection from '../organisms/WorkSection'

const IndexWrapper = styled.div``

const IndexTemplate: React.FC = () => {
  return (
    <IndexWrapper>
      <AppHeader />
      <Hero />
      <WorkSection />
      <AboutSection />
      <AppFooter />
    </IndexWrapper>
  )
}

export default IndexTemplate
