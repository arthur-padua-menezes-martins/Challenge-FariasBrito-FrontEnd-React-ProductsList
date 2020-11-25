import styled from 'styled-components'

export const StyledTBody = styled.table`
  width: 100%;
  height: 100%;
  & > tr:not(:last-child) {
    border-bottom: 0.1rem ${props => `${props.theme.colors.grayTertiary}56`} solid;
  }
`
