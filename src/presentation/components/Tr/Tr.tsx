import React, { FC } from 'react'
import { IPropsTypes } from './script'
import { StyledTr } from './style'

const ComponentTr: FC<IPropsTypes> = ({ position, height, direction = 'row', children }) => {
  return (
    <>
      <StyledTr position={position} height={height} direction={direction} className="flex">
        {children}
      </StyledTr>
    </>
  )
}

export default ComponentTr
