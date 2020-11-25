import React, { FC } from 'react'
import { IPropsTypes } from './script'
import { StyledTh } from './style'

const ComponentTh: FC<IPropsTypes> = ({ width, height, children }) => {
  return (
    <>
      <StyledTh width={width} height={height} className="flex-center">
        <span className="flex-center">
          {children}
        </span>
      </StyledTh>
    </>
  )
}

export default ComponentTh
