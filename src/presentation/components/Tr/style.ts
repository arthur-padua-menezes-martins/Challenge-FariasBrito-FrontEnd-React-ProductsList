import styled from 'styled-components'

interface StyledTrProps {
  height?: number
}
export const StyledTr = styled.tr<StyledTrProps>`
  width: 100%;
  height: ${props => `${props.height ?? 5}rem`}
`
