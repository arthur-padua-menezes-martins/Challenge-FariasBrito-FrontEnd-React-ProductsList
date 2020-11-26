import React, { FC } from 'react'
import { IProps } from './script'
import { StyledTable } from './style'

const ComponentTable: FC<IProps> = ({ height, children }) => {
  return (
    <>
      <StyledTable height={height} className="efc__box-shadow-thin">
        {children}
      </StyledTable>
    </>
  )
}

export default ComponentTable
