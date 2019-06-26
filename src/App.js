import React from 'react'
import styled from 'styled-components'
import ShootingStar from './components/ShootingStar/index'
import Star from './components/Stars/index'

const Container = styled.div`
  background-color: #102131;
  color: #fff;
  height: 100vh;
  width: 100%;
  z-index: 1;
`

const App = () => {
  return (
    <Container>
      <Star />
      <ShootingStar />
    </Container>
  )
}

export default App
