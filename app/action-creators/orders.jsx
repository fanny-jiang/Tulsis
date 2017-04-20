import { RECEIVE_ORDERS } from '../constants'

export const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders
})