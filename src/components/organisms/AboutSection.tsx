import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import styled from 'styled-components'
import constant from '../../constant'
import SectionTitle from '../atomic/SectionTitle'

const AboutSection: React.FC = () => {
  return (
    <Background>
      <Section>
        <StaticImage style={selfImageStyles} width={350} height={350} src="../../images/selfimage.png" alt="selfimage" />
        <Content>
          <SectionTitle styles={{ marginBottom: 0 }} text="ABOUT" textAlign="left" />
          <AboutBoldText>田内 翔太郎</AboutBoldText>
          <AboutText>
            京都在住のフリーランスエンジニア。
            <br />
            Web/モバイル/バックエンド/インフラ設計・構築など多岐にわたって活動中。
            <br />
            また、個人的にブログや開発したサービスを運営したりもしています。
          </AboutText>
        </Content>
      </Section>
    </Background>
  )
}

const AboutBoldText = styled.p`
  margin: 0;
  font-family: ${constant.font.family.DIN2014};
  font-size: ${constant.font.size.small};
  font-weight: bold;
`

const AboutText = styled.p`
  margin: 0;
  font-family: ${constant.font.family.DIN2014};
  font-size: ${constant.font.size.small};
`

const Background = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: auto;
  background-image: url('/static/0685722d208b6591a93329fbdc3a06ad/about-image.svg');
  background-repeat: no-repeat;
  background-position: center;
`

const Section = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  background: ${constant.color.white_a40};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`

const Content = styled.div`
  width: 50%;
  margin: 0 32px;
`

const selfImageStyles: React.CSSProperties = {
  borderRadius: '10px',
  margin: '32px 40px 32px 32px',
  border: '4px solid transparent'
}

export default AboutSection
