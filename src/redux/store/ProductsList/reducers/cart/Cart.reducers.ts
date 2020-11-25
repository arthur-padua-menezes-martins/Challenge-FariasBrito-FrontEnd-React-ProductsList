import {
  ACTIONS_CALCULATOR_SUM
} from '@/redux/store/ProductsList/actions/cart/Calculator.actions.types'

export default function (state: any = {}, { type, payload }: any) {
  switch (type) {
    case ACTIONS_CALCULATOR_SUM:
      return {
        ...state, payload
      }

    default:
      return state
  }
}
