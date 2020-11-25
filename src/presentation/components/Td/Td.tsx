import React, { FC } from 'react'
import { IPropsTypes } from './script'
import { StyledTd } from './style'

const ComponentTd: FC<IPropsTypes> = ({ height, children }) => {
  return (
    <>
      <StyledTd height={height}>
        {children}
      </StyledTd>
    </>
  )
}

export default ComponentTd
