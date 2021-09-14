import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import constant from '../../constant'

const Title = styled.h1`
  font-family: ${constant.font.family.DIN2014};
  font-size: ${constant.font.size.large};
  text-align: ${(props) => props.theme.textAlign};
  ${media.lessThan('large')`
    font-size: ${constant.font.size.middle};
  `}
  user-select: none;
`

type Props = {
  text: string
  textAlign: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify'
  styles?: Partial<React.CSSProperties>
}

const SectionTitle: React.FC<Props> = (props) => {
  const { text, textAlign = 'center', styles = {} } = props
  return (
    <Title style={styles} theme={{ textAlign }}>
      {text}
    </Title>
  )
}

SectionTitle.defaultProps = {
  styles: {}
}

export default SectionTitle
