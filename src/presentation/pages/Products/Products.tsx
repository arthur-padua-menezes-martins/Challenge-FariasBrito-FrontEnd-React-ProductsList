import React, { FC, useEffect, useState } from 'react'
import {
  useSelector,
  listReducers, cartReducers
} from './store'
import {
  ComponentCheckbox, ComponentTable, ComponentTBody, ComponentTr, ComponentTh, ComponentTd
} from './components'
import {
  StyledPageProductsGridContainer, StyledPageProductsGridContent
} from './style'

const PageProducts: FC = () => {
  const list = useSelector(listReducers)
  const cart = useSelector(cartReducers)

  const [offersContent, setOffersContent] = useState([undefined])
  const [cartContent, setCartContent] = useState([undefined])

  useEffect(() => {
    console.log('cart: ', cart)
    console.log('list: ', list)
    const resultOffersContent: any[] = []
    const offersRightWidth = '20%'
    const offersLeftWidth = '80%'

    resultOffersContent.push(
      <ComponentTr position={'fixed'} height={5} direction={'row'}>
        <ComponentTh width={offersRightWidth}><span>adicionar</span></ComponentTh>
        <ComponentTh width={offersLeftWidth}><span>produto / valor</span></ComponentTh>
      </ComponentTr>
    )

    for (let i = 0; i < list.length; i++) {
      resultOffersContent.push(
        <ComponentTr>
          <ComponentTd width={offersRightWidth}>
            <ComponentCheckbox references={list[i].id}/>
          </ComponentTd>

          <ComponentTd width={offersLeftWidth}>
            <p>{list[i].name}</p>
            <p>{list[i].description}</p>
            <p>{list[i].price}</p>
          </ComponentTd>
        </ComponentTr>
      )
    }

    const resultCartContent: any[] = []
    const cartRightWidth = '50%'
    const cartLeftWidth = '50%'

    resultCartContent.push(
      <ComponentTr position={'fixed'} height={5}>
        <ComponentTh width={cartRightWidth}><span>produto</span></ComponentTh>
        <ComponentTh width={cartLeftWidth}><span>valor</span></ComponentTh>
      </ComponentTr>
    )

    setOffersContent(resultOffersContent)
    setCartContent(resultCartContent)
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

          <ComponentTable>
            <ComponentTBody>
              {cartContent}
            </ComponentTBody>
          </ComponentTable>

        </StyledPageProductsGridContent>

      </StyledPageProductsGridContainer>
    </>
  )
}

export default PageProducts
