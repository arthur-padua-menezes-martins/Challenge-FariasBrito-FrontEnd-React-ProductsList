import styled, { css, keyframes } from 'styled-components'

const GridContainerInitialTransition = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const StyledPageProductsGridContainer = styled.main`
  display: grid;
  grid-template-areas: 'informations informations' 'offers cart';
  grid-template-columns: 1FR 1FR;
  margin: auto;
  width: 90vw;
  height: 100%;
  animation: ${GridContainerInitialTransition} 10s linear ease-in-out;

  & > section {
    position: relative;
  }

  @media (max-width: ${props => props.theme.resolution.firstBreakpointMobile}) {
    grid-template-areas: 'informations' 'offers' 'cart';
    grid-template-columns: 1FR;
  }
`

interface IStyledPageProductsGridContentProps {
  area: string
}
export const StyledPageProductsGridContent = styled.section<IStyledPageProductsGridContentProps>`
  grid-area: ${props => props.area};
  margin: auto;
  flex-direction: column;
  justify-content: flex-start;
  width: 36rem;
  min-height: 5rem;

  ${
    props => {
      switch (props.area) {
        case 'informations':
          return css`
            grid-column: 1 / span 2;
          `

        case 'offers':
          return css`
            @media (max-width: ${props => props.theme.resolution.firstBreakpointMobile}) {
              margin: 30rem auto;
            }
          `

        case 'cart':
          return css`
            @media (max-width: ${props => props.theme.resolution.firstBreakpointMobile}) {
              margin: 30rem auto;
            }
          `
      }
    }
  }

  & > article {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    font-size: 2.4rem;
    color: ${props => props.theme.colors.greenPrimary};
  }
`
