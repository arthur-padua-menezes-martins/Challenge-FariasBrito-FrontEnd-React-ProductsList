/* eslint-disable @typescript-eslint/restrict-plus-operands */
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

  const [informationsContent, setInformationsContent] = useState([undefined])
  const [offersContent, setOffersContent] = useState([undefined])
  const [cartContent, setCartContent] = useState([undefined])
  const [cartCalcContent, setCartCalcContent] = useState([undefined])

  useEffect(() => {
    const resultInformationsContent: any[] = []
    const informationsWidth = '100%'
    const info = ['Arthur Padua de Menezes Martins', 'arthur.software.developer@gmail.com', '(85) 98548-8073  |  (85) 99920-3361']

    resultInformationsContent.push(
      <>
        <ComponentTr height={5}>
          <ComponentTh height={5} width={informationsWidth}>
            <span>nome / email / telefone</span>
          </ComponentTh>
        </ComponentTr>
      </>
    )

    for (let i = 0; i < info.length; i++) {
      resultInformationsContent.push(
        <>
          <ComponentTr height={5}>
            <ComponentTh height={5} width={informationsWidth}>
              <p>{info[Number(i)]}</p>
            </ComponentTh>
          </ComponentTr>
        </>
      )
    }

    setInformationsContent(resultInformationsContent)
  }, [])

  useEffect(() => {
    const resultOffersContent: any[] = []
    const offersRightWidth = '25%'
    const offersLeftWidth = '75%'

    resultOffersContent.push(
      <ComponentTr height={5} direction={'row'}>
        <ComponentTh width={offersRightWidth}><span>adicionar</span></ComponentTh>
        <ComponentTh width={offersLeftWidth}><span>produto / valor</span></ComponentTh>
      </ComponentTr>
    )

    for (let i = 0; i < list.length; i++) {
      const product = list[i]

      resultOffersContent.push(
        <ComponentTr>
          <ComponentTd width={offersRightWidth}>
            <ComponentCheckbox references={product.id}/>
          </ComponentTd>

          <ComponentTd width={offersLeftWidth}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </ComponentTd>
        </ComponentTr>
      )
    }
    setOffersContent(resultOffersContent)
  }, [])

  useEffect(() => {
    const resultCartContent: any[] = []
    const resultCartCalcAcumulator: any[] = []
    const cartCalcAcumulator: any[] = []
    const cartRightWidth = '50%'
    const cartLeftWidth = '50%'

    resultCartContent.length = 0
    resultCartCalcAcumulator.length = 0

    resultCartContent.push(
      <ComponentTr height={5}>
        <ComponentTh width={cartRightWidth}><span>produto</span></ComponentTh>
        <ComponentTh width={cartLeftWidth}><span>valor</span></ComponentTh>
      </ComponentTr>
    )

    for (const i of Object.keys(cart.selected)) {
      const reference = cart.selected[Number(i)]

      if (reference.only === true) {
        const productName = list[(reference.id) - 1].name
        const productPrice = list[(reference.id) - 1].price
        cartCalcAcumulator.push(
          Number(
            (productPrice.replace('R$ ', '')).replace(',', '.')
          )
        )

        resultCartContent.push(
          <ComponentTr>
            <ComponentTd type={'cart'} width={cartRightWidth}>
              <p>{productName}</p>
            </ComponentTd>

            <ComponentTd type={'cart'} width={cartLeftWidth}>
              <p>{productPrice}</p>
            </ComponentTd>
          </ComponentTr>
        )
      }
    }

    resultCartCalcAcumulator.push(
      <ComponentTr height={5}>
        <ComponentTh width={cartRightWidth}><span>total</span></ComponentTh>
        <ComponentTh width={cartLeftWidth}>
          <span>R$ { (cartCalcAcumulator.reduce((acumulator, value) => {
            acumulator += value
            return acumulator
          }, 0)).toFixed(2) }</span>
        </ComponentTh>
      </ComponentTr>
    )

    setCartContent(resultCartContent)
    setCartCalcContent(resultCartCalcAcumulator)
  }, [cart])

  return (
    <>
      <StyledPageProductsGridContainer className="container flex-align-center">

        <StyledPageProductsGridContent area={'informations'} className="flex-center flex-end">
          <article>Informações Pessoais</article>

          <ComponentTable height={15}>
            <ComponentTBody>
              {informationsContent}
            </ComponentTBody>
          </ComponentTable>
        </StyledPageProductsGridContent>

        <StyledPageProductsGridContent area={'offers'} className="flex-center">
          <article>Ofertas</article>

          <ComponentTable height={45}>
            <ComponentTBody>
              {offersContent}
            </ComponentTBody>
          </ComponentTable>

        </StyledPageProductsGridContent>

        <StyledPageProductsGridContent area={'cart'} className="flex-center">
          <article>Carrinho</article>

          <ComponentTable height={25}>
            <ComponentTBody>
              {cartContent}
            </ComponentTBody>
          </ComponentTable>

          <ComponentTable height={5}>
            <ComponentTBody>
              {cartCalcContent}
            </ComponentTBody>
          </ComponentTable>

        </StyledPageProductsGridContent>

      </StyledPageProductsGridContainer>
    </>
  )
}

export default PageProducts
