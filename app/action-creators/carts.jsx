import { RECEIVE_CART, UPDATE_CART } from '../constants'

import axios from 'axios'

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
})

// this is meant just to update the product quantities in the cart
export const updateCart = cart => ({
  type: UPDATE_CART,
  cart
})
