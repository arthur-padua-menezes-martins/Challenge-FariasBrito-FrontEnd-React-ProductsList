import styled from 'styled-components'

interface IStyledTrProps {
  position?: string
  height?: number
  direction?: string
}
export const StyledTr = styled.article<IStyledTrProps>`
  flex-direction: ${props => props.direction};
  width: 100%;
  height: ${props => `${props.height ?? 10}rem`};
`
