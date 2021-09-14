import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import constant from '../../constant'
import GlassButton from '../atomic/GlassButton'
import SectionTitle from '../atomic/SectionTitle'

const AboutSection: React.FC = () => {
  return (
    <Section>
      <SectionTitle styles={{ marginBottom: 0, marginTop: 0 }} text="ABOUT" textAlign="left" />
      <SectionContent>
        <StaticImage style={selfImageStyles} width={350} height={350} src="../../images/selfimage.png" alt="selfimage" />
        <Content>
          <div>
            <AboutBoldText>田内 翔太郎</AboutBoldText>
            <AboutText>
              京都在住のフリーランスエンジニア。
              <br />
              Web/モバイル/バックエンド/インフラ設計・構築など多岐にわたって活動中。
              <br />
              また、個人的に開発したサービスを運営したり、ブログを書いたりもしています。
            </AboutText>
          </div>
          <GlassButton />
        </Content>
      </SectionContent>
      <StaticImage style={{ ...ballStyle, ...ball1Style }} width={350} height={350} src="../../images/Rectangle-1.png" alt="ball1" />
      <StaticImage style={{ ...ballStyle, ...ball2Style }} width={100} height={100} src="../../images/Rectangle-2.png" alt="ball2" />
      <StaticImage style={{ ...ballStyle, ...ball3Style }} width={100} height={100} src="../../images/Rectangle-3.png" alt="ball3" />
      <StaticImage style={{ ...ballStyle, ...ball4Style }} width={300} height={300} src="../../images/Rectangle-4.png" alt="ball4" />
    </Section>
  )
}

const AboutBoldText = styled.p`
  margin: 0;
  font-family: ${constant.font.family.DIN2014};
  font-size: 2em;
  font-weight: bold;
  ${media.lessThan('large')`
    font-size: ${constant.font.size.xsmall};
  `}
  user-select: none;
`

const AboutText = styled.p`
  margin: 0;
  font-family: ${constant.font.family.DIN2014};
  font-size: ${constant.font.size.xsmall};
  ${media.lessThan('large')`
    font-size: ${constant.font.size.xxsmall};
  `}
  user-select: none;
`

const SectionContent = styled.div`
  margin-top: 40px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: stretch;
  padding: 48px;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  background: linear-gradient(135deg, #8d42a81f, #8d42a836);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 1;
`

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 60%;
  ${media.lessThan('large')`
    max-width: 80%;
  `}
  justify-content: center;
  align-items: center;
  margin: auto;
`

const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const selfImageStyles: React.CSSProperties = {
  borderRadius: '10px',
  marginRight: '48px',
  border: '4px solid transparent'
}

const ballStyle: React.CSSProperties = {
  position: 'absolute'
}

const ball1Style: React.CSSProperties = {
  top: '0',
  right: '0',
  transform: 'translate(40%, 0)'
}

const ball2Style: React.CSSProperties = {
  top: '0',
  left: '0',
  transform: 'translate(-50%, -50%)',
  zIndex: 2
}

const ball3Style: React.CSSProperties = {
  bottom: '0',
  right: '0',
  transform: 'translate(50%, 50%)',
  zIndex: 2
}

const ball4Style: React.CSSProperties = {
  bottom: '0',
  left: '0',
  transform: 'translate(-50%, 50%)'
}

export default AboutSection
