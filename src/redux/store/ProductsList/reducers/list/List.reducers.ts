import {
  ACTIONS_LIST_SAVE_PRODUCTS
} from '@/redux/store/ProductsList/actions/list/save/SaveProducts.actions.types'

export interface IListReducers {
  list: {
    productsList: Object[]
  }
}

const initialState = { productsList: [{}] }

export default function (state: any = initialState, { type, payload }: any) {
  switch (type) {
    case ACTIONS_LIST_SAVE_PRODUCTS:
      return {
        ...state, ...payload
      }

    default:
      return state
  }
}
