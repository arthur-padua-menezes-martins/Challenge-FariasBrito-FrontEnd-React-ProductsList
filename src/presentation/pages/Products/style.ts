import styled, { css } from 'styled-components'

export const StyledPageProductsGridContainer = styled.main`
  display: grid;
  grid-template-areas: 'informations' 'offers cart';
  grid-template-columns: 1FR 1FR;
  margin: auto;
  width: 90vw;

  @media (max-width: ${props => props.theme.resolution.firstBreakpointMobile}) {
    grid-template-columns: 1FR;
    grid-template-areas: 'informations' 'offers' 'cart';
  }
`

interface IStyledPageProductsGridContentProps {
  area: string
}
export const StyledPageProductsGridContent = styled.section<IStyledPageProductsGridContentProps>`
  margin: auto;
  padding-bottom: 5rem;
  justify-content: flex-start;
  width: 36rem;
  min-height: 5rem;
  background-color: #000000;

  ${
    props => {
      switch (props.area) {
        case 'informations':
          return css`
            grid-column: 1 / span 2;
          `

        case 'offers':
          return css``

        case 'cart':
          return css``
      }
    }
  }

  article {
    display: flex;
    align-items: center;
    margin-bottom: 5rem;
    font-size: 2.4rem;
    color: ${props => props.theme.colors.bluePrimary};
  }
`
