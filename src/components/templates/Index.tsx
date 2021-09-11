import * as React from 'react'
import styled from 'styled-components'
import Hero from '../organisms/Hero'
import AppHeader from '../organisms/Layout/AppHeader'

const IndexWrapper = styled.div``

const IndexTemplate: React.FC = () => {
  return (
    <IndexWrapper>
      <AppHeader />
      <Hero />
    </IndexWrapper>
  )
}

export default IndexTemplate
