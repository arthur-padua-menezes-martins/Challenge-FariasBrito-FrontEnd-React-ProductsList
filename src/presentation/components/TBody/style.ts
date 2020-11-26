import styled from 'styled-components'

export const StyledTBody = styled.section`
  width: 100%;
  height: 100%;

  & > article:first-child {
    color: #FFFFFF;
    background-color: ${props => props.theme.colors.greenPrimary};
  }
  
  & > article:not(:last-child) {
    border-bottom: 0.1rem ${props => `${props.theme.colors.grayTertiary}26`} solid;
  }
`
