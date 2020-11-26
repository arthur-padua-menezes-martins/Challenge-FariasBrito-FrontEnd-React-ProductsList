import {
  ACTIONS_LIST_SAVE_PRODUCTS
} from '@/redux/store/ProductsList/actions/list/save/SaveProducts.actions.types'

import {
  IHttpResponseBodyProductsList
} from '@/data/protocols/http/response/http-response'

export interface IListReducers {
  list: {
    [field: string]: any
    productsList: IHttpResponseBodyProductsList[]
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
