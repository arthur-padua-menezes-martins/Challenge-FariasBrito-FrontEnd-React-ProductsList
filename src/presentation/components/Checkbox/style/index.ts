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
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: 0.7s linear;

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
