import React, { useState, useEffect } from 'react'
import PageProducts from '@/presentation/pages/Products/Products'
import ComponentInitialTransition from '@/presentation/components/Transition/Initial/InitialTransition'
import { AppController } from './script'
import { RemoteSearch } from '@/data/usecases/http/remote/remote-search'
import { FeatchHttpClient } from '@/infra/http/client/fetch/fetch-http-client'
import { StyledApp } from './style'
import env from '@/main/config/env'

const appController = new AppController(new RemoteSearch(new FeatchHttpClient()))

const App: React.FC = () => {
  const [transitionOnly, setTransitionOnly] = useState(true)
  const [productsList, setProductsList] = useState({ productsList: [{}] })

  useEffect(() => {
    (async () => {
      const productsList = await appController.search({ url: env.url, method: env.method })
      productsList?.body && setProductsList(productsList.body)
    })()
  }, [])

  return (
    <StyledApp className="container">
      {transitionOnly && <ComponentInitialTransition setOnly={setTransitionOnly.bind(this)}/>}

      {!transitionOnly && <PageProducts productsList={productsList.productsList}/>}
    </StyledApp>
  )
}

export default App
