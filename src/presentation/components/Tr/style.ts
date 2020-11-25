import styled from 'styled-components'

interface IStyledTrProps {
  height?: number
}
export const StyledTr = styled.tr<IStyledTrProps>`
  width: 100%;
  height: ${props => `${props.height ?? 5}rem`}
`
