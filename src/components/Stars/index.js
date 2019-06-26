import React from 'react'
import styled from 'styled-components'
import Star from './Star'
import positionAndSizeStar from './PositionAndSizeStar'
const ContainerStar = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`
const CreateStar = () => {
  let limit = positionAndSizeStar.length
  let arrStar = []
  for (let i = 0; i < limit; i++) {
    let top = positionAndSizeStar[i].top
    let left = positionAndSizeStar[i].left
    let delay = positionAndSizeStar[i].delay
    let size = positionAndSizeStar[i].size
    arrStar.push(
      <Star key={'star' + i} top={top} left={left} size={size} delay={delay} />
    )
  }
  return <>{arrStar}</>
}
const StarBlink = () => {
  return <ContainerStar>{CreateStar()}</ContainerStar>
}

export default StarBlink
