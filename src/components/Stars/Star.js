import React from 'react'
import styled, { keyframes } from 'styled-components'
import ImgStar from '../../assets/star/asset_star.png'

const Blink = keyframes`
 0% {
      transform: scale(1);
      opacity: 1;
    }
    25% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    75% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
`
const BoxStar = styled.div`
  display: block;
  position: absolute;
  top: ${({ top }) => top || '25'}%;
  left: ${({ left }) => left || '25'}%;
  width: ${({ size }) => size || '50'}px;
  height: ${({ size }) => size || '50'}px;
  animation-name: ${({ delay }) => (delay ? Blink : '')};
  animation-duration: ${({ delay }) => delay || '3'}s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;

  img {
    width: 100%;
    height: 100%;
  }
`
const Star = props => {
  return (
    <BoxStar {...props}>
      <img src={ImgStar} alt="star" />
    </BoxStar>
  )
}

export default Star
