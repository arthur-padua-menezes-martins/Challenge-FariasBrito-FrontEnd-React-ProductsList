import styled from 'styled-components'

interface IStyledTdProps {
  width?: string
  height?: number
}
export const StyledTd = styled.div<IStyledTdProps>`
  justify-content: flex-start;
  width: ${props => props.width ?? '100%'};
  height: ${props => `${props.height}rem` ?? '100%'};

  p {
    display: flex;
    font-size: 1.2rem;
    align-items: center;
  }

  p:nth-child(1) {
    height: 30%;
    font-weight: 500;
  }

  p:nth-child(2) {
    align-items: baseline;
    height: 40%;
    font-weight: 300;
    color: ${props => props.theme.colors.graySecondary}
  }

  p:nth-child(3) {
    height: 40%;
    font-weight: 500;
  }
`
