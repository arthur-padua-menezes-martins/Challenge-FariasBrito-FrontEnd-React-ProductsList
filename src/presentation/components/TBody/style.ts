import styled from 'styled-components'

export const StyledTBody = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  & > article:not(:last-child) {
    border-bottom: 0.1rem ${props => `${props.theme.colors.grayTertiary}56`} solid;
  }

  & > article:nth-child(2) {
    margin-top: 5rem;
  }
`
