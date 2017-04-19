import { RECEIVE_ORDERS } from '../constants'

export const receiveProducts = orders => ({
  type: RECEIVE_ORDERS,
  orders
})