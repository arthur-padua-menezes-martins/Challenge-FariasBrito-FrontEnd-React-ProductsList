import React, { FC } from 'react'
import { IProps } from './script'
import { StyledTable } from './style'

const ComponentTable: FC<IProps> = ({ height, children }) => {
  return (
    <>
      <StyledTable height={height} className="mov__relative mov__up">
        {children}
      </StyledTable>
    </>
  )
}

export default ComponentTable
