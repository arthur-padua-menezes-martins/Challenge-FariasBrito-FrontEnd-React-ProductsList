import React, { FC, useEffect, useState } from 'react'
import {
  useDispatch,
  actionsListSaveProducts
} from './store'
import {
  PageProducts,
  ComponentInitialTransition
} from './components'
import { AppController, RemoteSearch, FeatchHttpClient } from './script'
import { StyledApp } from './style'

const appController = new AppController(new RemoteSearch(new FeatchHttpClient()))
const App: FC = () => {
  const dispatch = useDispatch()

  const [transitionOnly, setTransitionOnly] = useState(true)
  const [productsList, setProductsList] = useState({ productsList: [{}] })

  useEffect(() => {
    (async () => {
      const productsList = await appController.search({
        url: 'https://api.jsonbin.io/b/5f7f43567243cd7e824cec6f',
        method: 'GET'
      })

      if (productsList?.body) {
        dispatch(actionsListSaveProducts(productsList.body))
        setProductsList(productsList.body)
      }
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
