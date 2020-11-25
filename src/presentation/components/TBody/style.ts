import styled from 'styled-components'

export const StyledTBody = styled.tbody`
  width: 100%;
  max-height: 40rem;
  height: 100%;
  overflow-y: scroll;

  & > tr:not(:last-child) {
    border-bottom: 0.1rem ${props => `${props.theme.colors.grayTertiary}56`} solid;
  }
`
