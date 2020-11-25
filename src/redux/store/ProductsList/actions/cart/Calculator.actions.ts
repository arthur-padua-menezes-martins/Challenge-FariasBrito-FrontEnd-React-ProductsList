import {
  ACTIONS_CALCULATOR_SUM
} from './Calculator.actions.types'

export function actionsCalculatorSum (sum: number) {
  return {
    type: ACTIONS_CALCULATOR_SUM,
    payload: {
      sum
    }
  }
}
