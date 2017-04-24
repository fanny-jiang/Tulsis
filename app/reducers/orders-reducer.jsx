import { RECEIVE_ORDERS, CHECKOUT_ORDER } from '../constants'

const initialOrderState = {
  selected: {},
  orderList: [],
  status: ''
}

export default function(state = initialOrderState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case RECEIVE_ORDERS:
    newState.orderList = action.orders
    break
  case CHECKOUT_ORDER:
    newState.status = action.status
    break
  default:
    return state
  }
  return newState
}
