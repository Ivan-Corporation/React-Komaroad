import React from 'react'
import styled, { keyframes } from 'styled-components'


const animationDelays = [
  -0.45,
  -0.3,
  -0.15
]

export const Loading = props => {
  return (
    <Container {...props}>
      {Array.from({ length: 3 }).map((_, i) => (
        <Ring className='ring' key={i} delay={animationDelays[i]} />
      ))}
    </Container>
  )
}

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const size = 20
const Ring = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${size}px;
  height: ${size}px;
  margin: 8px;
  border: ${Math.sqrt(size) - 1}px solid #fff;
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: white transparent transparent transparent;
  animation-delay: ${props => props.delay}s;
`

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 32px;
  height: 32px;
`
