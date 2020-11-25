import React, { useState } from 'react'
import PageSearch from '@/presentation/pages/Products/Products'
import ComponentInitialTransition from '@/presentation/components/Transition/Initial/InitialTransition'
import { StyledApp } from './style'

const App: React.FC = () => {
  const [transitionOnly, setTransitionOnly] = useState(true)

  return (
    <StyledApp className="container">
      {transitionOnly && <ComponentInitialTransition setOnly={setTransitionOnly.bind(this)}/>}

      {!transitionOnly && <PageSearch/>}
    </StyledApp>
  )
}

export default App
