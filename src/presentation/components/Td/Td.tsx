import React, { FC } from 'react'
import { IPropsTypes } from './script'
import { StyledTd } from './style'

const ComponentTd: FC<IPropsTypes> = ({ width, height, children }) => {
  return (
    <>
      <StyledTd className="flex-center" width={width} height={height}>
        {children}
      </StyledTd>
    </>
  )
}

export default ComponentTd
