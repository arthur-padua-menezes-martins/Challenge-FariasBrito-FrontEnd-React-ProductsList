import {
  ACTIONS_CART_CALCULATOR_SUM
} from './Calculator.actions.types'

export function actionsCartCalculatorSum (sum: number) {
  return {
    type: ACTIONS_CART_CALCULATOR_SUM,
    payload: {
      sum
    }
  }
}
