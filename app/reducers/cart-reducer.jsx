import { RECEIVE_CART } from '../constants'

const initialCartState = {
  cart: []
}

export default (state = initialCartState, action) => {

  switch (action.type) {
    case RECEIVE_CART:
      return action.cart

  }
  return state
}
