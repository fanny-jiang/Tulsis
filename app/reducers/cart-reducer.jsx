import { RECEIVE_CART, UPDATE_CART } from '../constants'

const initialCartState = {
  cart: []
}

export default (state = initialCartState, action) => {
  switch (action.type) {
  case RECEIVE_CART:
    return action.cart
  case UPDATE_CART:
    return action.cart
  }
  return state
}
