import {
  RECEIVE_SPINFO
} from '../constants'
import axios from 'axios'
import { checkoutOrder } from './orders'

export const addNewSPInfo = state => {
  return (dispatch, getState) => {
    // Still need to add orderId ${state.orderId}
    return axios.put(`/api/orders/1/buy`, {
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

