import styled from 'styled-components'

interface IStyledTdProps {
  height: number
}
export const StyledTd = styled.td<IStyledTdProps>`
  width: 100%;
  height: ${props => `${props.height}rem` ?? '100%'} ;
`
