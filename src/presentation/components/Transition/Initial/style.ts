import styled, { keyframes } from 'styled-components'

const InitialTransition = keyframes`
  0% {
    stroke-dashoffset: 140;
  }
  40% {
    fill: transparent;
  }
  85% {
    fill: #4FFF95;
    opacity: 1
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
`

export const StyledContainerInitialTransition = styled.div`
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
      stroke: ${props => props.theme.colors.greenPrimary};
      animation: ${InitialTransition} 5.5s linear forwards;
    }
  }
`
