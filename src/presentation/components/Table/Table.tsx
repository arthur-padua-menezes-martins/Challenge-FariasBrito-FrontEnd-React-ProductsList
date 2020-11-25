import React, { FC } from 'react'
import { StyledTable } from './style'

const ComponentTable: FC = ({ children }) => {
  return (
    <>
      <StyledTable>
        {children}
      </StyledTable>
    </>
  )
}

export default ComponentTable
