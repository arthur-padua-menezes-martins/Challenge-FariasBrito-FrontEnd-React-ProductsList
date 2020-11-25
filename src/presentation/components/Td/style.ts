import styled from 'styled-components'

interface IStyledTdProps {
  width?: string
  height?: number
}
export const StyledTd = styled.td<IStyledTdProps>`
  width: ${props => props.width ?? '100%'};
  height: ${props => `${props.height}rem` ?? '100%'};
`
