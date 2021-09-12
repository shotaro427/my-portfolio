import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled from 'styled-components'
import SectionTitle from '../atomic/SectionTitle'

const WorkSection: React.FC = () => {
  return (
    <Section>
      <SectionTitle textAlign="center" text="WORK" />
      <WorkContents>
        <StaticImage style={heroBgStyles} src="../../images/hero-image.svg" alt="Hero" placeholder="blurred" />
        <Card />
        <Card />
        <Card />
      </WorkContents>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const heroBgStyles: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: -1,
  transform: 'translate(-50%, -50%)',
  filter: 'blur(40px)'
}

const WorkContents = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

const Card = styled.div`
  flex-basis: 100px;
  height: 200px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`

export default WorkSection
