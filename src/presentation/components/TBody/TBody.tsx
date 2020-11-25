import React, { FC } from 'react'
import { StyledTBody } from './style'

const ComponentTable: FC = (props) => {
  return (
    <>
      <StyledTBody>
        {props.children}
      </StyledTBody>
    </>
  )
}

export default ComponentTable
