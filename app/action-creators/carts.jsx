import { RECEIVE_CART } from '../constants'

import axios from 'axios'

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
})
