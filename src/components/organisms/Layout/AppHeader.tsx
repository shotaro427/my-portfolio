import * as React from 'react'
import styled from 'styled-components'
import constant from '../../../constant'
import TextLink from '../../atomic/TextLink'

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

const DinH1 = styled.h1`
  font-family: ${constant.font.family.DIN2014};
  font-size: ${constant.font.size.middle};
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`
const AppBarWrapper = styled.header`
  z-index: 100;
  width: calc(100% - 48px);
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  padding: 0 24px;
  box-shadow: var(--shadow-appbar);
  background-color: white;
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

export default AppHeader
