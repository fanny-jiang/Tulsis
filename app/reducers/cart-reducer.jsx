import { RECEIVE_CART, RECEIVE_CARTS, CHANGE_QUANTITY } from '../constants'

const initialCartState = {
  qty: 0,
  cart: [],
  allCarts: []
}

export default (state = initialCartState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_CART:
      newState = action.cart
      break

    case RECEIVE_CARTS:
      newState = action.allCarts
      break

    case CHANGE_QUANTITY:
      newState = action.qty
      break

    default:
      return state
  }
  return newState
}
