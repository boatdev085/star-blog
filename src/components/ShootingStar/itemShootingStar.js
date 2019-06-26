import React from 'react'
import styled, { keyframes } from 'styled-components'
const ParticleAnimation = keyframes`
  from {
      left: -100px;
    }
    to {
      left: calc(100% + 100px);
    }
`
const ItemShootingStar = styled.div`
  position: absolute;
  left: -100px;
  width: 3px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.1);
  &:before {
    position: absolute;
    content: '';
    width: 100px;
    right: 1px;
    top: 0px;
    height: 3px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 255, 255, 0.4) 100%
    );
  }
  animation-name: ${ParticleAnimation};
  animation-duration: 5s;
  animation-delay: ${({ delay }) => delay || '3'}s;
  top: ${({ positionTop }) => positionTop || ''}%;
`
const itemShootingStar = props => {
  return <ItemShootingStar {...props} />
}

export default itemShootingStar
