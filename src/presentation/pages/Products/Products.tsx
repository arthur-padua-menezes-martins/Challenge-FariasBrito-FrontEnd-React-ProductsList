import React, { FC, useEffect, useState } from 'react'
import {
  useSelector,
  listReducers, cartReducers
} from './store'
import {
  ComponentTable, ComponentTBody, ComponentTr, ComponentTh, ComponentTd
} from './components'
import { IPropsTypes } from './script'
import {
  StyledPageProductsGridContainer, StyledPageProductsGridContent
} from './style'

const PageProducts: FC<IPropsTypes> = (props) => {
  const list = useSelector(listReducers)
  const cart = useSelector(cartReducers)

  const [productsList] = useState(props.productsList)
  const [offersContent, setOffersContent] = useState([undefined])

  useEffect(() => {
    console.log('productsList: ', productsList)
    console.log('cart: ', cart)
    console.log('list: ', list)
    console.log('list.length: ', list.length)
    const resultOffersContent: any[] = []

    resultOffersContent.push(
      <ComponentTr height={5}>
        <ComponentTh width={'15%'}>adicionar</ComponentTh>
        <ComponentTh width={'85%'}>produto / valor</ComponentTh>
      </ComponentTr>
    )

    for (let i = 0; i < list.length; i++) {
      resultOffersContent.push(
        <ComponentTr>
          <ComponentTd width={'15%'}></ComponentTd>
          <ComponentTd width={'85%'}></ComponentTd>
        </ComponentTr>
      )
    }

    setOffersContent(resultOffersContent)
  }, [])

  return (
    <>
      <StyledPageProductsGridContainer className="container flex-align-center">

        <StyledPageProductsGridContent area={'informations'} className="flex-center flex-end">
        </StyledPageProductsGridContent>

        <StyledPageProductsGridContent area={'offers'} className="flex-center">
          <article>Ofertas</article>

          <ComponentTable>
            <ComponentTBody>
              {offersContent}
            </ComponentTBody>
          </ComponentTable>

        </StyledPageProductsGridContent>

        <StyledPageProductsGridContent area={'cart'} className="flex-center">
          <article>Carrinho</article>
        </StyledPageProductsGridContent>

      </StyledPageProductsGridContainer>
    </>
  )
}

export default PageProducts
