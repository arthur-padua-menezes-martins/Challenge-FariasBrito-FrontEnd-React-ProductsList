import styled, { keyframes } from 'styled-components'
import { IStyledContainerInitialTransitionProps } from './script'

const InitialTransition = keyframes`
  0% {
    stroke-dashoffset: 140;
  }
  30% {
    stroke: #4FFF95;
  }
  75% {
    opacity: 1
  }
  80% {
    stroke-dashoffset: 0;
    fill: #4FFF95;
  }
  100% {
    stroke-dasharray: 280;
    opacity: 0;
  }
`
export const StyledContainerInitialTransition = styled.div<IStyledContainerInitialTransitionProps>`
  margin: auto;
  height: 100vh;
  
  svg {
    width: auto;
    height: 60vh;
    path {
      fill: transparent;
      stroke-width: 0.4;
      stroke-dasharray: 140;
      stroke-dashoffset: 140;
      stroke: transparent;
      animation: ${InitialTransition} ${props => `${((props.timeout - 500) / 1000)}s`} linear forwards;
    }
  }
`
