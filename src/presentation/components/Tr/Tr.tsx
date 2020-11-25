import React, { FC } from 'react'
import { IPropsTypes } from './script'
import { StyledTr } from './style'

const ComponentTr: FC<IPropsTypes> = ({ height, children }) => {
  return (
    <>
      <StyledTr height={height}>
        {children}
      </StyledTr>
    </>
  )
}

export default ComponentTr
