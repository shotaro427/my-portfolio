import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled from 'styled-components'
import constant from '../../constant'

const HeroWrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
`
const HeroContentWrapper = styled.div`
  width: 100%;
  position: relative;
  user-select: none;
`

const HeroText = styled.h1`
  font-family: ${constant.font.family.DIN2014};
  font-size: ${constant.font.size.xlarge};
  padding-left: 15%;
`

const heroBgStyles: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '20%',
  zIndex: -1,
  transform: 'translateY(-50%)',
  filter: 'blur(20px)'
}

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <HeroContentWrapper>
        <StaticImage style={heroBgStyles} src="../../images/hero-image.svg" alt="Hero" placeholder="blurred" />
        <HeroText>
          SHOTARO TAUCHI's <br /> Personal Site
        </HeroText>
      </HeroContentWrapper>
    </HeroWrapper>
  )
}

export default Hero
