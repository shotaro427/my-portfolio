import * as React from 'react'
import styled from 'styled-components'
import AppHeader from '../organisms/AppHeader'

const IndexWrapper = styled.div``

const IndexTemplate: React.FC = () => {
  return (
    <IndexWrapper>
      <AppHeader />
      <div style={{ height: '110vh' }} />
    </IndexWrapper>
  )
}

export default IndexTemplate
