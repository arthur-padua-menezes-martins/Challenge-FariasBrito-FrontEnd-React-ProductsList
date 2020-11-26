import styled from 'styled-components'

export const StyledTable = styled.main`
  width: 36rem;
  height: 40rem;
  background-color: #FFFFFF;
  border: 0.1rem ${props => props.theme.colors.greenPrimary} solid;
  overflow-y: scroll;
`
