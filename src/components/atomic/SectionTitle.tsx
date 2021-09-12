import * as React from 'react'
import styled from 'styled-components'
import constant from '../../constant'

const Title = styled.h1`
  font-family: ${constant.font.family.DIN2014};
  font-size: 3em;
  text-align: ${(props) => props.theme.textAlign};
`

type Props = {
  text: string
  textAlign: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify'
}

const SectionTitle: React.FC<Props> = (props) => {
  const { text, textAlign = 'center' } = props
  return <Title theme={{ textAlign }}>{text}</Title>
}

export default SectionTitle
