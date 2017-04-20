import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  orders: require('./orders-reducer').default,
  products: require('./products-reducer').default,
  reviews: require('./reviews-reducer').default,
  users: require('./users-reducer').default,

})

export default rootReducer
