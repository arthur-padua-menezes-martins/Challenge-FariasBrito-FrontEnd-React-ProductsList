import React, { FC } from 'react'
import { IPropsTypes } from './script'
import { StyledTd } from './style'

const ComponentTd: FC<IPropsTypes> = ({ type = 'offers', width, height, children }) => {
  return (
    <>
      <StyledTd className={ type === 'offers' ? 'flex flex-column align-start flex-align-center' : 'flex flex-center flex-align-center' } width={width} height={height}>
        {children}
      </StyledTd>
    </>
  )
}

export default ComponentTd
