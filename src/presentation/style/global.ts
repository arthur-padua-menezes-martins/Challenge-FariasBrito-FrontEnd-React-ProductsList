import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    grayPrimary: '#394867',
    graySecondary: '#8C9BB5',
    grayTertiary: '#CFD7E4',
    grayQuaternary: '#E5E5E5',
    grayQuintenary: '#efefef',

    greenPrimary: '#4FFF95',

    darkPrimary: '#1C1C1E',
    darkSecondary: '#363740',

    blackPrimary: '#0f0f0f ',
    blackSecondary: '#181818'
  }
}

export default createGlobalStyle`
* {
  margin: 0rem;
  padding: 0rem;
  box-sizing: border-box;
  letter-spacing: 0.1rem;
  font-family: Roboto, monospace, Arial, Helvetica, sans-serif;
  font-size: 62.5%;
  background: transparent;
  border: 0;
  outline: 0;
}

html {
  scrollbar-width: thin;
  scrollbar-color: ${() => theme.colors.greenPrimary} transparent;
}

body {
  line-height: 1.2rem;
  color: #FFFFFF;
  background-color: ${() => theme.colors.grayQuintenary};
  height: auto;
  pointer-events: none;
}

input {
  font-family: Roboto, monospace, Arial, Helvetica, sans-serif;
}

::-webkit-scrollbar {
  width: 0.4rem;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background: ${() => theme.colors.greenPrimary};
}

.container  {
  width: 100%;
  height: 100vh;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-row {
  flex-direction: row;
}

.flex-column {
  flex-direction: column;
}

.flex-space-between {
  justify-content: space-between;
}
`
