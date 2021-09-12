import * as React from 'react'
import styled from 'styled-components'
import Hero from '../organisms/Hero'
import AppHeader from '../organisms/Layout/AppHeader'
import WorkSection from '../organisms/WorkSection'

const IndexWrapper = styled.div``

const IndexTemplate: React.FC = () => {
  return (
    <IndexWrapper>
      <AppHeader />
      <Hero />
      <WorkSection />
    </IndexWrapper>
  )
}

export default IndexTemplate
