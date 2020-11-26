import styled from 'styled-components'

interface IStyledTrProps {
  width?: string
  height?: number
}
export const StyledTh = styled.div<IStyledTrProps>`
  width: ${props => props.width ?? '100%'};
  height: ${props => `${props.height ?? 5}rem`};

  span {
    font-size: 1.4rem;
    font-weight: 600;
  }
`
