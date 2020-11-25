import { createStore, combineReducers } from 'redux'
import cartReducers from '@/redux/store/ProductsList/reducers/cart/Cart.reducers'

const rootReducer = combineReducers({
  cart: cartReducers
})

const store = createStore(rootReducer)

export default store
