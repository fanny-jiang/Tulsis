import {
  RECEIVE_SPINFO
} from '../constants'
import axios from 'axios'
import { checkoutOrder } from './orders'

export const addNewSPInfo = (state, orderId) => {
  return (dispatch, getState) => {
    // console.log('ROUTE FROM SHIP ACTION CREATOR', `/api/cart/${orderId}/buy`)
    return axios.put(`/api/cart/${orderId}/buy`, {
      // payment: {
      //   paymentName: state.paymentName,
      //   ccNumber: state.ccNumber,
      //   ccType: state.ccType,
      //   cvc: state.cvc,
      //   expiry: state.expiry
      // },
      address: {
        shippingName: state.shippingName,
        street: state.street,
        city: state.city,
        zip: state.zip,
        state: state.state,
      }
    })
    .then(() => dispatch(checkoutOrder()))
    .catch(console.error)
  }
}

