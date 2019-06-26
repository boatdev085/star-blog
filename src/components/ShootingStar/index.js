import React from 'react'
import styled from 'styled-components'
import positionAndDelay from './positionAndDelay'
import ItemShootingStar from './itemShootingStar'
const ContainerShootingStar = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: rotate(145deg);
`
const createShootingStar = () => {
  let limit = positionAndDelay.length
  let arrStar = []
  for (let i = 0; i < limit; i++) {
    let positionTop = positionAndDelay[i].positionTop
    let animationDelay = positionAndDelay[i].delay
    arrStar.push(
      <ItemShootingStar
        key={`shooting-${i}`}
        positionTop={positionTop}
        delay={animationDelay}
      />
    )
  }
  return arrStar
}
const ShootingStar = () => {
  return <ContainerShootingStar>{createShootingStar()}</ContainerShootingStar>
}

export default ShootingStar
