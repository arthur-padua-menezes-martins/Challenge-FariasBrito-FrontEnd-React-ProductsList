import React, { FC, useEffect, useState } from 'react'
import { IPropsTypes } from './script'

const PageProducts: FC<IPropsTypes> = (props) => {
  const [productsList] = useState(props.productsList)

  useEffect(() => {
    console.log('productsList: ', productsList)
  })

  return (
    <>
      retornando qualquer coisa
    </>
  )
}

export default PageProducts
