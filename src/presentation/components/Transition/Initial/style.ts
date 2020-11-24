import styled, { keyframes } from 'styled-components'

const InitialTransition = keyframes`
  0% {
    stroke-dashoffset: 140;
  }
  40% {
    stroke-dashoffset: 0;
    fill: transparent;
  }
  70%  {
    fill: #FFFFFF;
    stroke-dashoffset: 0;
  },
  100% {
    fill: transparent;
    stroke-dashoffset: 0;
  }
`

export const StyledContainerInitialTransition = styled.div`
  margin: auto;
  height: 100vh;
  
  svg {
    max-height: 33vh;
    height: 33vh;
    min-height: 33vh;
    path {
      fill: transparent;
      stroke-width: 0.4;
      stroke-dasharray: 140;
      stroke-dashoffset: 140;
      stroke: #FFFFFF;
      animation: ${InitialTransition} 6s linear forwards;
    }
  }
`
