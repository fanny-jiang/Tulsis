import { RECEIVE_CART, RECEIVE_CARTS, CHANGE_QUANTITY } from '../constants'

import axios from 'axios'

export const receiveCarts = allCarts => ({
  type: RECEIVE_CARTS,
  allCarts
})

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
})

export const changeQuantity = qty => ({
  type: CHANGE_QUANTITY,
  qty
})
