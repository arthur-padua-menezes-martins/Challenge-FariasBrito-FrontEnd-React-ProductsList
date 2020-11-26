import {
  ACTIONS_CART_CALCULATOR_SUM
} from '@/redux/store/ProductsList/actions/cart/calc/Calculator.actions.types'
import {
  ACTIONS_CART_SELECT_PRODUCTS
} from '@/redux/store/ProductsList/actions/cart/select/SelectProducts.actions.types'

export interface ICartReducers {
  cart: {
    total: number
    selected: {
      [field: number]: any
    }
  }
}

const initialState = {
  total: 0, selected: {}
}

export default function (state: any = initialState, { type, payload }: any) {
  switch (type) {
    case ACTIONS_CART_CALCULATOR_SUM:
      return {
        ...state, ...payload
      }

    case ACTIONS_CART_SELECT_PRODUCTS:
      return {
        ...state, selected: { ...(state).selected, ...payload }
      }

    default:
      return state
  }
}
