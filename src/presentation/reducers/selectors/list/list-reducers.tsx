import { IListReducers } from '@/redux/store/ProductsList/reducers/list/List.reducers'

export default function (state: IListReducers) {
  return state.list.productsList
}
