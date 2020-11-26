import React, { FC } from 'react'
import { StyledTable } from './style'

const ComponentTable: FC = ({ children }) => {
  return (
    <>
      <StyledTable className="efc__box-shadow-thin">
        {children}
      </StyledTable>
    </>
  )
}

export default ComponentTable
