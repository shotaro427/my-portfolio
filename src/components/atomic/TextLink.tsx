import * as React from 'react'
import styled from 'styled-components'
import constant from '../../constant'

type Props = {
  href: string
  text: string
}

const Link = styled.a`
  color: ${constant.color.black};
  opacity: 0.5;
  text-decoration: none;
  font-family: ${constant.font.family.DIN2014};
  font-size: ${constant.font.size.small};
  padding: 0 16px;
  &:hover {
    opacity: 1;
  }
`

const TextLink: React.FC<Props> = (props) => {
  const { href, text } = props
  return <Link href={href}>{text}</Link>
}

export default TextLink
