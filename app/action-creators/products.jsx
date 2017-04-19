import { RECEIVE_PRODUCTS } from '../constants'

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
})
