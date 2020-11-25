import React, { FC } from 'react'
import { StyledTable } from './style'

const ComponentTable: FC = (props) => {
  return (
    <>
      <StyledTable>
        {props.children}
      </StyledTable>
    </>
  )
}

export default ComponentTable
