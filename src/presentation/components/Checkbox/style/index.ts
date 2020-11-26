import styled, { css } from 'styled-components'

export const StyledComponentCheckbox = styled.div`
  margin: auto;
  
  input {
    display: none;
  }
`

interface IStyledComponentCheckboxLabelProps {
  enabled: boolean
}
export const StyledComponentCheckboxLabel = styled.label<IStyledComponentCheckboxLabelProps>`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.4rem;
  cursor: pointer;

  ${
    props => {
      switch (props.enabled) {
        case true:
          return css`
            background-color: ${props => `${props.theme.colors.greenPrimary}56`};
            border: 0.1rem ${props => props.theme.colors.greenPrimary} solid;
          `

        case false:
          return css`
            background-color: ${props => `${props.theme.colors.graySecondary}13`};
            border: 0.1rem ${props => `${props.theme.colors.graySecondary}26`} solid;
          `
      }
    }
  }
`
