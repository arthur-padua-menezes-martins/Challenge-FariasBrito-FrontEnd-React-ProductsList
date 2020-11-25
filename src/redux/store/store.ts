import { createStore, combineReducers } from 'redux'
import listReducers from '@/redux/store/ProductsList/reducers/list/List.reducers'
import cartReducers from '@/redux/store/ProductsList/reducers/cart/Cart.reducers'

const rootReducer = combineReducers({
  list: listReducers,
  cart: cartReducers
})

const store = createStore(rootReducer)

export default store
