import React from 'react'
import ComponentInitialTransition from '@/presentation/components/Transitions/Initial/InitialTransition'
import { StyledApp } from './style'

const App: React.FC = () => {
  return (
    <>
      <ComponentInitialTransition/>
      <StyledApp>
        Hello
      </StyledApp>
    </>
  )
}

export default App
