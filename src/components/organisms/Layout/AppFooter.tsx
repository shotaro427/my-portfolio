import * as React from 'react'
import styled from 'styled-components'
import constant from '../../../constant'

const AppFooter: React.FC = () => {
  return (
    <Footer>
      <FooterText>©︎ Shotaro Tacuhi 2021</FooterText>
    </Footer>
  )
}

const Footer = styled.footer`
  height: 100px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const FooterText = styled.p`
  font-family: ${constant.font.family.DIN2014};
  color: ${constant.color.black};
  font-size: ${constant.font.size.xsmall};
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`

export default AppFooter
