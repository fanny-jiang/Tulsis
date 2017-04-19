import { RECEIVE_ORDERS } from '../constants'

const initialOrderState = {
  selected: {},
  orderList: []
}

export default function(state = initialOrderState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case RECEIVE_ORDERS:
    newState.orderList = action.orders
    break
  default:
    return state
  }
  return newState
}
