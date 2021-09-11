import * as React from 'react'
import styled from 'styled-components'

type Props = {
  href: string
  text: string
}

const Link = styled.a`
  color: var(--color-custom-black);
  opacity: 0.5;
  text-decoration: none;
  font-family: din-2014, sans-serif;
  font-size: 1.5em;
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
