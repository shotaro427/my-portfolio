import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled from 'styled-components'
import constant from '../../constant'

const Hero: React.FC = () => {
  return (
    <HeroWrapper>
      <StaticImage style={heroBgStyles} src="../../images/hero-image.svg" alt="Hero" placeholder="blurred" />
      <HeroContentWrapper>
        <HeroText>
          SHOTARO TAUCHI's <br /> Personal Site
        </HeroText>
      </HeroContentWrapper>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  background-image: url('/static/fa31e88bc52fdf3f06109d8ec3f42a0e/hero-image.svg');
  background-repeat: no-repeat;
  background-position: 30%;
`
const HeroContentWrapper = styled.div`
  width: 100%;
  position: relative;
  user-select: none;
  backdrop-filter: blur(20px);
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

export default Hero
