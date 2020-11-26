import {
  ACTIONS_CART_CALCULATOR_SUM
} from '@/redux/store/ProductsList/actions/cart/calc/Calculator.actions.types'
import {
  ACTIONS_CART_SELECT_PRODUCTS
} from '@/redux/store/ProductsList/actions/cart/select/SelectProducts.actions.types'

export interface ICartReducers {
  cart: {
    total: number
  }
}

const initialState = {
  total: 0
}

export default function (state: any = initialState, { type, payload }: any) {
  switch (type) {
    case ACTIONS_CART_CALCULATOR_SUM:
      return {
        ...state, ...payload
      }

    case ACTIONS_CART_SELECT_PRODUCTS:
      console.log(type, state, payload)
      return {
        ...state, payload
      }

    default:
      return state
  }
}
