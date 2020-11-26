import styled from 'styled-components'

interface IStyledTableProps {
  height: number
}
export const StyledTable = styled.main<IStyledTableProps>`
  top: 0 !important;
  margin: 4rem auto;
  width: 36rem;
  height: ${props => `${props.height}rem` ?? '40rem'};
  background-color: ${props => props.theme.colors.grayQuintenary};
  border: 0.1rem ${props => props.theme.colors.greenPrimary} solid;
  overflow-y: auto;
`
