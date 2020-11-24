import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '@/presentation/style/global'
import ComponentInitialTransition from '@/presentation/components/Transition/Initial/InitialTransition'
import { StyledApp } from './style'

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <ComponentInitialTransition/>
        <StyledPagApp className="container flex-center">
          Hello
        </StyledApp>
      </ThemeProvider>
    </>
  )
}

export default App
