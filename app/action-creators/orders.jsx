import { RECEIVE_ORDERS, CHECKOUT_ORDER } from '../constants'

export const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders
})

export const checkoutOrder = () => ({
  type: CHECKOUT_ORDER,
  status: 'complete'
})
