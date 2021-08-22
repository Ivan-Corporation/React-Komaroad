import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const rippleAnimation = keyframes`
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const RippleItem = styled.div`
  position: absolute;
  left: ${props => `${props.x}px`};
  top: ${props => `${props.y}px`};
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 50%;
  user-select: none;
  pointer-events: none;
  transform: scale(0);
  opacity: .7;
  animation: ${rippleAnimation} .5s linear;
`

let count = 0
const RipplesBase = ({ children, onMouseDown, type, className, ...props }) => {
const [ripples, setRipples] = useState([])
const wrapper = useRef()

const createRipple = e => {
  const { width, height, left, top } = wrapper.current.getBoundingClientRect();
  const size = Math.max(width, height)
  const x = e.clientX - left - (size / 2)
  const y = e.clientY - top - (size / 2)
  setRipples([...ripples, { size, x, y, id: count++ }])
  onMouseDown && onMouseDown(e)
};

const Wrapper = type || 'div'

return (
  <Wrapper
    {...props}
    className={`ripples ${className}`}
    ref={wrapper}
    onMouseDown={createRipple}
  >
    {children}
    {ripples.map(r => (
      <RippleItem
        {...r}
        key={r.id}
        className='ripple'
        onAnimationEnd={() => setRipples(ripples.filter(x => x.id !== r.id))}
      />
    ))}
  </Wrapper>
)
}

const Ripples = styled(RipplesBase)`
  display: flex;
  flex-direction: row;
  background-color: #2a2734;
  color: white;
  box-shadow: none;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  user-select: none;
  `

  const BaseInput = styled.input`
  border: none;
  transition: translate .2s;
  &:focus {
    outline: none;
  }
  &::placeholder {
  color: white;
  }
`

const RippleInputBase = ({ className, left, right, ...props }) => (
  <Ripples className={className}>
    {left && left}
    <BaseInput
      className={`input ${className}`}
      autoComplete="off"
      {...props}
      />
    {right && right}
  </Ripples>
)

export const Input = styled(RippleInputBase)`
  &:focus-within {
    background-color: rgb(78, 86, 105);
  }
  height: 48px;
  width: 170px;
  display: flex;
  align-items: center;
  background-color: #343F57;
  color: white;
  box-shadow: none;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  width: -webkit-fill-available;
  user-select: none;
  .ripple {
    background: #6d7fac;
  }
`