import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  orders: require('./orders-reducer').default,
  products: require('./products-reducer').default,
  reviews: require('./reviews-reducer').default,
  users: require('./users-reducer').default,
  cart: require('./cart-reducer').default,
  shippingpayment: require('./shippingpayment-reducer').default

})

export default rootReducer
