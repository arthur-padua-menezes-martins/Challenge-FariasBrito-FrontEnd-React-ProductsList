import {
  ACTIONS_CART_CALCULATOR_SUM
} from '@/redux/store/ProductsList/actions/cart/Calculator.actions.types'

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

    default:
      return state
  }
}
