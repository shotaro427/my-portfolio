import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled from 'styled-components'
import constant from '../../constant'
import SectionTitle from '../atomic/SectionTitle'

const AboutSection: React.FC = () => {
  return (
    <Background>
      <Section>
        <SectionContent>
          <StaticImage style={selfImageStyles} width={350} height={350} src="../../images/selfimage.png" alt="selfimage" />
          <Content>
            <SectionTitle styles={{ marginBottom: 0, marginTop: 0 }} text="ABOUT" textAlign="left" />
            <AboutBoldText>田内 翔太郎</AboutBoldText>
            <AboutText>
              京都在住のフリーランスエンジニア。
              <br />
              Web/モバイル/バックエンド/インフラ設計・構築など多岐にわたって活動中。
            </AboutText>
          </Content>
        </SectionContent>
      </Section>
    </Background>
  )
}

const AboutBoldText = styled.p`
  margin: 0;
  font-family: ${constant.font.family.DIN2014};
  font-size: ${constant.font.size.xsmall};
  font-weight: bold;
`

const AboutText = styled.p`
  margin: 0;
  font-family: ${constant.font.family.DIN2014};
  font-size: ${constant.font.size.xsmall};
`

const Background = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100vw;
  height: 45vw;
  margin: auto;
  background-image: url('/static/24750f5b30f27085e79d0e207b0e16cb/about-image.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 48px;
`

const Section = styled.section`
  position: relative;
  display: flex;
  max-width: 60%;
  justify-content: center;
  align-items: center;
  margin: auto;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  background: ${constant.color.white_a40};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`

const Content = styled.div`
  width: 60%;
`

const selfImageStyles: React.CSSProperties = {
  borderRadius: '10px',
  marginRight: '48px',
  border: '4px solid transparent'
}

export default AboutSection
