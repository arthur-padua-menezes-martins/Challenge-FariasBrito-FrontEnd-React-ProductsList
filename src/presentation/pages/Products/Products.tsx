import React, { FC, useEffect, useState } from 'react'
import { IPropsTypes } from './script'
import {
  StyledPageProductsGridContainer, StyledPageProductsGridContent
} from './style'

const PageProducts: FC<IPropsTypes> = (props) => {
  const [productsList] = useState(props.productsList)

  useEffect(() => {
    console.log('productsList: ', productsList)
  })

  return (
    <>
      <StyledPageProductsGridContainer className="container flex-align-center">

        <StyledPageProductsGridContent area={'informations'} className="flex-center flex-end">

        </StyledPageProductsGridContent>

        <StyledPageProductsGridContent area={'offers'} className="flex-center">
          <article>Ofertas</article>
        </StyledPageProductsGridContent>

        <StyledPageProductsGridContent area={'cart'} className="flex-center">
          <article>Carrinho</article>
        </StyledPageProductsGridContent>

      </StyledPageProductsGridContainer>
    </>
  )
}

export default PageProducts
