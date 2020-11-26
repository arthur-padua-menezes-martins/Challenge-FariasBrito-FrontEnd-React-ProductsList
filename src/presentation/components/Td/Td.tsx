import React, { FC } from 'react'
import { IPropsTypes } from './script'
import { StyledTd } from './style'

const ComponentTd: FC<IPropsTypes> = ({ width, height, children }) => {
  return (
    <>
      <StyledTd className="flex flex-column align-start flex-align-center" width={width} height={height}>
        {children}
      </StyledTd>
    </>
  )
}

export default ComponentTd
