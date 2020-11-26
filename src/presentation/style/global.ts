import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    whitePrimary: '#F5F5F5',
    whiteSecondary: '#FFFFFF',

    grayPrimary: '#394867',
    graySecondary: '#8C9BB5',
    grayTertiary: '#CFD7E4',
    grayQuaternary: '#E5E5E5',
    grayQuintenary: '#EFEFEF',

    greenPrimary: '#4FFF95',

    bluePrimary: '#14274E',
    blueSecondary: '#109CF1',

    darkPrimary: '#1C1C1E',
    darkSecondary: '#363740',

    blackPrimary: '#0F0F0F ',
    blackSecondary: '#181818'
  },
  resolution: {
    firstBreakpointMobile: '900px'
  }
}

export default createGlobalStyle`
* {
  margin: 0rem;
  padding: 0rem;
  box-sizing: border-box;
  letter-spacing: 0.1rem;
  font-family: 'Poppins', 'Roboto', monospace, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 62.5%;
  background: transparent;
  border: 0;
  outline: 0;
  font-smooth: auto;
  -webkit-font-smoothing: antialiased;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  scrollbar-width: thin;
  scrollbar-color: ${() => theme.colors.greenPrimary} transparent;
}

body {
  line-height: 1.2rem;
  color: ${() => theme.colors.grayPrimary};
  background-color: ${() => theme.colors.grayQuaternary};
  height: auto;
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

.flex {
  display: flex;
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

.flex-start {
  justify-content: flex-start;
}

.flex-end {
  justify-content: flex-end;
}

.flex-align-center {
  align-items: center;
}

.align-start {
  align-items: flex-start;
}

.efc__box-shadow-thin {
  
}
`
/*
box-shadow: 0rem 0rem 0.6rem ${() => theme.colors.grayQuaternary};
*/
