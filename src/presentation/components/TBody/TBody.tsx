import React, { FC } from 'react'
import { StyledTBody } from './style'

const ComponentTable: FC = ({ children }) => {
  return (
    <>
      <StyledTBody>
        {children}
      </StyledTBody>
    </>
  )
}

export default ComponentTable
