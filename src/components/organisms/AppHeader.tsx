import * as React from 'react'
import styled from 'styled-components'
import TextLink from '../atomic/TextLink'

const DinH1 = styled.h1`
  font-family: din-2014, sans-serif;
  font-size: 2.5em;
`
const AppBarWrapper = styled.div`
  width: calc(100% - 48px);
  position: fixed;
  display: flex;
  justify-content: center;
  padding: 0 24px;
  box-shadow: rgb(25 28 31 / 4%) 0px 8px 16px, rgb(25 28 31 / 4%) 0px -1px 0px;
`

const ContentWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
`
const AppHeader: React.FC = () => {
  return (
    <AppBarWrapper>
      <ContentWrapper>
        <DinH1>SHOTARO TAUCHI</DinH1>
        <LinksWrapper>
          <TextLink text="Blog" href="/#" />
          <TextLink text="Work" href="/#" />
        </LinksWrapper>
      </ContentWrapper>
    </AppBarWrapper>
  )
}

export default AppHeader
