import {
  ACTIONS_CART_SELECT_PRODUCTS
} from './SelectProducts.actions.types'

export function actionsCartSelectProducts (id: number, only: boolean) {
  return {
    type: ACTIONS_CART_SELECT_PRODUCTS,
    payload: { id, only }
  }
}
