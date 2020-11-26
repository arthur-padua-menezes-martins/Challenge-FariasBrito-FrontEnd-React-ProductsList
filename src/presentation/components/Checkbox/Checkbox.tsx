import React, { FC, useState } from 'react'
import {
  useDispatch,
  actionsCartSelectProducts
} from './store'
import {
  IProps
} from './script'
import {
  StyledComponentCheckbox,
  StyledComponentCheckboxLabel
} from './style'

const ComponentCheckbox: FC<IProps> = (props) => {
  const dispatch = useDispatch()
  const { references } = props

  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <StyledComponentCheckbox>

        <StyledComponentCheckboxLabel onClick={() => modifyEnabled(!enabled)} enabled={enabled} htmlFor={`checkbox-${references}`} className="flex-center" />

        <input checked={enabled} type="checkbox" id={`checkbox-${references}`}/>

      </StyledComponentCheckbox>
    </>
  )

  function modifyEnabled (newState: boolean) {
    setEnabled(newState)
    dispatch(actionsCartSelectProducts(references, newState))
  }
}

export default ComponentCheckbox
