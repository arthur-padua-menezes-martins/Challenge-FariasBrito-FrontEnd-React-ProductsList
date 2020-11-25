import {
  ACTIONS_LIST_SAVE_PRODUCTS
} from './SaveProducts.actions.types'

export function actionsListSaveProducts (productsList: any) {
  return {
    type: ACTIONS_LIST_SAVE_PRODUCTS,
    payload: {
      ...productsList
    }
  }
}
