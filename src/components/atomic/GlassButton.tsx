import * as React from 'react'
import styled from 'styled-components'
import constant from '../../constant'

const GlassButton: React.FC = () => {
  return (
    <Button>
      <ButtonLink href="/#">Read More</ButtonLink>
    </Button>
  )
}

const ButtonLink = styled.a`
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  color: #000;
  z-index: 1;
  font-weight: 400;
  font-family: ${constant.font.family.DIN2014};
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  transition: 0.5s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
    transform: skewX(45deg) translateX(0);
    transition: 0.5s;
  }
`

const Button = styled.div`
  position: relative;
  width: 155px;
  height: 50px;

  &:hover ${ButtonLink} {
    letter-spacing: 3px;

    &::before {
      transform: skewX(45deg) translateX(200%);
    }
  }

  &:hover {
    &::before {
      bottom: 0;
      height: 50%;
      width: 80%;
      border-radius: 30px;
      transition-delay: 0.2s;
    }

    &::after {
      top: 0;
      height: 50%;
      width: 80%;
      border-radius: 30px;
      transition-delay: 0.2s;
    }
  }
`

export default GlassButton
